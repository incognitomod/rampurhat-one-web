// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages requires the `base` path set to your repo name
export default defineConfig({
  plugins: [react()],
  base: '/rampurhat-one-web/', // <-- your GitHub repo name
  server: { host: true }
})
