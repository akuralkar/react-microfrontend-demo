import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { federation } from '@module-federation/vite';

const isProduction = process.env.NODE_ENV === 'production';
// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    cors: true,
    strictPort: false,
    middlewareMode: false,
  },
  plugins: [
    federation({
      name: 'core-ui-remote-app',
      filename: 'remoteEntry.js',
      exposes: {
        './Header': './src/components/Header/Header.tsx',
        './Footer': './src/components/Footer/Footer.tsx',
        './AppRoutes': './src/routes/index.tsx',
        './Login': './src/components/Login/Login.tsx',
      },
      shared: {
        react: { singleton: true, strictVersion:false },
        'react-dom': { singleton: true, strictVersion:false },
        'react-router-dom': { singleton: true, strictVersion:false },
        '@azure/msal-react': { singleton: true, strictVersion:false },
        '@azure/msal-browser': { singleton: true, strictVersion:false },
      },
    }),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    rollupOptions: {
      output: {
        format: 'es',
      },
    },
  },
  base: isProduction ? '/react-microfrontend-demo/remote/' : '/',
})
