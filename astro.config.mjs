import { defineConfig } from 'astro/config';

export default defineConfig({
    output: 'static',
    site: 'https://swecha.org',
    build: {
        format: 'directory',
    },
});