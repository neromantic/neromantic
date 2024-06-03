import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import { templateCompilerOptions } from '@tresjs/core'
import {resolve} from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            ...templateCompilerOptions
        }),
    ],
    resolve: {
        alias: [
            {find: '@', replacement: resolve(__dirname, 'src')}
        ]
    }
})
