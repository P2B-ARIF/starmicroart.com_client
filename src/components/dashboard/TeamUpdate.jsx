import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
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
import h2 from "./../../assets/images/h2.jpg";
import AddTeamMemberModal from "./modal/AddTeamMemberModal";
import UpdateTeamModel from "./modal/UpdateTeamModel";
import toast from "react-hot-toast";
import { deleteField, doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import no_photo from "./../../assets/images/no_photo2.jpg";
import { IoIosClose } from "react-icons/io";

const TeamUpdate = ({ team }) => {
	// console.log(team);
	const [loading, setLoading] = useState(false);

	// const teamMembers = [
	// 	{
	// 		image: "https://via.placeholder.com/150", // Replace with actual image URL
	// 		name: "John Doe",
	// 		role: "Team Leader",
	// 		social: {
	// 			facebook: <FaFacebook />,
	// 			instagram: <FaInstagram />,
	// 		},
	// 	},
	// 	{
	// 		image: "https://via.placeholder.com/150", // Replace with actual image URL
	// 		name: "Jane Smith",
	// 		role: "Developer",
	// 		social: {
	// 			facebook: <FaFacebook />,
	// 			instagram: <FaInstagram />,
	// 		},
	// 	},
	// 	{
	// 		image: "https://via.placeholder.com/150", // Replace with actual image URL
	// 		name: "Sam Brown",
	// 		role: "Designer",
	// 		social: {
	// 			facebook: <FaFacebook />,
	// 			instagram: <FaInstagram />,
	// 		},
	// 	},
	// 	{
	// 		image: "https://via.placeholder.com/150", // Replace with actual image URL
	// 		name: "Lisa White",
	// 		role: "Marketing",
	// 		social: {
	// 			facebook: <FaFacebook />,
	// 			instagram: <FaInstagram />,
	// 		},
	// 	},
	// ];

	const faIcons = [
		"FaFacebook",
		"FaTwitter",
		"FaInstagram",
		"FaLinkedin",
		"FaYoutube",
		"FaPinterest",
		"FaWhatsapp",
		"FaSnapchat",
		"FaTelegram",
		"FaTiktok",
		"FaDiscord",
		"FaApple",
		"FaMeetup",
	];

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

	const handleDelete = async key => {
		setLoading(true);
		try {
			const controllerTeam = doc(db, "starmicroart", "controller");

			await updateDoc(controllerTeam, {
				[`team.${key}`]: deleteField(),
			});

			toast.success("Team Member successfully deleted.");
			console.log("Deleted team member successfully.");
		} catch (error) {
			console.error("Error deleting team member:", error);
			toast.error("Failed to delete the team member.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<div className='font-semibold mb-2 text-lg text-black_c flex items-center gap-2'>
				<span>Our Team</span>
				<AddTeamMemberModal faIcons={faIcons} iconMap={iconMap}/>
			</div>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 md:gap-3'>
				{Object.entries(team)?.map(([key, value]) => (
					<div
						key={key}
						className='grid grid-cols-5 border rounded-lg overflow-hidden'
					>
						<div className='col-span-2 w-full h-[130px] overflow-hidden mx-auto'>
							<img
								src={value.imgUrl || no_photo}
								alt={`${value.name}`}
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='col-span-3 w-full p-2 py-1'>
							<h3 className='text-primary text-lg font-medium'>{value.name}</h3>
							<p className='font-light'>{value.role}</p>
							<div className='flex items-center gap-2 mx-auto mt-1 text-xl text-black_c/70'>
								{value.social?.map((s, i) => (
									<a
										key={i}
										href={s.links}
										target='_blank'
										rel='noopener noreferrer'
										className='cursor-pointer hover:text-green-500'
									>
										{iconMap[s.icon]}
									</a>
								))}
							</div>

							<div className='flex gap-1'>
								{/* <Button size={"xs"} colorScheme='purple' mt={2}>
									<span className='font-normal'>Edit</span>
								</Button> */}
								<UpdateTeamModel updateTeam={{ key, value }} />
								<Button
									isLoading={loading}
									isDisabled={loading}
									onClick={() => handleDelete(key)}
									size={"xs"}
									colorScheme='red'
									mt={2}
								>
									<span className='font-normal'>Delete</span>
								</Button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TeamUpdate;
