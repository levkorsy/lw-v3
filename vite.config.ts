import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [vue()],
  base: '/lw-v3',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
