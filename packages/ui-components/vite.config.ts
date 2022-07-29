/// <reference types="vitest" />
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'index',
      formats: ['es', 'umd'],
      fileName: format => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@emotion/styled', '@emotion/react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@emotion/styled': 'styled',
          '@emotion/react': 'ThemeProvider'
        }
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['setupTests.ts'],
    include: ['src/components/**/(*.)?{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
    coverage: {
      reporter: ['text', 'html'],
      exclude: ['node_modules/', 'setupTests.ts']
    }
  }
})
