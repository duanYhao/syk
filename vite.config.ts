import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	plugins: [
		vue(),
		viteCompression()
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname,'./src'),
			'assets': path.resolve(__dirname,'./src/assets'),
			'components': path.resolve(__dirname,'./src/components')
		}
	},
	server: {
		host: '127.0.0.1', //0.0.0.0 将监听所有地址，包括局域网和公网地址
		port: 80, //如果端口已经被使用，Vite 会自动尝试下一个可用的端口
		https: false,
		proxy: {
			// 字符串简写写法
			'/api': {
				target: 'http://192.168.60.192:8060',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	},
	build: {
		outDir: 'dist', //相对于 项目根目录
		assetsDir: 'static', //相对于 build.outDir
		brotliSize: false, // 禁用 brotli 压缩大小报告
	}
})
