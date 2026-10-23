import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Если будешь деплоить на GitHub Pages в подпапку (например, username.github.io/life-orbit/), 
  // раскомментируй строчку ниже и укажи имя своего репозитория:
  // base: '/life-orbit/',
});
