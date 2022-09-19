// import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      dts: true,
    }),
    Unocss(),
    // legacy({
    //   targets: ['> 1%, last 1 version, ie >= 11'],
    //   additionalLegacyPolyfills: ['regenerator-runtime/runtime'], // 面向IE11时需要此插件
    // }),
  ],
  build: {
    rollupOptions: {
      input: {
        app: './login.html',
      },
    },
    outDir: './docs/public/',
    // assetsDir: 'login-assets',
    emptyOutDir: false,
  },
  server: {
    open: '/login.html',
  },
})