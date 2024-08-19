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
} from "@chakra-ui/react";
import { doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { db } from "../../../config/firebase";

const UpdateOtherServiceModal = ({ details }) => {
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);

	const [service, setService] = useState({
		title: "",
		price: "",
	});

	useEffect(() => {
		if (details) {
			setService({
				title: details.title || "",
				price: details.price || "",
			});
		}
	}, [details]);

	const handleSave = async () => {
		const { title, price } = service;

		if (!title) return toast.error("Please enter a title");
		if (!price) return toast.error("Please enter a price");

		setLoading(true);

		try {
			// Assume serviceData contains an id for the document
			const collectionRef = doc(db, "starmicroart", "otherServices");
			await updateDoc(collectionRef, {
				[details.id]: { title: service?.title, price: service?.price },
			});

			toast.success("Successfully updated service.");
			setLoading(false);
			setOpen(false);
		} catch (error) {
			toast.error("Error updating service: " + error.message);
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
				marginTop={2}
			>
				<span className='font-normal'>Edit</span>
			</Button>

			<Modal size='lg' isOpen={open} onClose={() => setOpen(false)}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						<h1 className='uppercase text-[18px] font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r mx-auto from-primary to-secondary'>
							Edit Service
						</h1>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl mb={3}>
							<FormLabel>Title</FormLabel>
							<Input
								placeholder='Service Title'
								value={service.title}
								onChange={e =>
									setService({ ...service, title: e.target.value })
								}
							/>
						</FormControl>

						<FormControl mb={3}>
							<FormLabel>Price</FormLabel>
							<Input
								placeholder='Price'
								type='text'
								value={service.price}
								onChange={e =>
									setService({ ...service, price: e.target.value })
								}
							/>
						</FormControl>
					</ModalBody>
					<Divider />
					<ModalFooter>
						<Button
							size='sm'
							colorScheme='red'
							mr={2}
							onClick={() => {
								setOpen(false);
								setService({ ...service, title: "", price: "" });
							}}
						>
							<IoClose size={18} />
						</Button>
						<Button
							size='sm'
							colorScheme='green'
							isLoading={loading}
							isDisabled={loading}
							onClick={handleSave}
						>
							<FaCheck size={16} />
							<span className='font-normal ml-2'>Update</span>
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default UpdateOtherServiceModal;
