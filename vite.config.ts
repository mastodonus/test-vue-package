import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
      lib: {
        entry: path.resolve(__dirname, 'src/main.ts'),
        name: 'test-vue-library',
        fileName: 'test-vue-library',
      },
  },
  plugins: [
    vue(),
    dts()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
