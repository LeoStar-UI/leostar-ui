import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import VueJSX from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'es',
    minify: false,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        dir: 'dist',
      }
    },
    lib: {
      entry: './src/index.ts',
      name: 'leostar-ui',
      formats: ['es', 'umd', 'cjs'],
    },
  },
  plugins: [
    Vue(),
    VueJSX(),
    UnoCSS(),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      dts: 'auto-imports.d.ts',
    })
  ],
})
