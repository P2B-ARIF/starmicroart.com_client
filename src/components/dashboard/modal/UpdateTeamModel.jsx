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
import { doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
	FaApple,
	FaDiscord,
	FaFacebook,
	FaFileImage,
	FaInstagram,
	FaLinkedin,
	FaMeetup,
	FaPinterest,
	FaSnapchat,
	FaTelegram,
	FaTiktok,
	FaTwitter,
	FaWhatsapp,
	FaYoutube,
} from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineCleaningServices } from "react-icons/md";
import uniqid from "uniqid";
import { db } from "../../../config/firebase";
import { imageUpload } from "../../../lib/create";
import { resizeAndUploadImage } from "../../../lib/update";
import no_photo from "./../../../assets/images/no_photo2.jpg";
import { IoIosClose } from "react-icons/io";

const UpdateTeamModel = ({ updateTeam }) => {
	// console.log(updateTeam, "updateteam");

	const [isOpen, setIsOpen] = useState(false);
	// const [name, setName] = useState("");
	// const [role, setRole] = useState("");
	// const [imgUrl, setImgUrl] = useState(
	// 	"https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?cs=srgb&dl=pexels-soldiervip-1391498.jpg&fm=jpg",
	// );
	const [image, setImage] = useState(null);
	// const [social, setSocial] = useState([]);
	const [selectIcon, setSelectIcon] = useState(null);
	const [link, setLink] = useState("");
	const [loading, setLoading] = useState(false);

	const [teamMember, setTeamMember] = useState({});

	// name: "testing",
	// role: "testing",
	// imgUrl:
	// 	"https://firebasestorage.googleapis.com/v0/b/starmicroart-test.appspot.com/o/images%2F3d2c59598af?alt=media&token=2d194660-8623-4cad-81a8-4ce9637aba10",
	// social: [
	// 	{
	// 		icon: "FaInstagram",
	// 		link: "interster",
	// 	},
	// 	{
	// 		icon: "FaPinterest",
	// 		link: "pipn",
	// 	},
	// ],

	useEffect(() => {
		setTeamMember(updateTeam.value);
	}, [updateTeam]);

	const iconMap = {
		FaFacebook: <FaFacebook size={20} />,
		FaTwitter: <FaTwitter size={20} />,
		FaInstagram: <FaInstagram size={20} />,
		FaLinkedin: <FaLinkedin size={20} />,
		FaYoutube: <FaYoutube size={20} />,
		FaPinterest: <FaPinterest size={20} />,
		FaWhatsapp: <FaWhatsapp size={20} />,
		FaSnapchat: <FaSnapchat size={20} />,
		FaTelegram: <FaTelegram size={20} />,
		FaTiktok: <FaTiktok size={20} />,
		FaDiscord: <FaDiscord size={20} />,
		FaApple: <FaApple size={20} />,
		FaMeetup: <FaMeetup size={20} />,
	};

	const handleAddSocialLink = () => {
		if (!selectIcon || !link) {
			toast.error("Please select icon and link");
			return;
		}

		const newSocial = { icon: selectIcon, link };
		// setSocial([...social, newSocial]);
		setTeamMember({
			...teamMember,
			social: [...teamMember?.social, newSocial],
		});

		// console.log({ teamMember, newSocial });

		setSelectIcon(null);
		setLink("");
	};

	const handleRemoveSocialLink = icon => {
		const newS = teamMember.social.filter(s => s.icon !== icon);
		setTeamMember({
			...teamMember,
			social: newS,
		});
	};

	const handleUpdate = async () => {
		setLoading(true);
		try {
			if (image) {
				const resizedImage = await resizeAndUploadImage(image, 800, 800, 80);
				const url = await imageUpload("images", resizedImage);
				const controllerTeam = doc(db, "starmicroart", "controller");

				await updateDoc(controllerTeam, {
					[`team.${updateTeam.key}`]: { ...teamMember, imgUrl: url },
				});
				console.log("Update Team Member successfully.");

				setIsOpen(false);
				setLoading(false);
			} else {
				const controllerTeam = doc(db, "starmicroart", "controller");

				await updateDoc(controllerTeam, {
					[`team.${updateTeam.key}`]: teamMember,
				});
				console.log("Update Team Member successfully.");
				setIsOpen(false);
				setLoading(false);
			}
		} catch (error) {
			setLoading(false);
		}
		setLoading(false);
	};

	return (
		<>
			<Button
				onClick={() => setIsOpen(true)}
				size={"xs"}
				colorScheme='purple'
				marginTop={2}
			>
				<span className='font-normal'>Edit</span>
			</Button>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						<h1 className='uppercase text-[18px] font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r mx-auto justify-center inline-block from-primary to-secondary'>
							Edit Team Member
						</h1>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl mb={4} mt={4}>
							<FormLabel>Name</FormLabel>
							<Input
								defaultValue={teamMember?.name}
								onChange={e =>
									setTeamMember({ ...teamMember, name: e.target.value })
								}
								placeholder='Enter name'
							/>
						</FormControl>
						<FormControl mb={4}>
							<FormLabel>Role</FormLabel>
							{/* <Input value={role} onChange={e => setRole(e.target.value)} /> */}
							<Input
								defaultValue={teamMember?.role}
								onChange={e =>
									setTeamMember({ ...teamMember, role: e.target.value })
								}
								placeholder='Enter role'
							/>
						</FormControl>

						<div className='flex items-center justify-between my-5 mx-2'>
							{Object.entries(iconMap).map(([iconName, iconComponent]) => (
								<button
									className={`${
										selectIcon === iconName ? "text-gray-800" : "text-gray-500"
									} ${
										teamMember?.social?.some(s => s.icon === iconName) &&
										"text-green-600"
									}`}
									onClick={() => setSelectIcon(iconName)}
									key={iconName}
								>
									{iconComponent}
								</button>
							))}
						</div>
						<div className='flex items-center mb-2 gap-5'>
							<Input
								size={"md"}
								type='text'
								className='w-full'
								placeholder='Enter your social link'
								value={link}
								onChange={e => setLink(e.target.value)}
							/>
							<Button
								onClick={handleAddSocialLink}
								colorScheme='green'
								size={"md"}
								paddingX={5}
							>
								<span className='text-sm'>ADD LINK</span>
							</Button>
						</div>

						<div className='my-3 overflow-hidden'>
							{teamMember?.social?.map(({ icon, link }, idx) => (
								<div key={idx} className='flex items-center mb-1'>
									<IconButton
										colorScheme='red'
										aria-label='Call Segun'
										// variant='outline'
										size='xs'
										marginRight={2}
										onClick={() => handleRemoveSocialLink(icon)}
										icon={<IoIosClose size={22} />}
									/>

									{/* <h4 className='w-[20px]'>
										<IoIosClose size={20} />
									</h4> */}
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
							src={
								image
									? URL.createObjectURL(image)
									: teamMember?.imgUrl
									? teamMember?.imgUrl
									: no_photo
							}
							alt='no photo image'
							className='w-full h-[240px] object-cover overflow-hidden rounded-lg'
						/>
						<div className='mt-2 flex items-center'>
							<Button
								size={"sm"}
								colorScheme='red'
								mr={2}
								onClick={() => setIsOpen(false)}
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
								className='hidden'
								onChange={e => setImage(e.target.files[0])}
							/>
						</div>
					</ModalBody>
					<Divider />
					<ModalFooter>
						<Button
							isLoading={loading}
							isDisabled={loading}
							size={"sm"}
							colorScheme='green'
							onClick={handleUpdate}
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

export default UpdateTeamModel;

// const resizedImage = await resizeAndUploadImage(image, 800, 800, 80);
// 			const url = await imageUpload("images", resizedImage);
// 			if (!url) {
// 				toast.error("Something went wrong..");
// 				setLoading(false);
// 				return;
// 			}
// 			// const member = { name, role, imgUrl: url, social };
// 			// console.log(member, "member...");

// 			const controllerTeam = doc(db, "starmicroart", "controller");

// 			await updateDoc(controllerTeam, {
// 				// [`team.${id}`]: member,
// 				[`team.lzv45lgn`]: teamMember,
// 			});
// 			console.log("Update Team Member successfully.");

// 			setLoading(false);
