import React, { FC } from "react";

export interface PopUpProps {
	title: string;
	buttonTitle: string;
	subTitle: string;
	paragraph: string;
	onClose: () => void;
	isOpen: boolean;
	iconVariant: "success" | "error";
}

const PopUp: FC<PopUpProps> = ({
	title,
	subTitle,
	paragraph,
	onClose,
	isOpen,
	buttonTitle,
	iconVariant,
}) => {
	return (
		<div className={isOpen ? "overlay-layer" : "display-none"}>
			<div className="pop-up-position">
				<div className="pop-up">
					<div className="pop-up__info">
						<div className="pop-up__icon-cell">
							{iconVariant === "success" ? (
								<img
									src={`${process.env.basePath}/assets/img/ok.svg`}
									alt=""
									className="pop-up__icon"
								/>
							) : iconVariant === "error" ? (
								<img
									src={`${process.env.basePath}/assets/img/sorry.svg`}
									alt=""
									className="pop-up__icon"
								/>
							) : (
								""
							)}
						</div>
						<img
							src={`${process.env.basePath}/assets/img/pop-up-top-icon.svg`}
							alt=""
							className="pop-up-top-icon"
						/>
						<img
							src={`${process.env.basePath}/assets/img/pop-up-bottom-icon.svg`}
							alt=""
							className="pop-up-bottom-icon"
						/>
						<div className="pop-up__title">{title}</div>
						<div className="pop-up__sub-title">{subTitle}</div>
						<div className="pop-up__descr">{paragraph}</div>

						<button className="outline-btn" onClick={onClose}>
							{buttonTitle}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PopUp;
