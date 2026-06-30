import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev
export default defineConfig({
  base: '/pack-essentials/',
  plugins: [react()],
})
