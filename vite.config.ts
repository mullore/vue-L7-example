import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteEsLint from 'vite-plugin-eslint';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteEsLint()],
});
