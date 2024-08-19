import {
	Button,
	Divider,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaFileImage } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineCleaningServices } from "react-icons/md";
import no_photo from "./../../../assets/images/no_photo2.jpg";
import { resizeAndUploadImage } from "../../../lib/update";
import { imageUpload } from "../../../lib/create";
import toast from "react-hot-toast";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import uniqid from "uniqid";

const GalleryModel = ({ open, setOpen, details }) => {
	// const [open, setOpen] = useState(false);
	// const [imgUrl, setImgUrl] = useState(
	// 	"https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?cs=srgb&dl=pexels-soldiervip-1391498.jpg&fm=jpg",
	// );

	const [image, setImage] = useState(null);
	const [loading, setLoading] = useState(false);

	const uploadImage = async () => {
		const id = uniqid.time();
		// if (!image) return toast.error("Please choose image...");
		setLoading(true);
		try {
			if (image) {
				const resizedImage = await resizeAndUploadImage(image, 1280, 720, 90);
				const url = await imageUpload("others", resizedImage);

				const controllerDoc = doc(db, "starmicroart", "controller");
				await updateDoc(controllerDoc, {
					[`gallery.${details?.key}`]: url,
				});
				toast.success("Gallery updated successfully.");
				setOpen(false);
				setLoading(false);
			} else {
				const controllerDoc = doc(db, "starmicroart", "controller");
				await updateDoc(controllerDoc, {
					[`gallery.${details.key}`]: details.value,
				});
				toast.success("Gallery updated successfully.");
				setOpen(false);
				setLoading(false);
			}

			// if (!url) return toast.error("Something went wrong..");

			// Reference to the 'controller' document in the 'starmicroart' collection
			// const controllerDoc = doc(db, "starmicroart", "controller");

			// Get the current 'gallery' array from Firestore (you might already have this)
			// const controllerSnapshot = await getDoc(controllerDoc);
			// if (!controllerSnapshot.exists()) {
			// 	return toast.error("Document does not exist.");
			// }
			// const galleryArray = controllerSnapshot.data().gallery || [];

			// // Replace the second item in the array (index 1) with the new URL
			// galleryArray[index] = url;

			// Update the 'gallery' array in Firestore
			// await updateDoc(controllerDoc, {
			// 	// [`gallery.lzuzk5j9`]: url,
			// 	[`gallery.${details?.key}`]: url,
			// });

			// toast.success("Gallery updated successfully.");
			// setOpen(false)
			// setLoading(false);
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<>
			{/* <Button
				onClick={() => setOpen(true)}
				size={"sm"}
				colorScheme='purple'
				marginTop={2}
			>
				<span className='font-normal'>Edit</span>
			</Button> */}
			<Modal isOpen={open} onClose={() => setOpen(false)}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						<h1 className='uppercase text-[18px] font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r mx-auto justify-center inline-block from-primary to-secondary'>
							Gallery Image Update
						</h1>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<img
							// src={no_photo}
							src={image ? URL.createObjectURL(image) : details?.value || no_photo}
							alt='no photo image'
							className='w-full h-[240px] object-cover overflow-hidden rounded-lg'
						/>

						<div className='mt-2 flex items-center'>
							<Button
								size={"sm"}
								colorScheme='red'
								mr={2}
								onClick={() => {
									setImage(null);
									// setImgUrl(null);
								}}
							>
								<MdOutlineCleaningServices size={16} />
								<span className='font-normal ml-1'>Clear</span>
							</Button>

							<label
								htmlFor='image'
								className='flex items-center cursor-pointer bg-blue-500 hover:bg-transparent border hover:border-blue-500 hover:text-blue-500 text-white px-3 rounded-md py-1'
							>
								<FaFileImage size={16} />
								<span className='font-normal ml-1'>Choose</span>
							</label>
							<input
								id='image'
								onChange={e => setImage(e.target.files[0])}
								type='file'
								className='hidden'
							/>
						</div>
					</ModalBody>
					<Divider />
					<ModalFooter>
						<Button
							isDisabled={loading}
							isLoading={loading}
							size={"sm"}
							colorScheme='green'
							onClick={uploadImage}
						>
							<FaCheck size={16} />
							<span className='font-normal ml-2'>Save</span>
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default GalleryModel;
