// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		starlight({
			title: 'Ciberseguridad y Hacking Ético',
			social: {
				github: 'https://github.com/jackmmd',
				tiktok: 'https://www.tiktok.com/@jackmmd',
				instagram: 'https://www.instagram.com/jackmmdx',
				"x.com": 'https://x.com/jackmmdx'
			},
			sidebar: [
				{
					label: 'Docker',
					autogenerate: { directory: 'docker' },
				},
				{
					label: 'Linux',
					autogenerate: { directory: 'linux' },
				},
				{
					label: 'Apache',
					autogenerate: { directory: 'apache' },
				},
				{
					label: 'Overthewire',
					autogenerate: { directory: 'overthewire' },
				},
			],
		}),
	],
	site: 'https://jackmmd.github.io',
	base:''
});
