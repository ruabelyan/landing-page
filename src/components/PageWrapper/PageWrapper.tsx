import classNames from "classnames";
import React, { FC } from "react";

export interface PageWrapperProps {
	page: string;
	className?: string;
}

const PageWrapper: FC<PageWrapperProps> = ({ children, page, className }) => {
	return (
		<div
			className={classNames(
				{
					[`page-wrapper page-wrapper--${page}`]: page,
				},
				className
			)}
		>
			{children}
		</div>
	);
};

export default PageWrapper;
