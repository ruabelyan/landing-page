import React, { ReactNode } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useIntl } from "react-intl";
import { pxToRem, getHtml, getList } from "shared/helpers";
import { useRouter } from "next/router";

import {
	AnimateSymbol1Icon,
	AnimateSymbol2Icon,
	AnimateSymbol3Icon,
	AnimateSymbol5Icon,
	GoBack,
} from "icons";

import {
	Banner,
	BannerProps,
	Footer,
	PageWrapper,
	CardAdvantageList,
	AnchorsList
} from "components";

import { solutionsWhiteLabelIcons } from "data/iconsData";

import { ArrowToTop } from "components";
import pageBackground from "../img/solutions-header.png";

const SolutionsWhiteLabel: NextPage = () => {
	const { locale } = useRouter();
	const intl = useIntl();

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

				<meta name="apple-mobile-web-app-title" content="Atom Construct. B2B aggregator"/>
				<meta name="application-name" content="Atom Construct. B2B aggregator" />
				<meta name="msapplication-tooltip" content="Atom Construct. B2B aggregator"/>
				<link rel="preload" href={pageBackground?.src} />
			</Head>
			<PageWrapper page="solution" className={`${locale}`}>
				<ArrowToTop className="solutions" />
				<AnimateSymbol2Icon className="animate-symbol animate-symbol--2" />
				<AnimateSymbol3Icon className="animate-symbol animate-symbol--3" />
				<AnimateSymbol5Icon className="animate-symbol animate-symbol--5" />
				<AnimateSymbol1Icon className="animate-symbol animate-symbol--6" />
				<Head>
					<title>Atom Solutions</title>
				</Head>
				<Banner {...bannerProps} />
				<div className="section-block">
					<Link href={"/solutions/"}>
						<a className="go-back-link">
							<GoBack width={pxToRem(32)} />
						</a>
					</Link>
					<h2
						className="section-main-title section-main-title--products-igaming-platform"
						id="solutions-white-label"
					>
						{getHtml("solutionsWhiteLabel.pageTitle")}
					</h2>
					<p className="section-main-description section-main-description--products-igaming-platform">
						{getHtml("solutionsWhiteLabel.pageDescription")}
					</p>
				</div>
				<AnchorsList color="green" anchorsList={getList('solutionsWhiteLabelList')} iconsArr={solutionsWhiteLabelIcons} pageNameForAnchorsLinks="solutions-white-label"/>
				<CardAdvantageList dataName="solutionsWhiteLabelList" categoryName="solutions" pageNameForAnchorsLinks="solutions-white-label"/>

				<Footer color={bannerProps.color} />
			</PageWrapper>
		</>
	);
};

export default SolutionsWhiteLabel;
