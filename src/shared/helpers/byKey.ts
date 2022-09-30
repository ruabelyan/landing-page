export const byKey = (key: string) => {
	return (nextItem: any, prevItem: any) => {
		return nextItem[key] > prevItem[key] ? 1 : -1;
	};
}
