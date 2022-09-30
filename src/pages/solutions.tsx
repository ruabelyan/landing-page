import {
	ArrowToTop,
	Banner,
	BannerProps,
	Footer,
	PageWrapper,
} from "components";
import Link from "next/link";
import { useRouter } from "next/router";
import { getHtml, pxToRem } from "shared/helpers";

import {
	AnimateSymbol1Icon,
	AnimateSymbol2Icon,
	AnimateSymbol3Icon,
	AnimateSymbol5Icon,
	Turnkey,
	WhiteLabel,
} from "icons";

import type { NextPage } from "next";
import Head from "next/head";

import pageBackground from "../img/products-header.png";

const Solutions: NextPage = () => {
	const { locale } = useRouter();
	const bannerProps: BannerProps = {
		color: "green",
		title: getHtml("solutions.title"),
		description: getHtml("solutions.description"),
		buttonTitle: getHtml("solutions.buttonLabel"),
		buttonLink: "/contact-us#get-in-touch",
	};

	return (
		<>
			<Head>
				<title>Atom Construct. B2B aggregator</title>
				<meta name="description" content="Atom Construct. B2B aggregator" />
				<meta name="keywords" content="Atom Construct. B2B aggregator" />

				<meta property="og:locale" content="en_EN" />
				<meta property="og:title" content="Atom Construct. B2B aggregator" />
				<meta property="og:description" content="Atom Construct. B2B aggregator" />

				<meta name="twitter:title" content="Atom Construct. B2B aggregator" />
				<meta name="twitter:description" content="Atom Construct. B2B aggregator" />

				<meta
					name="apple-mobile-web-app-title"
					content="Atom Construct. B2B aggregator"
				/>
				<meta name="application-name" content="Atom Construct. B2B aggregator" />
				<meta
					name="msapplication-tooltip"
					content="Atom Construct. B2B aggregator"
				/>

				<link rel="preload" href={pageBackground?.src} />
			</Head>

			<PageWrapper page="solution" className={`solution--${locale} ${locale}`}>
				<ArrowToTop className="solutions" />
				<AnimateSymbol2Icon className="animate-symbol animate-symbol--2" />
				<AnimateSymbol3Icon className="animate-symbol animate-symbol--3" />
				<AnimateSymbol5Icon className="animate-symbol animate-symbol--5" />
				<AnimateSymbol1Icon className="animate-symbol animate-symbol--6" />
				<Head>
					<title>Atom Solutions</title>
				</Head>
				<Banner {...bannerProps} />
				<section className="solutions-page-content">
					<h2
						className="section-main-title section-main-title--home-page"
						id="solutions"
					>
						{getHtml("solutions.title")}
					</h2>
					<p className="section-main-description section-main-description--home-page">
						{getHtml("solutions.description")}
					</p>
					<div className="triple-chart-cell triple-chart-cell--solutions">
						<div className="triple-chart-cell__mobile-bg"></div>
						<div className="triple-chart-cell__fix triple-chart-cell__fix--small">
							<div className="triple-chart__row">
								<div className="triple-chartcol triple-chart__col--1">
									<div className="sector sector--1">
										<Link href={`/solutions-white-label/#solutions-white-label`}>
											<a className="circle-content-cell circle-content-cell--green circle-content-cell--link">
												<WhiteLabel width={pxToRem(46)} />
											</a>
										</Link>
										<h3 className="sector__title">
											{getHtml("solutions.cardsList[0].title")}
										</h3>
										<p className="sector__description">
											{getHtml("solutions.cardsList[0].description")}
										</p>
									</div>
								</div>
								<div className="triple-chart__col triple-chart__col--2"></div>
								<div className="triple-chart__col triple-chart__col--3">
									<div className="sector sector--3">
										<Link href={`/solutions-turnkey/#solutions-turnkey`}>
											<a className="circle-content-cell circle-content-cell--green circle-content-cell--link">
												<Turnkey width={pxToRem(46)} />
											</a>
										</Link>
										<h3 className="sector__title">
											{getHtml("solutions.cardsList[1].title")}
										</h3>
										<p className="sector__description">
											{getHtml("solutions.cardsList[1].description")}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Footer color={bannerProps.color} />
			</PageWrapper>
		</>
	);
};

export default Solutions;
