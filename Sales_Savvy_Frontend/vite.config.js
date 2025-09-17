import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,  // Set this to whatever port you want
    strictPort: true // Optional: if true, it won't fallback to another port if this one is busy
  }
})
