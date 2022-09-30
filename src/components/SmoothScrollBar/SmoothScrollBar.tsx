import React, { FC, useRef } from "react";
import { Scrollbar } from "smooth-scrollbar-react";
import type { Scrollbar as BaseScrollbar } from "smooth-scrollbar/scrollbar";

export interface SmoothScrollBarProps { }

const SmoothScrollBar: FC<SmoothScrollBarProps> = ({
	children
}) => {
	const scrollbarRef = useRef<BaseScrollbar | null>(null);

	return (
		<Scrollbar
			ref={scrollbarRef}
			plugins={{
				overscroll: {
					effect: "bounce",
				} as const,
			}}
		>
			<div className="scroll-bar-block">
				{children}
			</div>
		</Scrollbar>
	)
}

export default SmoothScrollBar;
