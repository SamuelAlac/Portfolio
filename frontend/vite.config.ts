import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import {createHtmlPlugin } from 'vite-plugin-html'
import viteSitemap from 'vite-plugin-sitemap'

const SITE_URL = process.env.VITE_SITE_URL || 'http://localhost:5173';

const routes = [
  { path: '/', name: 'Home' },
  { path: '/About', name: 'About' },
  { path: '/Achievements', name: 'Achievements' },
  { path: '/Projects', name: 'Projects' },
  { path: '/Projects/:repo', name: 'Project Detail' },
  { path: '/Blogs', name: 'Blogs' },
  { path: '/Chatbot', name: 'Chatbot' },
  { path: '/Dashboard', name: 'Dashboard' },
];

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: "Samuel Vincent Alac's Portfolio",
          description: "Aspiring Software Engineer's portfolio showcasing web projects, apps, and experiments.",
        },
      },
    }),
    viteSitemap({
      hostname: 'https://samuel-portfolio-three-gamma.vercel.app',
      exclude: ['/private'],
      generateRobotsTxt: true,
      dynamicRoutes: routes.map(route => route.path),
      changefreq: { '/': 'weekly' },
      priority: { '/': 1.0 }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
