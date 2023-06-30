import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";
/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  vitePlugin: {
    inspector: true,
  },
  kit: {
    adapter: adapter(),

    paths: {
      base:
        process.env.NODE_ENV === "production" ? "/sveltekit-github-pages" : "",
    },
  },
};
export default config;
