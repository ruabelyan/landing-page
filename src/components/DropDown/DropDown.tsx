/* eslint-disable @next/next/link-passhref */
import classNames from "classnames";

import {
	iconsComponentsArray,
	INavLink,
	ISocialLinks,
	Langs,
	socialLinks,
} from "data/data";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { LangSwitcher } from "components";
import { getList } from "shared/helpers";

export interface DropDownProps {
	toggle: boolean;
}

const DropDown: FC<DropDownProps> = ({ toggle }) => {
	const router = useRouter();

	return (
		<>
			{toggle === true ? (
				<div className="mobile-menu">
					<div className="mobile-menu__header">
						<button className="mobile-menu__header-close"></button>
					</div>
					<ul className="mobile-menu__ul">
						{getList("navLinks")?.map((item: INavLink) => {
							if (item.id === 0) {
								return (
									<li className="mobile-menu__li" key={item.id}>
										<Link href={`${item.hrefTo[0]}`}>
											<a
												className={classNames("mobile-menu__a", {
													"mobile-menu__a--current": !Boolean(router.pathname.split("/")[1]),
												})}
											>
												{item.label}
											</a>
										</Link>
									</li>
								);
							}

							if (item.id !== 2 && item.id != 4 && item.id !== 0) {
								return (
									<li className="mobile-menu__li" key={item.id}>
										<Link href={`${item.hrefTo[0]}`}>
											<a
												className={classNames("mobile-menu__a", {
													"mobile-menu__a--current":
														JSON.stringify(item.hrefTo).includes(
															router.pathname.split("/")[1]
														) && router.pathname.length > 1,
												})}
											>
												{item.label}
											</a>
										</Link>
									</li>
								);
							}
						})}
					</ul>

					{/*
					<span className="lang-switcher-mobile">
						<LangSwitcher data={Langs} />
					</span>
					*/}

					<div className="soc-links">
						{socialLinks?.map((item: ISocialLinks, index: number) => {
							return (
								<Link href={item.hrefTo} key={item.id}>
									<a className="soc-icon" target="_blank">
										{iconsComponentsArray[index](item.icon.width)}
									</a>
								</Link>
							);
						})}
					</div>
				</div>
			) : null}
		</>
	);
};

export default DropDown;
