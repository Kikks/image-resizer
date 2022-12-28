const sharp = require("sharp");

const numberOfImages = 146;
const widthOfResizedImage = 500;

for (let i = 1; i <= numberOfImages; i++) {
	sharp(`images/${i}.png`)
		.resize({ width: widthOfResizedImage })
		.toFile(`images/${i}-preview.png`)
		.then(() => {
			console.log(`Resized image ${i}`);
		})
		.catch(err => {
			console.log(`An error occured while resizing image ${i}`);
			console.error(err);
		});
}
