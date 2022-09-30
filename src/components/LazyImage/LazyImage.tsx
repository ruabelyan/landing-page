import React, { ReactNode, useState, useEffect } from "react";

export interface LazyImageProps {
	src: string;
	placeholder?: ReactNode;
	imageRenderer?: ReactNode;
}

const LazyImage = ({
	src,
	placeholder = null,
	imageRenderer = null,
}: LazyImageProps): JSX.Element => {
	const [isLoaded, setLoaded] = useState(false);

	useEffect(() => {
		if (!src) return;

		const imageLoader = new Image();

		imageLoader.src = src;

		imageLoader.onload = () => setLoaded(true);
	}, [src]);

	return (
		<>
			{isLoaded && imageRenderer}

			<div style={{ opacity: isLoaded ? 0 : 1, transition: "opacity 0.3s" }}>
				{placeholder}
			</div>
		</>
	);
};

export default LazyImage;
