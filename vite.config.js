import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.tsx",
            refresh: true,
        }),
        react(),
    ],
    server: {
        hmr: {
            protocol: "ws",
            https: false,
            host: "192.168.56.57",
        },
        host: "192.168.56.57",
        https: false,
        watch: {
            usePolling: true,
        },
    },
});
