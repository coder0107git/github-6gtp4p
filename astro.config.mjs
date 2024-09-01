import { defineConfig } from 'astro/config';
//import clickDirective from './astro-click-directive/register.js';
//import translate from "./translation-inject.js";

// https://astro.build/config
export default defineConfig({
    integrations: [
        //clickDirective(),
        //translate(),
    ],
    vite: {
        plugins: [
            viteGlobalInjectPlugin(),
        ],
    },
    build: {
        format: "file",
    },
    devToolbar: {
        enabled: false,
    }
});

function viteGlobalInjectPlugin() {
    globalThis.tr = { hello: "world" };

    return {
        name: "no-op_inject_plugin",
    }
}
