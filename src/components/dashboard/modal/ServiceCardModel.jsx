import {
	Button,
	Divider,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Textarea,
} from "@chakra-ui/react";
import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaCheck, FaFileImage } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdOutlineCleaningServices } from "react-icons/md";
import { db } from "../../../config/firebase";
import { imageUpload } from "../../../lib/create";
import { resizeAndUploadImage } from "../../../lib/update";
import no_photo from "./../../../assets/images/no_photo2.jpg";

const ServiceCardModel = ({ details }) => {
	const [open, setOpen] = useState(false);
	const [service, setService] = useState({
		title: details?.title || "",
		time: details?.time || "",
		price: details?.price || "",
		description: details?.description || "",
		imgUrl: details?.imgUrl || "",
	});
	const [file, setFile] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleCreateService = async () => {
		if (!service.title || !service.price || !service.time) {
			return toast.error("Please fill all fields.");
		}

		setLoading(true);

		try {
			let url = service.imgUrl;
			if (file) {
				const resizedImage = await resizeAndUploadImage(file, 1280, 720, 80);
				url = await imageUpload("serviceImage", resizedImage);
			}

			const collection = doc(db, "starmicroart", "services");
			await updateDoc(collection, {
				[details?.id || "defaultId"]: { ...service, imgUrl: url },
			});

			toast.success("Successfully updated service.");
			setOpen(false);
			setLoading(false);
		} catch (error) {
			console.error("Error updating service: ", error.message);
			toast.error("Failed to update service.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Button
				onClick={() => setOpen(true)}
				size='sm'
				colorScheme='purple'
				mt={2}
			>
				<span className='font-normal'>Edit</span>
			</Button>

			<Modal size='lg' isOpen={open} onClose={() => setOpen(false)}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						<h1 className='uppercase text-18 font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r mx-auto justify-center inline-block from-primary to-secondary'>
							Update Service Card
						</h1>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl mb={3}>
							<FormLabel>Title</FormLabel>
							<Input
								value={service.title}
								onChange={e =>
									setService({ ...service, title: e.target.value })
								}
							/>
						</FormControl>

						<div className='flex gap-5'>
							<FormControl mb={3}>
								<FormLabel>Time</FormLabel>
								<Input
									value={service.time}
									onChange={e =>
										setService({ ...service, time: e.target.value })
									}
								/>
							</FormControl>
							<FormControl mb={3}>
								<FormLabel>Price</FormLabel>
								<Input
									type='number'
									value={service.price}
									onChange={e =>
										setService({ ...service, price: e.target.value })
									}
								/>
							</FormControl>
						</div>
						<FormControl mb={3}>
							<FormLabel>Description</FormLabel>
							<Textarea
								value={service.description}
								onChange={e =>
									setService({ ...service, description: e.target.value })
								}
							/>
						</FormControl>

						<FormControl>
							<FormLabel>Image</FormLabel>
							<img
								src={
									file ? URL.createObjectURL(file) : service.imgUrl || no_photo
								}
								alt='service'
								className='w-full h-60 object-cover rounded-lg'
							/>
							<div className='mt-2 flex items-center'>
								<Button
									size='sm'
									colorScheme='red'
									mr={2}
									onClick={() => {
										setService({ ...service, imgUrl: "" });
										setFile(null);
									}}
								>
									<MdOutlineCleaningServices size={16} />
									<span className='font-normal ml-1'>Clear</span>
								</Button>
								<label
									htmlFor='image'
									className='flex items-center cursor-pointer bg-blue-500 hover:bg-blue-400 border hover:border-blue-500 text-white px-3 rounded-md py-1'
								>
									<FaFileImage size={16} />
									<span className='font-normal ml-1'>Choose</span>
								</label>
								<input
									id='image'
									type='file'
									accept='image/jpeg, image/jpg, image/png'
									onChange={e => setFile(e.target.files[0])}
									className='hidden'
								/>
							</div>
						</FormControl>
					</ModalBody>
					<Divider />
					<ModalFooter>
						<Button
							size='sm'
							colorScheme='red'
							mr={2}
							onClick={() => setOpen(false)}
						>
							<IoClose size={18} />
						</Button>
						<Button
							size='sm'
							colorScheme='green'
							isLoading={loading}
							onClick={handleCreateService}
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

export default ServiceCardModel;
