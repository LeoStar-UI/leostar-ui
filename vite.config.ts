import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import VueJSX from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
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
      name: 'index',
      fileName: 'index',
      formats: ["es", "umd", "cjs"],
    },
  },
  plugins: [
    Vue(),
    VueJSX(),
    dts(),
    UnoCSS(),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      dts: 'auto-imports.d.ts',
    })
  ],
})
