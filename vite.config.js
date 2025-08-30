import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/huang/',  // GitHub Pages 子路径
  server: {
    port: 3000,
    open: true
  }
})
