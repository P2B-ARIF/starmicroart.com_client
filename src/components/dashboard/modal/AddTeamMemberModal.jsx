import {
	Button,
	Divider,
	FormControl,
	FormLabel,
	IconButton,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaFileImage, FaCheck } from "react-icons/fa";
import { MdOutlineCleaningServices } from "react-icons/md";
import no_photo from "./../../../assets/images/no_photo2.jpg";
import { IoIosAddCircle, IoIosClose } from "react-icons/io";
import toast from "react-hot-toast";
import { resizeAndUploadImage } from "../../../lib/update";
import { imageUpload } from "../../../lib/create";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import uniqid from "uniqid";
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaLinkedin,
	FaYoutube,
	FaPinterest,
	FaWhatsapp,
	FaSnapchat,
	FaTelegram,
	FaTiktok,
	FaDiscord,
	FaApple,
	FaMeetup,
} from "react-icons/fa";

const AddTeamMemberModal = ({ faIcons, iconMap }) => {
	const [open, setOpen] = useState(false);
	const [createTeam, setCreateTeam] = useState({
		name: "",
		role: "",
		social: [],
	});
	const [image, setImage] = useState(null);
	const [selectIcon, setSelectIcon] = useState(null);
	const [link, setLink] = useState("");
	const [loading, setLoading] = useState(false);

	const handleAddSocialLink = () => {
		if (!selectIcon || !link) {
			toast.error("Please select an icon and provide a link.");
			return;
		}

		const newSocial = { icon: selectIcon, link };
		setCreateTeam(prevState => ({
			...prevState,
			social: [...prevState.social, newSocial],
		}));

		setSelectIcon(null);
		setLink("");
	};

	const handleRemoveSocialLink = icon => {
		setCreateTeam(prevState => ({
			...prevState,
			social: prevState.social.filter(s => s.icon !== icon),
		}));
	};

	const handleAdd = async () => {
		setLoading(true);

		if (!image) {
			toast.error("Please upload an image.");
			setLoading(false);
			return;
		}

		if (!createTeam.name || !createTeam.role || !createTeam.social.length) {
			toast.error("Please fill in all fields.");
			setLoading(false);
			return;
		}

		try {
			const resizedImage = await resizeAndUploadImage(image, 800, 800, 80);
			const url = await imageUpload("images", resizedImage);

			if (!url) {
				toast.error("Something went wrong with the image upload.");
				setLoading(false);
				return;
			}

			const member = { ...createTeam, imgUrl: url };
			const id = uniqid.time();
			const controllerTeam = doc(db, "starmicroart", "controller");

			await updateDoc(controllerTeam, {
				[`team.${id}`]: member,
			});

			toast.success("New team member added successfully.");
			setCreateTeam({ name: "", role: "", social: [] });
			setImage(null);
			setOpen(false);
		} catch (error) {
			toast.error("Failed to add the team member.");
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Button onClick={() => setOpen(true)} size='xs' colorScheme='green'>
				<IoIosAddCircle size={16} className='mr-2' />
				<span className='font-normal'>ADD MEMBER</span>
			</Button>
			<Modal isOpen={open} onClose={() => setOpen(false)}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						<h1 className='uppercase text-[18px] font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r mx-auto justify-center inline-block from-primary to-secondary'>
							Add Team Member
						</h1>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl mb={2} mt={1}>
							<FormLabel>Name</FormLabel>
							<Input
								placeholder='Enter name'
								value={createTeam.name}
								onChange={e =>
									setCreateTeam({ ...createTeam, name: e.target.value })
								}
							/>
						</FormControl>
						<FormControl mb={2}>
							<FormLabel>Role</FormLabel>
							<Input
								placeholder='Enter role'
								value={createTeam.role}
								onChange={e =>
									setCreateTeam({ ...createTeam, role: e.target.value })
								}
							/>
						</FormControl>

						<div className='flex items-center justify-between my-5 mx-2'>
							{Object.entries(iconMap)?.map(([iconName, iconComponent]) => (
								<button
									key={iconName}
									className={`${
										selectIcon === iconName ? "text-gray-800" : "text-gray-500"
									} ${
										createTeam?.social?.some(s => s.icon === iconName) &&
										"text-green-600"
									}`}
									onClick={() => setSelectIcon(iconName)}
								>
									{iconComponent}
								</button>
							))}
						</div>

						<div className='flex items-center mb-2 gap-5'>
							<Input
								size='md'
								type='text'
								className='w-full'
								placeholder='Enter your social link'
								value={link}
								onChange={e => setLink(e.target.value)}
							/>
							<Button
								onClick={handleAddSocialLink}
								isDisabled={!link}
								colorScheme='green'
								size='md'
								paddingX={5}
							>
								<span className='text-sm'>ADD LINK</span>
							</Button>
						</div>

						<div className='my-3 ml-2'>
							{createTeam?.social?.map(({ icon, link }, idx) => (
								<div key={idx} className='flex items-center mb-1'>
									<IconButton
										colorScheme='red'
										aria-label='Remove'
										size='xs'
										marginRight={2}
										onClick={() => handleRemoveSocialLink(icon)}
										icon={<IoIosClose size={22} />}
									/>
									<span>{iconMap[icon]}</span>
									<a
										href={link}
										target='_blank'
										rel='noopener noreferrer'
										className='ml-2'
									>
										{link}
									</a>
								</div>
							))}
						</div>

						<img
							src={image ? URL.createObjectURL(image) : no_photo}
							alt='Preview'
							className='w-full h-[240px] object-cover overflow-hidden rounded-lg'
						/>
						<div className='mt-2 flex items-center'>
							<Button
								size='sm'
								colorScheme='red'
								mr={2}
								onClick={() => {
									setImage(null);
									setCreateTeam({ name: "", role: "", social: [] });
								}}
							>
								<MdOutlineCleaningServices size={16} />
								<span className='font-normal ml-1'>Clear</span>
							</Button>
							<label
								htmlFor='image'
								className='flex items-center cursor-pointer bg-blue-500 hover:bg-transparent border hover:border-blue-600 hover:text-blue-500 text-white px-3 rounded-md py-1'
							>
								<FaFileImage size={16} />
								<span className='font-normal ml-1'>Choose</span>
							</label>
							<input
								id='image'
								type='file'
								className='hidden'
								accept='image/jpeg, image/png'
								onChange={e => setImage(e.target.files[0])}
							/>
						</div>
					</ModalBody>
					<Divider />
					<ModalFooter>
						<Button
							isLoading={loading}
							isDisabled={loading}
							size='sm'
							colorScheme='green'
							onClick={handleAdd}
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

export default AddTeamMemberModal;
