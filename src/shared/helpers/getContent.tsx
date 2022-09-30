import parse from "html-react-parser";
import { useIntl } from "react-intl";

export const getHtml = (key: string) => {
	const intl = useIntl();
	return parse(intl.formatMessage({ id: key }));
}

export const getText = (key: string) => {
	const intl = useIntl();
	return intl.formatMessage({ id: key })
}

export const getList = (key: string) => {
	const intl = useIntl();
	const arr = intl?.messages[key];

	if (Array.isArray(arr)) {
		return JSON.parse(JSON.stringify(arr));
	}
	else {
		null
	}
}

