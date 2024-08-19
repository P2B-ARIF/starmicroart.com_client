import Resizer from "react-image-file-resizer"; // Import the Resizer library

export const resizeAndUploadImage = (file, width, height, quality) => {
	// -1, // No change to width
	// -1, // No change to height
	return new Promise(resolve => {
		Resizer.imageFileResizer(
			file,
			width, // Max width
			height, // Max height
			"JPEG", // Output type (JPEG, PNG)
			quality, // Image quality (0 to 100)
			0, // Rotation
			uri => {
				resolve(uri);
			},
			"blob", // Output type (blob, base64)
		);
	});
};
