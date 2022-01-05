import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import { resolve } from 'path'

const pathResolve = (dir) => {
  return resolve(__dirname, ".", dir)
}

const alias = {
  '@': pathResolve("src")
}

// https://vitejs.dev/config/
export default ({ command }) => {
  const prodMock = true;
  return {
    base: './',
    resolve: {
      alias
    },
    server: {
      port: 3002,
      host: '0.0.0.0',
      open: true,
      proxy: { // 代理配置
        '/dev-api': {
          target: 'http://192.168.88.51:8090/',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/dev-api/, ''),
          ws: false
        },
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {

          }
        }
      }
    },
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && prodMock,
        watchFiles: true,
        injectCode: `
          import { setupProdMockServer } from '../mockProdServer';
          setupProdMockServer();
        `,
        logger: true,
      }),
    ]
  };
}
