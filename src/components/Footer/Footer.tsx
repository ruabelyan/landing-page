import { getHtml, getList } from "shared/helpers"
import {
	AtomLogoIcon,
} from "icons";
import Link from "next/link";
import React, { FC } from "react";
import { Colors } from "types";
import { ISocialLinks, iconsComponentsArray } from "data/data";

export interface FooterProps {
	color: Colors;
}

const Footer: FC<FooterProps> = ({ color }) => {

	return (
		<footer className="footer">
			<div className="fix-layout">
				<div className="fix-layout__inner">
					<div className="to-center">
						<Link href="/">
							<a className="logo logo--static">
								<AtomLogoIcon />
							</a>
						</Link>
					</div>

					<p className="description-2">
						{getHtml("home.project.footer.offer")}
					</p>

					{/* soc-links */}
					<div className="soc-links soc-links--footer">
						{
							getList("socialLinks")?.map((item: ISocialLinks, index: number) => {
								return (
									<Link href={item.hrefTo} key={item.id}>
										<a className="soc-icon" target="_blank">
											{iconsComponentsArray[index](item.icon.width)}
										</a>
									</Link>
								);
							})}
					</div>
					{/* soc-links */}

					<div className="copy-right">
						© 2021-{new Date().getFullYear()}, {getHtml("home.project.copyright")}
					</div>

				</div>
			</div>
		</footer>
	);
};

export default Footer;
