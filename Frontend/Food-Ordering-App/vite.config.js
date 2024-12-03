import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    watch: {
      usePolling: true, // Enable polling
      interval: 100,    // Set polling interval
    },
    headers: {
      'Cache-Control': 'no-store',
    },
  },
})

