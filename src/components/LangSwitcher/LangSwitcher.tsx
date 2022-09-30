import classNames from "classnames";
import Link from "next/link";
import React, { FC, useState, useEffect, useMemo } from "react";
import { LanguageSwitcherIcon, ArrowDown } from "icons";
import { ILangs } from "data/data";
import { useRouter } from "next/router";

export interface LangSwitcherProps {
	data: ILangs[];
}

const LangSwitcher: FC<LangSwitcherProps> = ({ data }) => {
	const [isShowLangDropDown, setIsShowLangDropDown] = useState(false);

	const { locale, pathname } = useRouter();

	const toggleDropDown = () => {
		setIsShowLangDropDown(!isShowLangDropDown);
	};

	const selectedLanguage = useMemo(
		() => data.find((d) => d.langCode === locale),
		[locale, data]
	);

	return (
		<div className="lang-switcher lang-switcher--position">
			<div
				className="lang-switcher__group"
				onMouseEnter={() => toggleDropDown()}
				onMouseLeave={() => toggleDropDown()}
				onClick={() => toggleDropDown()}
			>
				<LanguageSwitcherIcon className="lang-switcher__icon" />
				<span className="lang-switcher__label">{selectedLanguage?.label}</span>
				<ArrowDown className="lang-switcher__arrow" />
				{isShowLangDropDown && (
					<div className="lang-switcher__drop-down">
						<div className="lang-switcher__drop-down-container">
							<ul className="lang-switcher__list">
								{data?.map((item: ILangs) => (
									<li
										key={item.id}
										data-lang={item.langCode}
										className="lang-switcher__list-item"
										onClick={() => toggleDropDown()}
									>
										<Link href={pathname} locale={item.langCode}>
											<a
												className={classNames("lang-switcher__list-item-link", {
													"lang-switcher__list-item-link--current":
														selectedLanguage?.label === item.label,
												})}
											>
												{item.label}
											</a>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default LangSwitcher;
