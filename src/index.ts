export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Try to serve the requested file from assets
    const response = await env.ASSETS.fetch(request);

    // If asset is found, return it
    if (response.status !== 404) {
      return response;
    }

    // For SPA routing: serve index.html for any non-existent routes
    if (request.method === "GET") {
      return await env.ASSETS.fetch(
        new Request(`${new URL(request.url).origin}/index.html`, {
          method: "GET",
        }),
      );
    }

    return response;
  },
};
