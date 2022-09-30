import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import "styles/main.scss";
import en from "../translations/en.json";
// import es from "../translations/es.json";
// import pt from "../translations/pt.json";
// import ru from "../translations/ru.json";

const translations: Record<string, {}> = {
	en,
	// es,
	// pt,
	// ru,
};

function MyApp({ Component, pageProps }: AppProps) {
	const { locale, defaultLocale } = useRouter();

	return (
		<>
			<Head>
				<base href="/" />
				<meta charSet="utf-8" />
				<title>Atom Construct</title>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width,height=device-height,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=0,shrink-to-fit=no"
				/>
				<meta name="description" content="Atom Construct. B2B aggregator" />
				<meta name="keywords" content="Atom Construct. B2B aggregator" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="" />
				<meta property="og:locale" content="en_EN" />
				<meta property="og:title" content="Atom Construct. B2B aggregator" />
				<meta property="og:description" content="Atom Construct. B2B aggregator" />
				<meta
					property="og:image"
					content={`${process.env.basePath}/assets/img/atom-construct.png`}
				/>
				<meta property="og:image:type" content="image/jpeg" />
				<meta property="og:image:width" content="2500" />
				<meta property="og:image:height" content="2500" />
				<meta property="og:image:alt" content="Atom Construct. B2B aggregator" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="" />
				<meta name="twitter:creator" content="" />
				<meta name="twitter:title" content="Atom Construct. B2B aggregator" />
				<meta name="twitter:description" content="Atom Construct. B2B aggregator" />
				<meta
					name="twitter:image"
					content={`${process.env.basePath}/assets/img/atom-construct.png`}
				/>
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content="black-translucent"
				/>
				<meta
					name="apple-mobile-web-app-title"
					content="Atom Construct. B2B aggregator"
				/>
				<meta name="application-name" content="Atom Construct. B2B aggregator" />
				<meta
					name="msapplication-tooltip"
					content="Atom Construct. B2B aggregator"
				/>
				<meta name="msapplication-starturl" content="/" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta
					name="msapplication-TileImage"
					content={`${process.env.basePath}/assets/img/fav/ms-icon-310x310.png`}
				/>
				<meta
					name="msapplication-square70x70logo"
					content={`${process.env.basePath}/assets/img/fav/mstile-70x70.png`}
				/>
				<meta
					name="msapplication-square150x150logo"
					content={`${process.env.basePath}/assets/img/fav/mstile-150x150.png`}
				/>
				<meta
					name="msapplication-wide310x150logo"
					content={`${process.env.basePath}/assets/img/fav/msapplicationWide310x150logo.png`}
				/>
				<meta
					name="msapplication-square310x310logo"
					content={`${process.env.basePath}/assets/img/fav/ms-icon-310x310.png`}
				/>
				<meta name="msapplication-config" content="./browserconfig.xml" />
				<meta name="theme-color" content="#ffffff" />
				<meta name="format-detection" content="address=yes" />
				<meta name="format-detection" content="email=yes" />
				<meta name="format-detection" content="telephone=yes" />
				<meta name="format-detection" content="date=yes" />
				<link
					rel="apple-touch-icon-precomposed"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon.png`}
				/>
				<link
					rel="apple-touch-icon-precomposed"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-40x40.png`}
					sizes="40x40"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-57x57.png`}
					sizes="57x57"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-58x58.png`}
					sizes="58x58"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-60x60.png`}
					sizes="60x60"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-72x72.png`}
					sizes="72x72"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-76x76.png`}
					sizes="76x76"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-80x80.png`}
					sizes="80x80"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-87x87.png`}
					sizes="87x87"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-114x114.png`}
					sizes="114x114"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-120x120.png`}
					sizes="120x120"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-144x144.png`}
					sizes="144x144"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-152x152.png`}
					sizes="152x152"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-167x167.png`}
					sizes="167x167"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-180x180.png`}
					sizes="180x180"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-1024x1024.png`}
					sizes="1024x1024"
				/>
				<link
					rel="apple-touch-icon"
					href={`${process.env.basePath}/assets/img/fav/apple-icon.png`}
				/>
				<link
					rel="apple-touch-icon"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-40x40.png`}
					sizes="40x40"
				/>
				<link
					rel="apple-touch-icon"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-57x57.png`}
					sizes="57x57"
				/>
				<link
					rel="apple-touch-icon"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-58x58.png`}
					sizes="58x58"
				/>
				<link
					rel="apple-touch-icon"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-60x60.png`}
					sizes="60x60"
				/>
				<link
					rel="apple-touch-icon"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-72x72.png`}
					sizes="72x72"
				/>
				<link
					rel="apple-touch-icon"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-76x76.png`}
					sizes="76x76"
				/>
				<link
					rel="apple-touch-icon"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-80x80.png`}
					sizes="80x80"
				/>
				<link
					rel="apple-touch-icon"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-87x87.png`}
					sizes="87x87"
				/>
				<link
					rel="apple-touch-icon"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-114x114.png`}
					sizes="114x114"
				/>
				<link
					rel="apple-touch-icon"
					href={`${process.env.basePath}/assets/img/fav/apple-icon-120x120.png`}
					sizes="120x120"
				/>
				<link
					rel="apple-touch-icon"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-114x114.png`}
					sizes="144x144"
				/>
				<link
					rel="apple-touch-icon"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-152x152.png`}
					sizes="152x152"
				/>
				<link
					rel="apple-touch-icon"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-167x167.png`}
					sizes="167x167"
				/>
				<link
					rel="apple-touch-icon"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-180x180.png`}
					sizes="180x180"
				/>
				<link
					rel="apple-touch-icon"
					href={`${process.env.basePath}/assets/img/fav/apple-touch-icon-1024x1024.png`}
					sizes="1024x1024"
				/>
				<link
					rel="icon"
					href={`${process.env.basePath}/assets/img/fav/favicon-without-bg.png`}
				/>
				<link
					rel="icon"
					href={`${process.env.basePath}/assets/img/fav/favicon-16x16.png`}
					sizes="16x16"
				/>
				<link
					rel="icon"
					href={`${process.env.basePath}/assets/img/fav/favicon-32x32.png`}
					sizes="32x32"
				/>
				<link
					rel="icon"
					href={`${process.env.basePath}/assets/img/fav/favicon-96x96.png`}
					sizes="96x96"
				/>
				<link
					rel="icon"
					href={`${process.env.basePath}/assets/img/fav/favicon-128x128.png`}
					sizes="128x128"
				/>
				<link
					rel="icon"
					href={`${process.env.basePath}/assets/img/fav/favicon-192x192.png`}
					sizes="192x192"
				/>
				<link
					rel="icon"
					href={`${process.env.basePath}/assets/img/fav/favicon-194x194.png`}
					sizes="194x194"
				/>
				<link
					rel="icon"
					href={`${process.env.basePath}/assets/img/fav/favicon-196x196.png`}
					sizes="196x196"
				/>
				<link crossOrigin="use-credentials" rel="manifest" href="./manifest.json" />
				<link
					rel="mask-icon"
					href={`${process.env.basePath}/assets/img/fav/favicon-without-bg.svg`}
					color="#ffffff"
				/>
				<link
					href={`${process.env.basePath}/assets/img/fav/favicon.ico`}
					rel="alternate icon"
				/>
				<link
					href={`${process.env.basePath}/assets/img/fav/favicon-with-bg.svg`}
					rel="icon"
					type="image/svg+xml"
				/>
			</Head>
			{/* @ts-ignore */}
			<IntlProvider
				locale={locale || defaultLocale || "en"}
				messages={translations[locale || defaultLocale || "en"]}
			>
				<Component {...pageProps} />
			</IntlProvider>
		</>
	);
}

export default MyApp;
