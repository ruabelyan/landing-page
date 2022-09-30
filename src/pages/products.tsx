import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { pxToRem, getHtml } from "shared/helpers";
import { ArrowToTop } from "components";


import { CardAdvantageList, Banner, BannerProps, Footer, PageWrapper } from "components";


import {
	AnimateSymbol2Icon,
	AnimateSymbol3Icon,
	AnimateSymbol5Icon,
	IgamingPlatform,
	IgamingAggregator,
} from "icons";
import pageBackground from "../img/products-header.png";

const Products: NextPage = () => {
	const { locale } = useRouter();
	const bannerProps: BannerProps = {
		color: "aqua",
		title: getHtml("products.title"),
		description: getHtml("products.description"),
		buttonTitle: getHtml("products.buttonLabel"),
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

				<meta name="apple-mobile-web-app-title" content="Atom Construct. B2B aggregator" />
				<meta name="application-name" content="Atom Construct. B2B aggregator" />
				<meta name="msapplication-tooltip" content="Atom Construct. B2B aggregator" />
				<link rel="preload" href={pageBackground?.src} />

			</Head>
			<PageWrapper page="products" className={`${locale}`}>
				<ArrowToTop className="products" />
				<AnimateSymbol2Icon className="animate-symbol animate-symbol--2" />
				<AnimateSymbol3Icon className="animate-symbol animate-symbol--3" />
				<AnimateSymbol5Icon className="animate-symbol animate-symbol--5" />
				<Banner {...bannerProps} />
				<section className="products-page-content">
					<h2
						className="section-main-title section-main-title--home-page"
						id="products"
					>
						{getHtml("products.pageTitle")}
					</h2>
					<p className="section-main-description section-main-description--home-page">
						{getHtml("products.pageDescription")}
					</p>
					<div className="triple-chart-cell triple-chart-cell--products">
						<div className="triple-chart-cell__mobile-bg"></div>
						<div className="triple-chart-cell__fix triple-chart-cell__fix--small">
							<div className="triple-chart__row">
								<div className="triple-chartcol triple-chart__col--1">
									<div className="sector sector--1">
										{/* <Link href={`/products-igaming-platform/#products-igaming-platform`}> */}
										<a className="circle-content-cell circle-content-cell--blue circle-content-cell--link">
											<IgamingPlatform width={pxToRem(50)} />
										</a>
										{/* </Link> */}
										<h3 className="sector__title">
											{getHtml("products.platform.title")}
										</h3>
										<p className="sector__description">
											{getHtml("products.platform.description")}
										</p>
									</div>
								</div>
								{/* <div className="triple-chart__col triple-chart__col--2"></div> */}
								<div className="triple-chart__col triple-chart__col--3">
									<div className="sector sector--3">
										{/* <Link
											href={`/products-igaming-aggregator/#products-igaming-aggregator`}
										> */}
										<a className="circle-content-cell circle-content-cell--blue circle-content-cell--link">
											<IgamingAggregator width={pxToRem(50)} />
										</a>
										{/* </Link> */}
										<h3 className="sector__title">
											{getHtml("products.aggregator.title")}
										</h3>
										<p className="sector__description">
											{getHtml("products.aggregator.description")}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<CardAdvantageList
						dataName="productsIgamingPlatformList"
						categoryName="products"
						pageNameForAnchorsLinks="products-igaming-platform" />

				</section>
				<Footer color={bannerProps.color} />
			</PageWrapper>
		</>
	);
};

export default Products;
