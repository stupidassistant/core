export const ObjMap = <V, W>(input: Record<string, V>, map: (k: string, v: V) => W): Record<string, W> => {
	const list: [string,V][] = Object.entries(input);

	return list.reduce((obj: Record<string, W>, [k, v]) => {
		obj[k] = map(k, v);
		return obj;
	}, {});
}