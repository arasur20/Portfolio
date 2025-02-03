import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/Portfolio/',
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true, // Ensures React Router works correctly
  },
})
