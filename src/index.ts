export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Try to get the asset
    let response = await env.ASSETS.fetch(request);

    // If 404 and it's a navigation request, serve index.html
    if (response.status === 404 && request.method === "GET") {
      // Check if it looks like a route (no file extension)
      if (!url.pathname.includes(".")) {
        response = await env.ASSETS.fetch(
          new Request(new URL("/index.html", url.origin)),
        );
      }
    }

    return response;
  },
};
