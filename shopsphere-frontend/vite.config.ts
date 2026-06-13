import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor';
            }
            if (id.includes('@tanstack')) {
              return 'query';
            }
            if (id.includes('axios')) {
              return 'axios';
            }
            return 'deps';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000,
  }
})