import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://shoppers-prime-backend-production.up.railway.app/",
      "/uploads/": "https://shoppers-prime-backend-production.up.railway.app/",
    }
  }
})
