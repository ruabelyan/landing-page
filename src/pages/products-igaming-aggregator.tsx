/* eslint-disable react/jsx-key */
import React, { ReactNode } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import Head from "next/head";
import { pxToRem, byKey, getList, getHtml } from "shared/helpers";
import { useRouter } from "next/router";
import { ArrowToTop } from "components";
import {
	Banner,
	BannerProps,
	Footer,
	PageWrapper,
	CardAdvantageList,
	AnchorsList
} from "components";

import {
	GoBack,
	AnimateSymbol2Icon,
	AnimateSymbol3Icon,
	AnimateSymbol5Icon,
} from "icons";

import { productsIgamingAggregatorIcons } from "data/iconsData"

import pageBackground from "../img/products-header.png";

const ProductsIgamingAggregator: NextPage = () => {
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

				<meta name="apple-mobile-web-app-title" content="Atom Construct. B2B aggregator"/>
				<meta name="application-name" content="Atom Construct. B2B aggregator" />
				<meta name="msapplication-tooltip" content="Atom Construct. B2B aggregator"/>
				<link rel="preload" href={pageBackground?.src} />
			</Head>

			<PageWrapper page="products" className={`${locale}`}>
				<ArrowToTop className="products" />
				<AnimateSymbol2Icon className="animate-symbol animate-symbol--2" />
				<AnimateSymbol3Icon className="animate-symbol animate-symbol--3" />
				<AnimateSymbol5Icon className="animate-symbol animate-symbol--5" />

				<Banner {...bannerProps} />

				<div className="section-block">
					<Link href={"/products/"}>
						<a className="go-back-link">
							<GoBack width={pxToRem(32)} />
						</a>
					</Link>

					<h2
						className="section-main-title section-main-title--products-igaming-platform"
						id="products-igaming-aggregator"
					>
						{getHtml("productsIgamingAggregator.pageTitle")}
					</h2>
					<p className="section-main-description section-main-description--products-igaming-platform">
						{getHtml("productsIgamingAggregator.pageDescription")}
					</p>
				</div>

				<AnchorsList color="blue" anchorsList={getList('productsIgamingAggregatorList')} iconsArr={productsIgamingAggregatorIcons} pageNameForAnchorsLinks="products-igaming-aggregator" />
				<CardAdvantageList dataName="productsIgamingAggregatorList" categoryName="products" pageNameForAnchorsLinks="products-igaming-aggregator" />

				<Footer color={bannerProps.color} />
			</PageWrapper>
		</>
	);
};

export default ProductsIgamingAggregator;
