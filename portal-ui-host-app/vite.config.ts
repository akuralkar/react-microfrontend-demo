import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { federation } from '@module-federation/vite';
// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    cors: true,
    strictPort: false,
  },
  plugins: [
    federation({
      name: 'portal-ui-host-app',
      remotes: {
        'remote-app': {
          type: 'module',
          name: 'remote-app',
          entry: 'http://localhost:3000/remoteEntry.js',
        }
      },
      shared: {
        react: { singleton: true, strictVersion: false },
        'react-dom': { singleton: true, strictVersion: false },
        'react-router-dom': { singleton: true, strictVersion: false },
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
})
