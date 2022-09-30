import {
	AnimateSymbol1Icon,
	AnimateSymbol2Icon,
	AnimateSymbol3Icon,
	AnimateSymbol5Icon,
} from "icons";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import {
	ArrowToTop,
	Banner,
	BannerProps,
	Footer,
	PageWrapper,
} from "components";

import parse from "html-react-parser";
import { getHtml, getList } from "shared/helpers";
import pageBackground from "../img/about-header.png";

import { homeAboutItem } from "types";

export interface cardsList {
	id: number;
	title: string;
	description: string;
}

const Home: NextPage = () => {
	const { locale } = useRouter();
	const bannerProps: BannerProps = {
		color: "blue",
		title: getHtml("home.title"),
		description: getHtml("home.description"),
		buttonTitle: getHtml("home.buttonLabel"),
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
			<PageWrapper page="home" className={`${locale}`}>
				<ArrowToTop className="home" />
				<AnimateSymbol1Icon className="animate-symbol animate-symbol--1" />
				<AnimateSymbol2Icon className="animate-symbol animate-symbol--2" />
				<AnimateSymbol3Icon className="animate-symbol animate-symbol--3" />
				<AnimateSymbol5Icon className="animate-symbol animate-symbol--5" />
				<Banner {...bannerProps} />
				<section className="about-page-content">
					<h2 className="section-main-title section-main-title--home-page">
						{getHtml("home.mainTitle")}
					</h2>
					<p className="section-main-description section-main-description--home-page">
						{getHtml("home.mainDescription")}
					</p>
					<div className="triple-chart-cell">
						{/* <div className="triple-chart-cell__mobile-bg"></div> */}

						<div className="triple-chart-cell__fix triple-chart-cell__fix--small">
							<div className="triple-chart__row">
								{getList("home.about.list")?.map((item: homeAboutItem) => (
									<div
										className={`triple-chartcol triple-chart__col--${item.id + 1}`}
										key={item.id}
									>
										<div className={`sector sector--${item.id + 1}`}>
											<span className="circle-content-cell">
												<i className={`circle-content-cell__label`}>
													{parse(item.quantity)}
												</i>
											</span>
											<h3 className="sector__title">{parse(item.title)}</h3>
											<p className="sector__description">{parse(item.description)}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
				{/* 				<div className="section-block">
					<h2 className="section-main-title section-main-title--products-igaming-platform">
						{getHtml("home.cardTitle")}
					</h2>
				</div>
				<div className="products-card-list-cell">
					{
						getList("home.cardsList")?.map((item: cardsList) => (
							<CardAdvantage
								key={item.id}
								title={item.title}
								description={item.description}
								categoryName="about"
							/>
						))
					}
				</div> */}
				<Footer color={bannerProps.color} />
			</PageWrapper>
		</>
	);
};

export default Home;
