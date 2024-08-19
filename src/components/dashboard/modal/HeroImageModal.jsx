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
import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaFileImage } from "react-icons/fa";
import { MdOutlineCleaningServices, MdOutlineFileUpload } from "react-icons/md";
import { db } from "../../../config/firebase";
import { imageUpload } from "../../../lib/create";
import { resizeAndUploadImage } from "../../../lib/update";
import no_photo from "./../../../assets/images/no_photo2.jpg";

const HeroImageModal = ({ open, setOpen, count, imgUrl, setImgUrl }) => {
	const [image, setImage] = useState(null);
	const [loading, setLoading] = useState(false);

	const uploadImage = async () => {
		try {
			if (!image) return;
			setLoading(true);

			const resizedImage = await resizeAndUploadImage(image, 1280, 720, 100);
			const url = await imageUpload("others", resizedImage);
			if (!url) return toast.error("Something went wrong..");

			const controllerDoc = doc(db, "starmicroart", "controller");
			await updateDoc(controllerDoc, {
				[`hero.${count}`]: url,
			});

			toast.success("Gallery updated successfully.");
			setOpen(false);
			setImage(null);
			setImgUrl(null);
			setLoading(false);
		} catch (err) {
			console.log(err.message);
			setLoading(false);
		}
	};

	return (
		<>
			<Modal isOpen={open} onClose={() => setOpen(false)}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						<h1 className='uppercase text-[18px] font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r mx-auto justify-center inline-block from-primary to-secondary'>
							Image Update
						</h1>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<img
							src={image ? URL.createObjectURL(image) : imgUrl || no_photo}
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
									setImgUrl(null);
								}}
							>
								<MdOutlineCleaningServices size={16} />
								<span className='font-normal ml-1'>Clear</span>
							</Button>

							<label
								// bg-[#38a169]
								htmlFor='image'
								className='flex items-center cursor-pointer bg-blue-500 hover:bg-transparent border hover:border-blue-600 hover:text-blue-500 text-white px-3 rounded-md py-1'
							>
								<FaFileImage size={16} />
								<span className='font-normal ml-1'>Choose</span>
							</label>
							<input
								id='image'
								onChange={e => setImage(e.target.files[0])}
								accept={["image/jpeg", "image/png", "image/jpg"]}
								type='file'
								className='hidden'
							/>
						</div>
					</ModalBody>
					<Divider />
					<ModalFooter>
						<Button
							onClick={uploadImage}
							isLoading={loading}
							isDisabled={loading}
							size={"sm"}
							colorScheme='green'
						>
							<MdOutlineFileUpload size={18} />
							<span className='font-normal ml-2'>Upload</span>
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default HeroImageModal;
