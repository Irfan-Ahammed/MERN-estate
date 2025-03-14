import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import vercel from 'vite-plugin-vercel';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }; 

  return defineConfig({
    server: {
      proxy: {
        '/api': process.env.VITE_API_URL
      },
    },

    plugins: [vercel(), react()],
  })
};
