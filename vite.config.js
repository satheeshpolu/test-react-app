import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    css: true,                       // lets Vitest process CSS modules
    globals: false,                  // keep explicit imports from 'vitest'
    coverage: {
      reporter: ['text', 'lcov'],
      include: ['src/**/*.{ts,tsx,js,jsx}'],
      exclude: ['src/main.*', 'src/vite-env.d.ts']
    }
  }
})
