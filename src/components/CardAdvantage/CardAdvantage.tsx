import classNames from "classnames";
import React, { FC, ReactNode } from "react";
import { useAnchor } from "hooks/useAnchor";

export interface CardAdvantageProps {
	title: string | ReactNode;
	description: string | ReactNode;
	categoryName: string;
	anchorId?: string;
}

const CardAdvantage: FC<CardAdvantageProps> = ({
	title,
	description,
	categoryName,
	anchorId,
}) => {
	const anchor = useAnchor();

	return (
		<div id={anchorId} className="card-advantage__wrapper">
			<div
				className={classNames(`card-advantage card-advantage--${categoryName}`, {
					'card-advantage--active': anchor === anchorId
				})}
			>
				<h2 className="card-advantage__title">{title}</h2>
				<p className="card-advantage__description">{description}</p>
			</div>
		</div>
	);
};

export default CardAdvantage;
