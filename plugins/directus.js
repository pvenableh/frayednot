import { Directus } from '@directus/sdk';
const directus = new Directus('https://admin.frayednot.net');

export default defineNuxtPlugin(() => {
	return {
		provide: { directus },
	};
});