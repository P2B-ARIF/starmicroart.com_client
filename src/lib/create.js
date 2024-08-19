import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { uid } from "uid";
import { storage } from "../config/firebase";

export const imageUpload = async (path, resizedImage) => {
	const imgUid = uid();
	try {
		const storageRef = ref(storage, `${path}/${imgUid}`);
		const snapshot = await uploadBytes(storageRef, resizedImage);

		console.log("Uploaded a blob or file!", snapshot.metadata.fullPath);
		const url = await getDownloadURL(ref(storage, snapshot.metadata.fullPath));
		return url;
	} catch (error) {
		console.log(`Error: ${error}`);
		return error;
	}
};
