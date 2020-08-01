const downloadFile = require("./src/helper/image-downloader");
const getMeta = require("./src/helper/getMeta");
const { images } = require("./src/data/data.json");

const dest = "./downloaded";

const main = async () => {
	for (const imageUrl of images) {
		const { fileName, extension } = getMeta(imageUrl);
		await downloadFile(imageUrl, `./${dest}/${fileName}.${extension}`);
	}
}

main();
