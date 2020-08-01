const metaRegex = /\/(\w+).(\w{3,4}$)/;

const getMeta = (imageUrl) => {
	const matches = metaRegex.exec(imageUrl);
	return {
		fileName: matches[1],
		extension: matches[2]
	}
}

module.exports = getMeta;
