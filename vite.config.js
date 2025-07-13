import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
})


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     ssr: 'src/entry-server.jsx',
//     outDir: 'dist',
//     rollupOptions: {
//       input: './index.html',
//     },
//   },
// });
