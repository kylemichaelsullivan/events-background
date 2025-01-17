/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
	plugins: ['prettier-plugin-tailwindcss'],
	singleQuote: true,
	jsxSingleQuote: true,
	useTabs: true,
	tabWidth: 2,
	semi: true,
};

export default config;
