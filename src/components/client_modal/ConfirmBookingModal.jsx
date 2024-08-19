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
import React, { useContext, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";
import { doc, updateDoc } from "firebase/firestore";
import uniqid from "uniqid";
import { db } from "../../config/firebase";
import { AuthContext } from "../../context/AuthContext";
import { format } from "date-fns";

const ConfirmBookingModal = ({ cart }) => {
	const [open, setOpen] = useState(false);
	const [billingAddress, setBillingAddress] = useState({
		fullName: "",
		address: "",
		city: "",
		state: "",
		postalCode: "",
		country: "",
		email: "",
		phone: "",
	});
	const [loading, setLoading] = useState(false);
	const { user } = useContext(AuthContext);

	useEffect(() => {
		const fetchLocation = async () => {
			try {
				const response = await fetch(
					"https://ipinfo.io/json?token=36f6c373115ac6",
				);
				const data = await response.json();
				if (data.country && data.region) {
					setBillingAddress(prev => ({
						...prev,
						country: data.country,
						state: data.region,
						city: data.city,
					}));
				}
			} catch (error) {
				console.error("Error fetching location: ", error);
			}
		};

		if (user?.email) {
			setBillingAddress(prev => ({ ...prev, email: user.email }));
		}

		fetchLocation();
	}, [user]);

	const handleInputChange = e => {
		const { name, value } = e.target;
		setBillingAddress(prev => ({ ...prev, [name]: value }));
	};

	const handleConfirmBooking = async () => {
		const requiredFields = [
			"fullName",
			"address",
			"city",
			"state",
			"postalCode",
			"country",
		];
		for (const field of requiredFields) {
			if (!billingAddress[field]) {
				return alert(
					`Please enter a ${field.replace(/([A-Z])/g, " $1").toLowerCase()}`,
				);
			}
		}

		setLoading(true);
		const id = uniqid.time();

		try {
			const bookingRef = doc(db, "starmicroart", "bookings");
			await updateDoc(bookingRef, {
				[id]: {
					cart,
					billingAddress,
					appointmentDate: format(new Date(), "MM/dd/yyyy"),
				},
			});

			toast.success("Successfully added service with billing address");
			localStorage.removeItem("cart");
			setOpen(false);
			window.location.reload();
		} catch (error) {
			console.log("Error adding document: ", error.message);
			toast.error("Failed to confirm booking");
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<button
				onClick={() => setOpen(true)}
				className='w-full rounded-lg bg-gradient-to-r from-primary to-secondary text-white py-2 px-10 text-sm font-medium hover:from-white hover:to-white transition-all duration-200 ease-linear border-2 border-transparent hover:border-primary hover:text-primary'
			>
				Proceed to Confirm
			</button>

			<Modal size='lg' isOpen={open} onClose={() => setOpen(false)}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						<h1 className='uppercase text-[18px] font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
							Create Appointment
						</h1>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl mb={3}>
							<FormLabel>Full Name</FormLabel>
							<Input
								name='fullName'
								value={billingAddress.fullName}
								placeholder='Enter full name'
								onChange={handleInputChange}
							/>
						</FormControl>

						<FormControl mb={3}>
							<FormLabel>Phone</FormLabel>
							<Input
								name='phone'
								value={billingAddress.phone}
								placeholder='Enter phone number'
								onChange={handleInputChange}
							/>
						</FormControl>

						<FormControl mb={3}>
							<FormLabel>Email</FormLabel>
							<Input
								name='email'
								value={billingAddress.email}
								placeholder='Enter email address'
								onChange={handleInputChange}
							/>
						</FormControl>

						<FormControl mb={3}>
							<FormLabel>Address</FormLabel>
							<Input
								name='address'
								value={billingAddress.address}
								placeholder='Enter your address'
								onChange={handleInputChange}
							/>
						</FormControl>

						<div className='flex gap-5'>
							<FormControl mb={3}>
								<FormLabel>City</FormLabel>
								<Input
									name='city'
									value={billingAddress.city}
									placeholder='City'
									onChange={handleInputChange}
								/>
							</FormControl>

							<FormControl mb={3}>
								<FormLabel>State</FormLabel>
								<Input
									name='state'
									value={billingAddress.state}
									placeholder='State'
									onChange={handleInputChange}
								/>
							</FormControl>
						</div>

						<div className='flex gap-5'>
							<FormControl mb={3}>
								<FormLabel>Postal Code</FormLabel>
								<Input
									name='postalCode'
									value={billingAddress.postalCode}
									placeholder='Postal code'
									onChange={handleInputChange}
								/>
							</FormControl>

							<FormControl mb={3}>
								<FormLabel>Country</FormLabel>
								<Input
									name='country'
									value={billingAddress.country}
									placeholder='Country'
									onChange={handleInputChange}
								/>
							</FormControl>
						</div>
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
							onClick={handleConfirmBooking}
						>
							<FaCheck size={16} />
							<span className='font-normal ml-2'>Confirm Appointment</span>
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ConfirmBookingModal;
