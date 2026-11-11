import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use the same base for dev, build and preview. A missing preview environment
// variable must never turn image/font/script requests into HTML fallbacks.
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || '/brindle-property-maintenance/',
  build: { target: 'es2022' },
})
