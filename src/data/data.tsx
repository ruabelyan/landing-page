import {
	FacebookIcon,
	YoutubeIcon,
	InstagramIcon,
	LinkedinIcon,
	PinterestIcon,
	TwitterIcon,
} from "icons";


import { pxToRem } from "shared/helpers"


export interface INavLink {
	id: number;
	label?: string;
	hrefTo?: any;
	category: string;
}

type NS = number | string;

export const iconsComponentsArray = [
	(width: string) => <FacebookIcon width={pxToRem(+(width.split("px")[0]))} />,
	(width: string) => <InstagramIcon width={pxToRem(+(width.split("px")[0]))} />,
	(width: string) => <TwitterIcon width={pxToRem(+(width.split("px")[0]))} />,
	(width: string) => <YoutubeIcon width={pxToRem(+(width.split("px")[0]))} />,
	(width: string) => <LinkedinIcon width={pxToRem(+(width.split("px")[0]))} />,
	(width: string) => <PinterestIcon width={pxToRem(+(width.split("px")[0]))} />,
];

export interface ISocialLinks {
	id: number;
	label?: string;
	hrefTo: string;
	icon: {
		label: string;
		width: string;
	};
}

export const socialLinks: ISocialLinks[] = [
	{
		id: 0,
		label: "Facebook",
		hrefTo: "https://www.facebook.com/atomconstruct.soft",
		icon: {
			label: "FacebookIcon",
			width: "17.67px",
		},
	},
	{
		id: 1,
		label: "Instagram",
		hrefTo: "https://www.instagram.com/atom.construct/",
		icon: {
			label: "InstagramIcon",
			width: "17px",
		},
	},
	{
		id: 2,
		label: "Twitter",
		hrefTo: "https://twitter.com/AtomConstruct",
		icon: {
			label: "TwitterIcon",
			width: "17px",
		},
	},
	{
		id: 3,
		label: "Youtube",
		hrefTo: "https://www.youtube.com/channel/UCLzYwIhkd4hUFPcFgotdz9Q",
		icon: {
			label: "YoutubeIcon",
			width: "16.67px",
		},
	},
	{
		id: 4,
		label: "linkedin",
		hrefTo: "https://www.linkedin.com/company/atomconstruct-soft/",
		icon: {
			label: "LinkedinIcon",
			width: "16px",
		},
	},
	{
		id: 5,
		label: "pinterest",
		hrefTo: "http://www.pinterest.com/AtomConstruct",
		icon: {
			label: "LinkedinIcon",
			width: "11.99px",
		},
	},
];

export interface ILangs {
	id: number;
	langCode: string;
	label?: string;
	ogLocale?: string;
}

export const Langs: ILangs[] = [
	{
		id: 0,
		langCode: "en",
		label: "English",
		ogLocale: "en_us"
	},
	{
		id: 1,
		langCode: "es",
		label: "Spanish",
		ogLocale: "es_es",
	},
	{
		id: 2,
		langCode: "pt",
		label: "Br-Portugues",
		ogLocale: "pt_br",
	},
	{
		id: 3,
		langCode: "ru",
		label: "Russian",
		ogLocale: "ru_ru",
	},
];

// IIconProps
export interface IIconProps {
	name?: string;
	width?: string;
}
