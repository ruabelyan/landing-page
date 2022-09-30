import React, { ReactNode } from "react";

import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { pxToRem, getHtml, getList } from "shared/helpers";
import { ArrowToTop } from "components";
import {
	Banner,
	BannerProps,
	Footer,
	PageWrapper,
	CardAdvantageList,
	AnchorsList
} from "components";

import { solutionsTurnkeyIcons } from "data/iconsData"

import {
	AnimateSymbol1Icon,
	AnimateSymbol2Icon,
	AnimateSymbol3Icon,
	AnimateSymbol5Icon,
	AnimateSymbol7Icon,
	GoBack,
} from "icons";

import pageBackground from "../img/solutions-header.png";

export interface IIconsArr {
	id: number;
	component: ReactNode;
	iconSortId: number;
	width?: string;
}

const SolutionsTurnkey: NextPage = () => {
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
				<AnimateSymbol7Icon className="animate-symbol animate-symbol--7" />
				<Banner {...bannerProps} />

				<div className="section-block">
					<Link href={"/solutions/"}>
						<a className="go-back-link">
							<GoBack width={pxToRem(32)} />
						</a>
					</Link>
					<h2
						className="section-main-title section-main-title--products-igaming-platform"
						id="solutions-turnkey"
					>
						{getHtml("solutionsTurnkey.pageTitle")}
					</h2>
					<p className="section-main-description section-main-description--products-igaming-platform">
						{getHtml("solutionsTurnkey.pageDescription")}
					</p>
				</div>

				<AnchorsList color="green" anchorsList={getList('solutionsTurnkeyList')} iconsArr={solutionsTurnkeyIcons} pageNameForAnchorsLinks="solutions-turnkey" />
				<CardAdvantageList dataName="solutionsTurnkeyList" categoryName="solutions" pageNameForAnchorsLinks="solutions-turnkey" />
				<Footer color={bannerProps.color} />
			</PageWrapper>
		</>
	);
};

export default SolutionsTurnkey;
