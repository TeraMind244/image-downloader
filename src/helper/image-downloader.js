const fs = require("fs");
const fetch = require("node-fetch");

const downloadFile = (async (url, path) => {
	const res = await fetch(url);
	const fileStream = fs.createWriteStream(path, { autoClose: true, emitClose: true });
	await new Promise((resolve, reject) => {
		res.body.pipe(fileStream);
		res.body.on("error", (err) => {
			reject(err);
		});
		fileStream.on("finish", function() {
			resolve();
		});
	});
});

module.exports = downloadFile;
