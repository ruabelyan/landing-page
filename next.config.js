/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
	reactStrictMode: true,
	// basePath: isProd ? "/homepage" : undefined,
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack", "url-loader"],
		});

		return config;
	},
	images: {
		deviceSizes: [640, 828, 1920],
	},
	i18n: {
		locales: ["en", "pt", "es", "ru"],
		defaultLocale: "en",
		localeDetection: false,
	},
	env: {
		basePath: isProd ? "" : "",
	},
};

module.exports = nextConfig;
