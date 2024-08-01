import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import h2 from "./../../assets/images/h2.jpg";
import { Button } from "@chakra-ui/react";

const TeamUpdate = () => {
	const teamMembers = [
		{
			image: "https://via.placeholder.com/150", // Replace with actual image URL
			name: "John Doe",
			role: "Team Leader",
			social: {
				facebook: <FaFacebook />,
				instagram: <FaInstagram />,
			},
		},
		{
			image: "https://via.placeholder.com/150", // Replace with actual image URL
			name: "Jane Smith",
			role: "Developer",
			social: {
				facebook: <FaFacebook />,
				instagram: <FaInstagram />,
			},
		},
		{
			image: "https://via.placeholder.com/150", // Replace with actual image URL
			name: "Sam Brown",
			role: "Designer",
			social: {
				facebook: <FaFacebook />,
				instagram: <FaInstagram />,
			},
		},
		{
			image: "https://via.placeholder.com/150", // Replace with actual image URL
			name: "Lisa White",
			role: "Marketing",
			social: {
				facebook: <FaFacebook />,
				instagram: <FaInstagram />,
			},
		},
	];

	return (
		<div>
			<h3 className='font-semibold mb-2 text-lg text-black_c'>Team</h3>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 md:gap-3'>
				{teamMembers?.map((member, index) => (
					<div
						key={index}
						className='grid grid-cols-5 border rounded-lg overflow-hidden'
					>
						<div className='col-span-2 w-full h-[130px] overflow-hidden mx-auto'>
							<img
								src={h2}
								alt={`${member.name}`}
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='col-span-3 w-full p-2 py-1'>
							<h3 className='text-primary text-lg font-medium'>
								{member.name}
							</h3>
							<p className='font-light'>{member.role}</p>
							<div className='flex items-center gap-2 mx-auto mt-1 text-xl text-black_c/70'>
								<a
									href={`https://facebook.com/${member.name}`}
									target='_blank'
									rel='noopener noreferrer'
								>
									{member.social.facebook}
								</a>
								<a
									href={`https://instagram.com/${member.name}`}
									target='_blank'
									rel='noopener noreferrer'
								>
									{member.social.instagram}
								</a>
							</div>

                            <Button size={"xs"} colorScheme='purple' mt={2}>
								<span className='font-normal'>Edit</span>
							</Button>

						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TeamUpdate;
