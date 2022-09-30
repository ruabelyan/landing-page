import React, { FC, ReactNode } from "react";
import parse from "html-react-parser";
import { useAnchor } from "hooks/useAnchor";
import classNames from "classnames";
import Link from "next/link";
import { Colors } from "types/colors";

export interface IIconsArr {
	id: number;
	component: ReactNode;
}

export interface AnchorItemProps {
	id: number;
	buttonSortId: number;
	buttonTitleClassNameModify?: string;
	buttonTitle?: string;
	cardSortId: number;
	title: string;
	description: string;
	hashHref: string;
}

export interface AnchorsListProps {
	anchorsList: AnchorItemProps[];
	iconsArr: IIconsArr[];
	color: Colors;
	pageNameForAnchorsLinks: string;
}

const AnchorsList: FC<AnchorsListProps> = ({
	anchorsList,
	iconsArr,
	color,
	pageNameForAnchorsLinks,
}) => {
	const anchor = useAnchor();

	return (
		<div className="anchors-section">
			<div className="anchors-section__content"> {
 
				Array.isArray(anchorsList) ?
					anchorsList.map((item: AnchorItemProps, index: number) => {
						if (index < 7) {
							if (item.buttonTitleClassNameModify?.split("-")[0] === "bottom") {
								return (
									<div className={`anchor-item anchor-item--${(index + 1)}`} key={item.id}>
										<Link
											href={`#${pageNameForAnchorsLinks}-card-${item.hashHref}`}
										>
											<a
												className={classNames(
													`circle-content-cell circle-content-cell--${color} circle-content-cell--link`,
													{
														"circle-content-cell--active": anchor.includes(item.hashHref),
													}
												)}
											>
												{iconsArr[index].component}
											</a>
										</Link>
										<h3 className={`anchor-item__title anchor-item__title--${item.buttonTitleClassNameModify}`}>
											{item?.buttonTitle ? parse(item.buttonTitle) : null}
										</h3>
									</div>
								)
							}
							if (item.buttonTitleClassNameModify?.split("-")[0] === "top") {
								return (
									<div className={`anchor-item anchor-item--${(index + 1)}`} key={item.id}>
										<h3 className={`anchor-item__title anchor-item__title--${item.buttonTitleClassNameModify}`}>
											{item?.buttonTitle ? parse(item.buttonTitle) : null}
										</h3>
										<Link
											href={`#${pageNameForAnchorsLinks}-card-${item.hashHref}`}
										>
											<a
												className={classNames(
													`circle-content-cell circle-content-cell--${color} circle-content-cell--link`,
													{
														"circle-content-cell--active": anchor.includes(item.hashHref),
													}
												)}
											>
												{iconsArr[index].component}
											</a>
										</Link>
									</div>
								)
							}
						}
					})
					: null
			}
			</div>
		</div>
	)
}

export default AnchorsList;
