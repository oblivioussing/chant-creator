import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          '@import "@/style/variable.scss";@import "@/style/mixin.scss";'
      }
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 3000
  }
})
