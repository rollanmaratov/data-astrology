export default {
  async fetch(request, env) {
    try {
      // Attempt to fetch the requested asset
      const response = await env.ASSETS.fetch(request);

      // If found, return it
      if (response != null) {
        return response;
      }
    } catch (error) {
      // Continue to fallback
    }

    // For SPA: If not found and it's a GET request, serve index.html
    if (request.method === "GET") {
      try {
        return await env.ASSETS.fetch(new Request(new URL("/index.html", request.url)));
      } catch (error) {
        return new Response("Not Found", { status: 404 });
      }
    }

    return new Response("Not Found", { status: 404 });
  },
};


