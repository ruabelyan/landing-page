import React, { FC } from "react";
import { byKey, getList, getHtml } from "shared/helpers";
import parse from "html-react-parser";
import {
	CardAdvantage,
	AnchorItemProps
} from "components";

export interface CardAdvantageListProps {
	dataName: string;
	categoryName: string;
	pageNameForAnchorsLinks: string;
}

const CardAdvantageList: FC<CardAdvantageListProps> = ({
	dataName,
	categoryName,
	pageNameForAnchorsLinks }) => {

	return (
		<section className="products-page-content">
			<div className="products-card-list-cell">
				{
					getList(dataName)?.sort(byKey("cardSortId"))
						.map((item: AnchorItemProps) => (
							<CardAdvantage
								anchorId={`${pageNameForAnchorsLinks}-card-${item.hashHref}`}
								key={item.id}
								title={parse(item.title)}
								description={parse(item.description)}
								categoryName={categoryName}
							/>
						))
				}
			</div>
		</section>
	);
};

export default CardAdvantageList;
