import classNames from "classnames";
import { Button, DropDown, Navigation } from "components";
import { AtomLogoIcon, Close, HamburgerMenu } from "icons";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useState } from "react";
import { pxToRem } from "shared/helpers";
import { Colors } from "types";

export interface ApiDocProps {
	showButton?: boolean;
	buttonTitle: string;
	buttonLink?: string;
	title: ReactNode;
	description: ReactNode;
	color: Colors;
}

const ApiDoc: FC<ApiDocProps> = ({
	title,
	description,
	showButton = true,
	buttonTitle,
	color,
	buttonLink,
}) => {
	const router = useRouter();
	const [toggle, setToggle] = useState<boolean>(false);
	const [sticky, setSticky] = useState("relative");

	useEffect(() => {
		window.addEventListener("scroll", stickNavbar);

		return () => {
			window.removeEventListener("scroll", stickNavbar);
		};
	}, []);

	const stickNavbar = () => {
		if (window !== undefined) {
			let windowHeight = window.scrollY;
			windowHeight > 1 ? setSticky("fixed-block") : setSticky("relative");
		}
	};

	return (
		<>
			<Head>
				<link
					rel="preload"
					href={`${process.env.basePath}/assets/img/triangle.png`}
				/>
				{/* prettier-ignore */}
				<link rel="preload" href={
					color === "blue"    ? "https://ucarecdn.com/8ad2d4c6-a43c-4b31-b2e8-1f1d64dd2293/bgblue.png" :
     color === "green"   ? "https://ucarecdn.com/72501cf2-e72c-4901-915c-45ad002beace/bggreen.png" :
					color === "yellow"  ? "https://ucarecdn.com/7d5ea060-962a-4cff-8880-67b0e8f9c3f2/bgyellow.png" : "https://ucarecdn.com/8ad2d4c6-a43c-4b31-b2e8-1f1d64dd2293/bgblue.png"
				} />
			</Head>
			{/* prettier-ignore */}

			<header className={classNames("main-header", `main-header--${color}`)}>
				{toggle ? (
					<span className="close-drop-down-menu" onClick={() => setToggle(!toggle)}>
						<Close width={pxToRem(15.35)}/>
					</span>
				) : null}

				<div
					style={{ minHeight: "20rem" }}
					className={`fix-layout fix-layout--wide ${
						sticky === "fixed-block" ? "empty-top-space" : ""
					}`}
				>
					<div className={`fix-bar ${sticky}`}>
						<Link href={"/"}>
							<a className={classNames("logo", `logo--green`)}>
								<AtomLogoIcon />
							</a>
						</Link>

						<button
							type="button"
							onClick={() => setToggle(!toggle)}
							className="for-open-drop-down-mobile-menu"
						>
							<span className="white-txt">
								<HamburgerMenu width={pxToRem(26)}/>
							</span>

						</button>
					</div>

					<DropDown toggle={toggle} />
					<nav
						className={classNames("main-nav", `main-nav--${color}`, "main-nav--api-doc")}
					>
						<Navigation />
					</nav>

					<div className="fix-layout__inner">
						<h1
							className={classNames(
								"main-title",
								"main-title--api",
								`main-title--${color}`
							)}
						>
							{title}
						</h1>
						<p className="main-section-description--max-wide">
							{description}
						</p>

						{showButton && (
							<Button linkRef={buttonLink as string} color={color} variant="primary">
								{buttonTitle}
							</Button>
						)}
					</div>
				</div>

				{/* <Image
						src={mainBg}
						width={500}
						height={500}
						placeholder="blur"
						layout="responsive"
						priority
					/> */}

				{/* <Image
						src={mainBg}
						width={500}
						height={500}
						placeholder="blur"
						layout="responsive"
						blurDataURL="https://i0.wp.com/angularscript.com/wp-content/uploads/2018/06/Progressively-Loading-Images-With-Blur-Effect-min.png?ssl=1"
					/> */}
			</header>
		</>
	);
};

export default ApiDoc;
