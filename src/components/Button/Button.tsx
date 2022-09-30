import classNames from "classnames";
import Link from "next/link";
import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import { Colors } from "types";

export type ButtonVariants = "primary" | "secondary";

export interface ButtonProps
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, any> {
	linkRef?: string;
	color: Colors;
	variant: ButtonVariants;
	component?: keyof JSX.IntrinsicElements | React.ComponentType;
	className?: string;
}

const Button: FC<ButtonProps> = ({
	children,
	linkRef,
	color,
	variant,
	component: Component = "a",
	className,
	...props
}) => {
	return (
		<>
			{linkRef ? (
				<Link href={linkRef} passHref>
					<a
						className={classNames("default-btn", `default-btn--${color}`, className)}
					>
						<span className="default-btn__label">{children}</span>
					</a>
				</Link>
			) : (
				<button
					{...props}
					className={classNames("default-btn", `default-btn--${color}`, className)}
				>
					<span className="default-btn__label">{children}</span>
				</button>
			)}
		</>
	);
};

export default Button;
