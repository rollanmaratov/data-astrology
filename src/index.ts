import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

export default {
  async fetch(request, env) {
    try {
      // Serve static files from the website bucket
      return await getAssetFromKV({
        request,
        waitUntil: () => {},
      }, {
        ASSET_NAMESPACE: env.ASSETS,
        ASSET_MANIFEST: typeof __STATIC_CONTENT_MANIFEST === 'string' 
          ? JSON.parse(__STATIC_CONTENT_MANIFEST)
          : {}
      })
    } catch (e) {
      // If not found, serve index.html for SPA routing
      if (request.method === 'GET') {
        try {
          return await getAssetFromKV({
            request: new Request('index.html', { method: 'GET' }),
            waitUntil: () => {},
          }, {
            ASSET_NAMESPACE: env.ASSETS,
            ASSET_MANIFEST: typeof __STATIC_CONTENT_MANIFEST === 'string'
              ? JSON.parse(__STATIC_CONTENT_MANIFEST)
              : {}
          })
        } catch (e) {
          return new Response('Not found', { status: 404 })
        }
      }
      return new Response('error', { status: 500 })
    }
  }
}
