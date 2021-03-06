const metaRegex = /\/([^\/]+).(\w{3,4}$)/;

const getMeta = (imageUrl) => {
	const matches = metaRegex.exec(imageUrl);

	if (matches) {
		return {
			fileName: matches[1],
			extension: matches[2]
		}
	}
	console.log(imageUrl);
	return {
		fileName: "abc",
		extension: "txt"
	}
}

module.exports = getMeta;
