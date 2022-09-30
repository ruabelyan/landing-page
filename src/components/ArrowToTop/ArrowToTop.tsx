import { FC, useEffect, useState } from "react";
import { ArrowToTop as ArrowToTopIcon } from "icons";
import { pxToRem } from "shared/helpers";

export interface ArrowToTopProps {
	buttonShowingTopPixel?: number;
	className?: string;
}
const ArrowToTop: FC<ArrowToTopProps> = ({
	buttonShowingTopPixel = 600,
	className,
}) => {
	const [isScrolledBottom, setScrolledBottom] = useState(false);
	useEffect(() => {
		const checkIsScrolledBottom = () => {
			return setScrolledBottom(window.scrollY >= buttonShowingTopPixel)
		}

		window.addEventListener("scroll", checkIsScrolledBottom);
		return () => {
			window.removeEventListener("scroll", checkIsScrolledBottom);
		};
	}, [buttonShowingTopPixel]);

	if (isScrolledBottom) {
		return (
			<div
				className={`arrow-to-top arrow-to-top--${className}`}
				onClick={() => {
					window.scrollTo({
						behavior: "smooth",
						left: 0,
						top: 0,
					});
				}}
			>
				<ArrowToTopIcon width={pxToRem(14)} />
			</div>
		);

	} else {
		return null
	}


};
export default ArrowToTop;
