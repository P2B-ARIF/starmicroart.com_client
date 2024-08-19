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
	Input,
	Textarea,
	FormControl,
	FormLabel,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdOutlineCleaningServices } from "react-icons/md";
import no_photo from "./../../../assets/images/no_photo2.jpg";
import { FaFileImage } from "react-icons/fa";
import toast from "react-hot-toast";
import { resizeAndUploadImage } from "../../../lib/update";
import { imageUpload } from "../../../lib/create";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";

const DiscountModel = ({ discountDetails }) => {
	const [open, setOpen] = useState(false);
	// const [discount, setDiscount] = useState("30% OFF");
	// const [description, setDescription] = useState(
	// 	"Constant stress and tension can really wear the body out. Relieve the pain with one or more of our many massage services at a very profitable discount.",
	// );
	// const [imgUrl, setImgUrl] = useState("");
	// const [title, setTitle] = useState("for All Messages");

	const [details, setDetails] = useState(discountDetails);
	const [image, setImage] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setDetails(discountDetails);
	}, [discountDetails]);

	const handleDiscountUpdate = async () => {
		if (
			!details.discount ||
			!details.imgUrl ||
			!details.description ||
			!details.title
		) {
			return toast.error("Please fill all field..");
		}
		setLoading(true);

		try {
			if (image) {
				const resizedImage = await resizeAndUploadImage(image, 1280, 720, 90);
				const url = await imageUpload("others", resizedImage);

				// Reference to the 'controller' document in the 'starmicroart' collection
				const controllerDoc = doc(db, "starmicroart", "controller");

				// // Get the current 'gallery' array from Firestore (you might already have this)
				// const controllerSnapshot = await getDoc(controllerDoc);
				// if (!controllerSnapshot.exists()) {
				// 	return toast.error("Document does not exist.");
				// }
				// const galleryArray = controllerSnapshot.data().gallery || [];

				// // Replace the second item in the array (index 1) with the new URL
				// galleryArray[index] = url;

				// Update the 'gallery' array in Firestore
				await updateDoc(controllerDoc, {
					discount: { ...details, imgUrl: url },
				});

				toast.success("Discount updated successfully.");
				setOpen(false);
				setImage(null);
				setLoading(false);
			} else {
				const controllerDoc = doc(db, "starmicroart", "controller");
				await updateDoc(controllerDoc, {
					discount: details,
				});

				toast.success("Discount updated successfully.");
				setOpen(false);
				setImage(null);
				setLoading(false);
			}
		} catch (err) {
			setLoading(false);
			console.log(err.message);
		}
	};

	return (
		<>
			<Button
				onClick={() => setOpen(true)}
				size={"sm"}
				colorScheme='purple'
				marginTop={2}
			>
				<span className='font-normal'>Update Offer</span>
			</Button>
			<Modal size={"lg"} isOpen={open} onClose={() => setOpen(false)}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						<h1 className='uppercase text-[18px] font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r mx-auto justify-center inline-block from-primary to-secondary'>
							Update Discount
						</h1>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl mb={3}>
							<FormLabel>Discount</FormLabel>
							<Input
								value={details.discount}
								onChange={e =>
									setDetails({ ...details, discount: e.target.value })
								}
								// onChange={e => setDiscount(e.target.value)}
							/>
						</FormControl>
						<FormControl mb={3}>
							<FormLabel>Title</FormLabel>
							<Input
								value={details.title}
								onChange={e =>
									setDetails({ ...details, title: e.target.value })
								}
							/>
						</FormControl>
						<FormControl mb={3}>
							<FormLabel>Description</FormLabel>
							<Textarea
								value={details.description}
								onChange={e =>
									setDetails({ ...details, description: e.target.value })
								}
							/>
						</FormControl>
						<FormControl>
							<FormLabel>Image</FormLabel>
							<img
								src={
									image
										? URL.createObjectURL(image)
										: details?.imgUrl || no_photo
								}
								alt='no photo image'
								className='w-full h-[240px] object-cover overflow-hidden rounded-lg'
							/>
							<div className='mt-2 flex items-center'>
								<Button
									size={"sm"}
									colorScheme='red'
									mr={2}
									onClick={() => setImage(null)}
								>
									<MdOutlineCleaningServices size={16} />
									<span className='font-normal ml-1'>Clear</span>
								</Button>
								<label
									htmlFor='image'
									// className='flex items-center cursor-pointer bg-[#38a169] hover:bg-transparent border hover:border-[#38a169] hover:text-[#38a169] text-white px-3 rounded-md py-1'
									className='flex items-center cursor-pointer bg-blue-500 hover:bg-transparent border hover:border-blue-600 hover:text-blue-500 text-white px-3 rounded-md py-1'
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
						</FormControl>
					</ModalBody>
					<Divider />
					<ModalFooter>
						<Button
							size={"sm"}
							colorScheme='red'
							mr={2}
							onClick={() => setOpen(false)}
						>
							<IoClose size={18} />
						</Button>
						<Button
							size={"sm"}
							colorScheme='green'
							onClick={handleDiscountUpdate}
							isDisabled={loading}
							isLoading={loading}
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

export default DiscountModel;
