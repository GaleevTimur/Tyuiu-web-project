import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './src/index.html',
        coursePage: './src/coursePage.html',
      },
    },
  },
});