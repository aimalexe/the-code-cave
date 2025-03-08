import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

const manifest = {
  name: 'Exercise App',
  short_name: 'Exe App',
  description: 'I am a simple Vite PWA app',
  icons: [
    {
      src: '/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'favicon'
    },
    {
      src: '/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'favicon'
    },
    {
      src: '/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
      purpose: 'apple touch icon'
    },
    {
      src: '/maskable_icon.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any maskable'
    }
  ],
  screenshots: [
    {
      src: '/desktop-screenshot.png',
      sizes: '1280x720',
      type: 'image/png',
      form_factor: 'wide'
    },
    {
      src: '/mobile-screenshot.png',
      sizes: '750x1334',
      type: 'image/png',
      form_factor: 'narrow'
    }
  ],
  theme_color: '#171717',
  background_color: '#f0e7db',
  display: 'standalone',
  scope: '/',
  start_url: './',
  orientation: 'portrait'
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      ...manifest,
      devOptions: {
        enabled: true
      },
      registerType: 'autoUpdate', 
      manifest: manifest
    })
  ],
  base: './'
})
