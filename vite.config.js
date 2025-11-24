import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
        server: {
            port: 3000,
            host: '0.0.0.0',
        },
        plugins: [react()],
        define: {
            'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
            'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, '.'),
            }
        },
        build: {
            // Optimize for low network speeds
            rollupOptions: {
                output: {
                    manualChunks: {
                        // Separate vendor chunks for better caching
                        'react-vendor': ['react', 'react-dom'],
                        'animation-vendor': ['framer-motion'],
                        'icons-vendor': ['lucide-react'],
                    },
                },
            },
            // Enable compression
            minify: 'terser',
            terserOptions: {
                compress: {
                    drop_console: true, // Remove console logs in production
                    drop_debugger: true,
                },
            },
            // Chunk size warnings
            chunkSizeWarningLimit: 1000,
        },
        // Optimize dependencies
        optimizeDeps: {
            include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
        },
    };
});
//# sourceMappingURL=vite.config.js.map