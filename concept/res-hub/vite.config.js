import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages will serve this app at:
  // https://saudi-adhd-society.github.io/res.adhd.org.sa-concept
  // so we set the base path to the repository name.
  base: '/res.adhd.org.sa-concept/',
})
