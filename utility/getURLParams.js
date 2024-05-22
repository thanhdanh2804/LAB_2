export default (url) => {
	const paramString = url.includes("?") ? url.split("?")[1].split("&") : [];
	const params = {};

	paramString.forEach((params) => {
		const paramSplit = params.split("=");
		params[paramSplit[0]] = paramSplit[1];
	});

	return params;
};
