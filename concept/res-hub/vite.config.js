import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { copyFileSync } from 'fs'
import { join } from 'path'

// Plugin to copy index.html to 404.html for GitHub Pages SPA routing
const copy404Plugin = () => {
  return {
    name: 'copy-404',
    closeBundle() {
      const distDir = join(process.cwd(), 'dist')
      copyFileSync(join(distDir, 'index.html'), join(distDir, '404.html'))
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copy404Plugin()
  ],
  // GitHub Pages will serve this app at:
  // https://saudi-adhd-society.github.io/res.adhd.org.sa-concept
  // so we set the base path to the repository name.
  base: '/res.adhd.org.sa-concept/',
})
