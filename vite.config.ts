import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || './',
  build: {
    target: 'es2022',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three/') || id.includes('node_modules/@react-three/')) return 'construction'
        },
      },
    },
    // Three's renderer is intentionally a separate, lazy 247 kB gzip payload.
    chunkSizeWarningLimit: 1000,
  },
})
