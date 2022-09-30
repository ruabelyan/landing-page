import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { INavLink } from "data/data";
import { getList } from "shared/helpers";

const Navigation = () => {
	const router = useRouter();

	return (
		<>
			<ul className="__ul">
				{getList("navLinks")?.map((item: INavLink) => {
					if (item.id === 0) {
						return (
							<li className="__li" key={item.id}>
								<Link href={`${item.hrefTo[0]}`}>
									<a
										className={classNames(
											`nav-link`,
											`${Boolean(router.pathname.split("/")[1]) === false ? "active" : ""}`
										)}
									>
										{item.label}
									</a>
								</Link>
							</li>
						);
					}

					if (item.id !== 2 && item.id !== 4 && item.id !== 0) {
						return (
							<li className="__li" key={item.id}>
								<Link href={`${item.hrefTo[0]}`}>
									<a
										className={classNames(
											`nav-link`,
											`${
												JSON.stringify(item.hrefTo).includes(
													router.pathname.split("/")[1]
												) && router.pathname.length > 1
													? "active"
													: ""
											}`
										)}
									>
										{item.label}
									</a>
								</Link>
							</li>
						);
					}
				})}
			</ul>
		</>
	);
};

export default Navigation;
