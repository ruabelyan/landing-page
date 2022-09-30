/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import { Button, DropDown, Navigation, LangSwitcher } from "components";
import { LazyImage } from "components/LazyImage";
import { pxToRem } from "shared/helpers";
import {
	AtomLogoIcon,
	HamburgerMenu,
	Close,
} from "icons";
import Head from "next/head";
import Link from "next/link";
import React, { FC, ReactNode, useState, useEffect } from "react";
import { Colors } from "types";
import { useIntl } from "react-intl";
import { Langs } from "data/data";

export interface BannerProps {
	showButton?: boolean;
	buttonTitle: ReactNode;
	buttonLink?: string;
	title: ReactNode;
	description: ReactNode;
	color: Colors;
}

const Banner: FC<BannerProps> = ({
	title,
	description,
	showButton = true,
	buttonTitle,
	color,
	buttonLink,
}) => {
	const [toggle, setToggle] = useState<boolean>(false);
	const [sticky, setSticky] = useState("relative");
	const intl = useIntl();

	useEffect(() => {
		const stickNavbar = () => {
			let windowHeight = window.scrollY;
			windowHeight > 1 ? setSticky("fixed-block") : setSticky("relative");
		};

		window.addEventListener("scroll", stickNavbar);

		return () => {
			window.removeEventListener("scroll", stickNavbar);
		};
	}, []);

	return (
		<>
			<Head>
				<link
					rel="preload"
					href={`${process.env.basePath}/assets/img/triangle.png`}
				/>
				{/* prettier-ignore */}
				<link rel="preload" href={
					color === "blue" ? "https://ucarecdn.com/8ad2d4c6-a43c-4b31-b2e8-1f1d64dd2293/bgblue.png" :
						color === "green" ? "https://ucarecdn.com/72501cf2-e72c-4901-915c-45ad002beace/bggreen.png" :
							color === "yellow" ? "https://ucarecdn.com/7d5ea060-962a-4cff-8880-67b0e8f9c3f2/bgyellow.png" :
								color === "aqua" ? `${process.env.basePath}/assets/img/clouds/bg-aqua.png` : "https://ucarecdn.com/8ad2d4c6-a43c-4b31-b2e8-1f1d64dd2293/bgblue.png"

				} />
			</Head>

			{/* prettier-ignore */}
			<img src={
				color === "blue" ? `${process.env.basePath}/assets/img/triangle-blue.png` :
					color === "green" ? `${process.env.basePath}/assets/img/triangle-green.png` :
						color === "yellow" ? `${process.env.basePath}/assets/img/triangle-yellow.png` :
							color === "aqua" ? `${process.env.basePath}/assets/img/triangle-aqua.png` : ""} width="100%" alt="" title="" className="triangle" />
			{/* prettier-ignore */}
			<LazyImage
				src={
					color === "blue" ? "https://ucarecdn.com/8ad2d4c6-a43c-4b31-b2e8-1f1d64dd2293/bgblue.png" :
						color === "green" ? "https://ucarecdn.com/72501cf2-e72c-4901-915c-45ad002beace/bggreen.png" :
							color === "yellow" ? "https://ucarecdn.com/7d5ea060-962a-4cff-8880-67b0e8f9c3f2/bgyellow.png" :
								color === "aqua" ? `${process.env.basePath}/assets/img/clouds/bg-aqua.png` : "https://ucarecdn.com/8ad2d4c6-a43c-4b31-b2e8-1f1d64dd2293/bgblue.png"
				}
				placeholder={
					<>
						<img
							alt="" title="" className="smock smock--2 smock--placeholder"
							src={
								color === "blue" ? "https://ucarecdn.com/8ad2d4c6-a43c-4b31-b2e8-1f1d64dd2293/-/preview/400x400/" :
									color === "green" ? "https://ucarecdn.com/72501cf2-e72c-4901-915c-45ad002beace/-/preview/400x400/" :
										color === "yellow" ? "https://ucarecdn.com/7d5ea060-962a-4cff-8880-67b0e8f9c3f2/-/preview/400x400/" :
											color === "aqua" ? `${process.env.basePath}/assets/img/clouds/bg-aqua-placeholder.png` : "https://ucarecdn.com/8ad2d4c6-a43c-4b31-b2e8-1f1d64dd2293/-/preview/400x400/"
							}
						/>
					</>
				}
				imageRenderer={
					<>
						{color === "blue" ? (
							<>
								<img src={`https://ucarecdn.com/8ad2d4c6-a43c-4b31-b2e8-1f1d64dd2293/bgblue.png`} alt="" title="" className="smock smock--1" />
								<img src={`https://ucarecdn.com/8ad2d4c6-a43c-4b31-b2e8-1f1d64dd2293/bgblue.png`} alt="" title="" className="smock smock--2" />
								<img src={`https://ucarecdn.com/8ad2d4c6-a43c-4b31-b2e8-1f1d64dd2293/bgblue.png`} alt="" title="" className="smock smock--3" />
							</>
						) : color === "green" ? (
							<>
								<img src={`https://ucarecdn.com/72501cf2-e72c-4901-915c-45ad002beace/bggreen.png`} alt="" title="" className="smock smock--1" />
								<img src={`https://ucarecdn.com/72501cf2-e72c-4901-915c-45ad002beace/bggreen.png`} alt="" title="" className="smock smock--2" />
								<img src={`https://ucarecdn.com/72501cf2-e72c-4901-915c-45ad002beace/bggreen.png`} alt="" title="" className="smock smock--3" />
							</>
						) : color === "yellow" ? (
							<>
								<img src={`https://ucarecdn.com/7d5ea060-962a-4cff-8880-67b0e8f9c3f2/bgyellow.png`} alt="" title="" className="smock smock--1" />
								<img src={`https://ucarecdn.com/7d5ea060-962a-4cff-8880-67b0e8f9c3f2/bgyellow.png`} alt="" title="" className="smock smock--2" />
								<img src={`https://ucarecdn.com/7d5ea060-962a-4cff-8880-67b0e8f9c3f2/bgyellow.png`} alt="" title="" className="smock smock--3" />
							</>
						) : color === "aqua" ? (
							<>
								<img src={`${process.env.basePath}/assets/img/clouds/bg-aqua.png`} alt="" title="" className="smock smock--1" />
								<img src={`${process.env.basePath}/assets/img/clouds/bg-aqua.png`} alt="" title="" className="smock smock--2" />
								<img src={`${process.env.basePath}/assets/img/clouds/bg-aqua.png`} alt="" title="" className="smock smock--3" />
							</>
						) : null}
					</>
				}
			/>

{toggle ? (
					<span className="close-drop-down-menu" onClick={() => setToggle(!toggle)}>
						<Close width={pxToRem(14.37)}/>
					</span>
				) : null}
					<DropDown toggle={toggle} />
			<header className={classNames("main-header", `main-header--${color}`)}>


				<div
					className={`fix-layout fix-layout--wide ${
						sticky === "fixed-block" ? "empty-top-space" : ""
					}`}
				>
				{/*
					<span className="lang-switcher-desktop">
						<LangSwitcher data={Langs} />
					</span>
					*/}

					<div className={`fix-bar ${sticky}`}>
						<Link href={"/"}>
							<a className={classNames("logo", `logo--${color}`)}>
								<AtomLogoIcon />
							</a>
						</Link>

						<button
							type="button"
							onClick={() => setToggle(!toggle)}
							className="for-open-drop-down-mobile-menu"
						>
							{!toggle ? (
								<span className="white-txt">
									<HamburgerMenu width={pxToRem(26)}/>
								</span>
							) : null}
						</button>
					</div>

					<nav className={classNames("main-nav", `main-nav--${color}`)}>
						<Navigation />
					</nav>
					<div className="fix-layout__inner">
						<h1 className={classNames("main-title", `main-title--${color}`)}>
							{title}
						</h1>
						<p className="main-section-description">{description}</p>
						{showButton && (
							<Button linkRef={buttonLink as string} color={color} variant="primary">
								{buttonTitle}
							</Button>
						)}
					</div>
				</div>
			</header>
		</>
	);
};

export default Banner;
