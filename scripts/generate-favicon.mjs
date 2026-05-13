import { createHash } from 'crypto';
import { deflateSync } from 'zlib';
import { writeFileSync } from 'fs';

const SIZE = 32;

// Draw the favicon into a pixel buffer (RGBA)
function drawFavicon() {
  const pixels = new Uint8Array(SIZE * SIZE * 4);

  const set = (x, y, r, g, b, a = 255) => {
    if (x < 0 || x >= SIZE || y < 0 || y >= SIZE) return;
    const i = (y * SIZE + x) * 4;
    pixels[i] = r; pixels[i+1] = g; pixels[i+2] = b; pixels[i+3] = a;
  };

  // Background: slate-950 (#020617) with rounded corners (r=5)
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      const r = 5;
      const dx = Math.min(x, SIZE - 1 - x);
      const dy = Math.min(y, SIZE - 1 - y);
      if (dx < r && dy < r) {
        const dist = Math.sqrt((r - dx) ** 2 + (r - dy) ** 2);
        if (dist > r) { set(x, y, 0, 0, 0, 0); continue; }
      }
      set(x, y, 2, 6, 23); // #020617
    }
  }

  // Draw Saturn icon in purple (#a855f7) scaled to fit 32x32
  // Original viewBox 0 0 24 24 → scale = 32/24
  const scale = 32 / 24;
  const purple = [168, 85, 247];

  const drawLine = (x0, y0, x1, y1, thickness = 1.2) => {
    const steps = Math.ceil(Math.hypot(x1 - x0, y1 - y0) * 4);
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const px = x0 + (x1 - x0) * t;
      const py = y0 + (y1 - y0) * t;
      for (let dy = -Math.ceil(thickness); dy <= Math.ceil(thickness); dy++) {
        for (let dx = -Math.ceil(thickness); dx <= Math.ceil(thickness); dx++) {
          const d = Math.sqrt(dx*dx + dy*dy);
          if (d <= thickness) {
            const alpha = Math.min(255, Math.round((1 - d/thickness) * 255));
            const ix = Math.round(px) + dx;
            const iy = Math.round(py) + dy;
            if (ix >= 0 && ix < SIZE && iy >= 0 && iy < SIZE) {
              const idx = (iy * SIZE + ix) * 4;
              if (pixels[idx + 3] > 0) { // only draw on background
                pixels[idx] = purple[0];
                pixels[idx+1] = purple[1];
                pixels[idx+2] = purple[2];
                pixels[idx+3] = Math.max(pixels[idx+3], alpha);
              }
            }
          }
        }
      }
    }
  };

  // Draw ellipse (orbit ring) — approximated as polyline
  const drawEllipse = (cx, cy, rx, ry, steps = 80) => {
    for (let i = 0; i < steps; i++) {
      const a0 = (i / steps) * Math.PI * 2;
      const a1 = ((i + 1) / steps) * Math.PI * 2;
      drawLine(
        cx + Math.cos(a0) * rx, cy + Math.sin(a0) * ry,
        cx + Math.cos(a1) * rx, cy + Math.sin(a1) * ry
      );
    }
  };

  // Draw circle (planet body) centered at 12,12 with radius ~4.8
  const cx = 12 * scale, cy = 12 * scale;
  drawEllipse(cx, cy, 4.8 * scale * 0.72, 4.8 * scale * 0.72); // planet body (circle)

  // Draw the diagonal ring/band across Saturn (the ring line)
  // From path: the ring goes roughly from (3.29, 20.7) to (20.7, 3.29)
  drawLine(3.5 * scale, 20.5 * scale, 20.5 * scale, 3.5 * scale, 1.0);

  return pixels;
}

function crc32(buf) {
  let crc = 0xFFFFFFFF;
  for (const b of buf) {
    crc ^= b;
    for (let k = 0; k < 8; k++) crc = (crc & 1) ? (0xEDB88320 ^ (crc >>> 1)) : (crc >>> 1);
  }
  return ((crc ^ 0xFFFFFFFF) >>> 0);
}

function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const typeBytes = Buffer.from(type);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBytes, data])));
  return Buffer.concat([len, typeBytes, data, crc]);
}

function encodePNG(pixels) {
  const parts = [Buffer.from([137,80,78,71,13,10,26,10])]; // PNG signature

  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(SIZE, 0); ihdr.writeUInt32BE(SIZE, 4);
  ihdr[8] = 8; ihdr[9] = 6; // 8-bit RGBA
  parts.push(chunk('IHDR', ihdr));

  // IDAT — one filter byte (0) per row + pixel data
  const raw = Buffer.alloc(SIZE * (1 + SIZE * 4));
  for (let y = 0; y < SIZE; y++) {
    raw[y * (SIZE * 4 + 1)] = 0; // filter = None
    for (let x = 0; x < SIZE; x++) {
      const src = (y * SIZE + x) * 4;
      const dst = y * (SIZE * 4 + 1) + 1 + x * 4;
      raw[dst] = pixels[src]; raw[dst+1] = pixels[src+1];
      raw[dst+2] = pixels[src+2]; raw[dst+3] = pixels[src+3];
    }
  }
  parts.push(chunk('IDAT', deflateSync(raw)));
  parts.push(chunk('IEND', Buffer.alloc(0)));
  return Buffer.concat(parts);
}

const pixels = drawFavicon();
const png = encodePNG(pixels);
writeFileSync('public/favicon.png', png);
console.log('favicon.png generated');
