import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const OurTeam = () => {
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
		<div className='container mx-auto my-20'>
			<div className='space-y-4 md:space-y-5'>
				<h3 className='text-center text-2xl md:text-3xl font-bold text-primary font-secondary'>
					Our Team
				</h3>
				<h1 className='text-center text-3xl md:text-4xl font-medium mt-2'>Specialists</h1>
				<img
					src='https://ld-wp73.template-help.com/wordpress/prod_14770/v1/wp-content/uploads/2020/11/after-text.png'
					className='mx-auto'
					alt=''
				/>
			</div>

			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 justify-center items-center text-center mt-16'>
				{teamMembers?.map((member, index) => (
					<div key={index} className='space-y-2'>
						<div className='rounded-full w-[150px] h-[150px] border-primary border overflow-hidden mx-auto'>
							<img
								src={member.image}
								alt={`${member.name}`}
								className='w-full h-full'
							/>
						</div>
						<h3 className='text-primary text-xl font-medium'>{member.name}</h3>
						<p className='font-light'>{member.role}</p>
						<div className='flex items-center gap-2 mx-auto justify-center text-xl text-black_c/70'>
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
					</div>
				))}
			</div>
		</div>
	);
};

export default OurTeam;
