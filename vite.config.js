import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
    Sitemap({
      hostname: 'https://bageshworigroup.com.np',
      dynamicRoutes: [
        '/',
        '/branch/bhageswari-electronics',
        '/branch/bhageswori-automotives',
        '/branch/bhageswori-multimotors',
        '/branch/bhageswori-ebikes',
        '/branch/bhageswori-recondition-house',
        '/branch/bhageswori-bike-house',
      ],
    }),
  ],
})
