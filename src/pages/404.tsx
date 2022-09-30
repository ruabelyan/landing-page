import { Button, PageWrapper } from "components";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { getHtml } from 'shared/helpers';

const E404: NextPage = () => {
	const { locale } = useRouter();
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
			</Head>
			<PageWrapper page="404" className={`${locale}`}>
				<div className="e404-wide">
					<div className="e404-wide__404-bg">
						<div className="e404-info-position">
							<div className="e404-info">
								<h1 className="e404-info__title">{getHtml("e404.title")}</h1>
								<p className="e404-info__descr">{getHtml("e404.description")}</p>
								<Button linkRef="/" color={"yellow"} variant="primary">
									{getHtml("e404.backButton")}
								</Button>
							</div>
						</div>
					</div>
				</div>
			</PageWrapper>
		</>
	);
};

export default E404;
