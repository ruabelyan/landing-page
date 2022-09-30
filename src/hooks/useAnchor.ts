import { useRouter } from "next/router";

export const useAnchor = () => {
	const { asPath } = useRouter();

	return asPath.split('#')[1] || ''
}