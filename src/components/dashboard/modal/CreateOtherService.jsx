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
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { CiBoxes } from "react-icons/ci";
import toast from "react-hot-toast";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import uniqid from "uniqid";

const CreateOtherService = () => {
	const [open, setOpen] = useState(false);
	const [service, setService] = useState({
		title: "",
		price: "",
	});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setService({
			title: "",
			price: "",
		});
	}, []);

	const handleCreateService = async () => {
		const { title, price } = service;

		if (!title) return toast.error("Please enter a title");
		if (!price) return toast.error("Please enter a price");

		setLoading(true);
		const id = uniqid.time();

		try {
			const collectionRef = doc(db, "starmicroart", "otherServices");
			await updateDoc(collectionRef, {
				[id]: service,
			});

			toast.success("Successfully added other service.");
			setService({ title: "", price: "" });
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
				className='flex items-center p-2 text-blue-700 rounded-lg hover:bg-blue-200 group w-full'
			>
				<CiBoxes
					size={22}
					className='text-blue-500 group-hover:text-blue-700'
				/>
				<span className='ms-3'>Add Other Service</span>
			</button>

			<Modal size='lg' isOpen={open} onClose={() => setOpen(false)}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						<h1 className='uppercase text-[18px] font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r mx-auto from-primary to-secondary'>
							Other Service Update
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

export default CreateOtherService;
