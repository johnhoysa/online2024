import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { ViteFaviconsPlugin } from 'vite-plugin-favicon2';
import ViteRestart from 'vite-plugin-restart';
import copy from 'rollup-plugin-copy';
import { fileURLToPath } from "node:url";

const filesNeedToExclude = ["./src/input.css"];

const filesPathToExclude = filesNeedToExclude.map((src) => {
    return fileURLToPath(new URL(src, import.meta.url));
  });

export default ({ command }) => ({
    base: command === 'serve' ? '' : '/dist/',
    publicDir: 'src/',
    build: {
        outDir: 'dist/',
        emptyOutDir: true,
        sourcemap: true,
        manifest: 'manifest.json',
        minify: 'esbuild',
        rollupOptions: {
            input: {
                index: './src/index.js',
            },
            output: {
                dir: 'dist/',
            },
        },
    },
    server: {
        fs: {
          strict: false
        },
        host: '0.0.0.0',
        origin: 'http://localhost:3000',
        port: 3000,
        strictPort: true
    },
    plugins: [
        ViteRestart({
            reload: [
                'templates/*'
            ]
        }),
        copy({
            targets: [
                { 
                    src: 'src/**/*', 
                    dest: 'dist'
                }
            ]
        }),
    ]
});