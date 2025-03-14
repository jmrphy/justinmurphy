// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import robotsTxt from 'astro-robots-txt';
import webmanifest from 'astro-webmanifest';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	site: "https://sunny-arithmetic-1e866e.netlify.app",
	integrations: [
		mdx(),
		sitemap(),
		tailwind(),
		compress({
			CSS: true,
			HTML: false,
			JavaScript: true,
			Image: false,
			SVG: false,
		}),
		robotsTxt({
			sitemapBaseFileName: 'sitemap-index',
			policy: [
				{
					userAgent: 'Googlebot',
					allow: '/',
					crawlDelay: 2,
				},
			],
		}),
		webmanifest({
			name: 'Justin Murphy',
			icon: './public/favicon.svg',
			lang: 'en-US',
			short_name: 'awesome',
			description: "This is the description about your awesome blog",
			theme_color: '#ef4444',
			background_color: '#ef4444',
			display: 'standalone',
		}),
		icon(),
	],
	vite: {
		ssr: {
			external: ["svgo"]
		}
	}
});
