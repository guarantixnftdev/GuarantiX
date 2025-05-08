import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills' // Імпорт плагіна

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    nodePolyfills({
      // Дозволяє імпорти типу 'node:crypto', 'node:buffer', etc.
      protocolImports: true,
      // Явно вказуємо, що потрібен поліфіл для глобального `process`
      globals: {
        process: true, // Дуже важливо для вашої помилки
        Buffer: true,  // Також часто потрібно
        // global: true, // Якщо якась бібліотека використовує 'global'
      },
      // Можна також включити поліфіли для конкретних модулів, якщо потрібно
      // модулі: {
      //   fs: true, // Приклад, якщо потрібен поліфіл для 'fs'
      // }
    })
  ],
  resolve: {
    alias: {
      // З плагіном nodePolyfills більшість цих псевдонімів можуть бути непотрібними
      // або навіть конфліктувати. Спробуйте спочатку закоментувати їх.
      // buffer: 'buffer',
      // process: 'process/browser.js',
      stream: 'stream-browserify', // Залиште, якщо плагін не покриває повністю
      crypto: 'crypto-browserify', // Залиште, якщо плагін не покриває повністю
      http: 'stream-http',
      https: 'https-browserify',
      os: 'os-browserify/browser',
      assert: 'assert',
    },
  },
  // define: { // Ймовірно, це вже не потрібно, оскільки плагін це обробляє
  //   global: 'globalThis',
  // },
  // optimizeDeps теж може бути менш потрібним для ручного налаштування,
  // оскільки плагін взаємодіє з процесом збірки Vite.
})