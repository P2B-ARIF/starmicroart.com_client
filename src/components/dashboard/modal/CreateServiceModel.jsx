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
import { IoIosAddCircle } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { MdOutlineCleaningServices } from "react-icons/md";
import uniqid from "uniqid";
import { db } from "../../../config/firebase";
import { imageUpload } from "../../../lib/create";
import { resizeAndUploadImage } from "../../../lib/update";
import no_photo from "./../../../assets/images/no_photo2.jpg";

const CreateServiceModel = () => {
	const [open, setOpen] = useState(false);
	const [service, setService] = useState({
		title: "",
		time: "",
		price: "",
		description: "",
		imgUrl: "",
	});
	const [file, setFile] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleCreateService = async () => {
		const { title, description, price, time } = service;
		if (!file && !window.confirm("Proceed without an image?")) {
			toast.error("Image selection is required.");
			return;
		}

		if (!title || !price || !time) return toast.error("Please fill all fields");

		setLoading(true);
		const id = uniqid.time();

		try {
			if (file) {
				const resizedImage = await resizeAndUploadImage(file, 1280, 720, 80);
				const url = await imageUpload("serviceImage", resizedImage);

				const collectionRef = doc(db, "starmicroart", "services");
				await updateDoc(collectionRef, {
					[id]: { ...service, imgUrl: url },
				});

				toast.success("Successfully added service");
				setService({
					title: "",
					time: "",
					price: "",
					description: "",
					imgUrl: "",
				});
			} else {
				const collectionRef = doc(db, "starmicroart", "services");
				await updateDoc(collectionRef, {
					[id]: service,
				});

				toast.success("Successfully added service");
				setService({
					title: "",
					time: "",
					price: "",
					description: "",
					imgUrl: "",
				});
			}

			setFile(null);
			setOpen(false);
		} catch (error) {
			toast.error("Error adding service: " + error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<button
				onClick={() => setOpen(true)}
				className='flex items-center p-2 text-green-700 rounded-lg hover:bg-green-200 group w-full'
			>
				<IoIosAddCircle
					size={22}
					className='text-green-500 group-hover:text-green-700'
				/>
				<span className='ms-3'>Add Service</span>
			</button>

			<Modal size='lg' isOpen={open} onClose={() => setOpen(false)}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						<h1 className='uppercase text-[18px] font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r mx-auto justify-center inline-block from-primary to-secondary'>
							Create Service Card
						</h1>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl mb={3}>
							<FormLabel>Title</FormLabel>
							<Input
								placeholder='title'
								value={service.title}
								onChange={e =>
									setService({ ...service, title: e.target.value })
								}
							/>
						</FormControl>

						<div className='flex item-center gap-5'>
							<FormControl mb={3}>
								<FormLabel>Time</FormLabel>
								<Input
									placeholder='time'
									value={service.time}
									onChange={e =>
										setService({ ...service, time: e.target.value })
									}
								/>
							</FormControl>
							<FormControl mb={3}>
								<FormLabel>Price</FormLabel>
								<Input
									placeholder='price'
									type='text'
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
								placeholder='description'
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
								alt='Service'
								className='w-full h-[240px] object-cover overflow-hidden rounded-lg'
							/>
							<div className='mt-2 flex items-center'>
								<Button
									size='sm'
									colorScheme='red'
									mr={2}
									onClick={() => setFile(null)}
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
									type='file'
									accept='image/jpeg,image/jpg,image/png'
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
							isDisabled={loading}
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

export default CreateServiceModel;
