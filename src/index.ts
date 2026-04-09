export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Don't redirect static files or API calls
    if (pathname.startsWith("/assets/") || pathname.endsWith(".svg") || pathname.endsWith(".ico")) {
      return env.ASSETS.fetch(request);
    }

    // Try to serve the requested file
    let response = await env.ASSETS.fetch(request);
    
    // If file found, return it
    if (response.status !== 404) {
      return response;
    }

    // For SPA routing on 404, serve index.html
    if (request.method === "GET") {
      return await env.ASSETS.fetch("/index.html");
    }

    return response;
  },
};




