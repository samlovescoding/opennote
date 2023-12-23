import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    resolve: {
        alias: {
            components: "/components",
            pages: "/pages",
            helpers: "/helpers",
        },
    },
    esbuild: {
        jsxInject: `import React from 'react'; import cx from 'classnames';`,
    },
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.jsx"],
            refresh: true,
        }),
    ],
});
