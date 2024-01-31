import shopify from 'vite-plugin-shopify'

export default {
  build: { 
    emptyOutDir: false 
  },
  plugins: [
    shopify()
  ]
}