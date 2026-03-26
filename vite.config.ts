import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  
  return {
    // SỬA TẠI ĐÂY: Đổi từ '/hoa12bai15/' thành '/' để Vercel nhận diện đúng đường dẫn gốc
    base: '/', 
    
    server: {
      port: 3000,
      host: '0.0.0.0',
      // HMR cấu hình tự động dựa trên môi trường
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    
    plugins: [react(), tailwindcss()],
    
    // Lưu ý: Trên Vercel, bạn nên cài đặt GEMINI_API_KEY trong phần Environment Variables của dự án
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
