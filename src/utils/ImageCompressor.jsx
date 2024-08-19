import { arrayUnion, doc, getFirestore, updateDoc } from "firebase/firestore";
import {
	getDownloadURL,
	getStorage,
	ref,
	uploadString,
} from "firebase/storage";
import Resizer from "react-image-file-resizer";

export const imageCompressor = file => {
	return new Promise((resolve, reject) => {
		Resizer.imageFileResizer(
			file,
			300,
			300,
			"JPEG",
			100,
			0,
			uri => {
				resolve(uri);
			},
			"base64",
		);
	});
};

export const uploadImageToFirebase = async (imageBase64, userId) => {
	try {
		const storage = getStorage();
		const firestore = getFirestore();

		// Create a storage reference
		const storageRef = ref(storage, `images/${userId}/${Date.now()}.jpg`);

		// Upload the image
		const uploadResult = await uploadString(storageRef, imageBase64, "base64");

		// Get the image URL
		const downloadURL = await getDownloadURL(uploadResult.ref);

		// Update Firestore with the image URL
		const userDocRef = doc(firestore, "users", userId);
		await updateDoc(userDocRef, {
			gallery: arrayUnion(downloadURL),
		});

		return downloadURL;
	} catch (error) {
		console.error("Error uploading image: ", error);
		throw error;
	}
};
