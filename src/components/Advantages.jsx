import React from "react";
import { FaDroplet } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { IoLeaf } from "react-icons/io5";
import h4 from "./../assets/images/h4.jpg";

const Advantages = () => {
	const advantages = [
		{
			icon: IoLeaf,
			title: "Ecological Cosmetics",
			description:
				"Using only natural and eco-friendly components for cosmetics",
		},
		{
			icon: FaDroplet,
			title: "Author's Recipes",
			description:
				"Special unique receipes are the secret of our spa procedures.",
		},
		{
			icon: FaDroplet,
			title: "Ecological Cosmetics",
			description:
				"Special unique receipes are the secret of our spa procedures.",
		},
		{
			icon: IoIosPeople,
			title: "Author's Recipes",
			description:
				"Special unique receipes are the secret of our spa procedures.",
		},
	];

	return (
		<div
			className='bg-white_c py-16 bg-cover bg-center bg-fixed relative overflow-hidden z-[-1]'
			style={{ backgroundImage: `url(${h4})` }}
		>
			<div className='w-full h-full absolute top-0 left-0 bg-gradient-to-r from-white/[90%] via-black_c/[10%] to-transparent z-[1]' />

			<div className='text-center mb-8 space-y-4 md:space-y-5 w-full md:w-1/2 py-10 relative z-[2]'>
				<h2 className='text-3xl md:text-4xl mb-4 font-bold font-secondary text-primary'>
					Advantages
				</h2>
				<h3 className='text-2xl md:text-3xl mb-4'>Why People Choose Us</h3>
				<img
					src='https://ld-wp73.template-help.com/wordpress/prod_14770/v1/wp-content/uploads/2020/11/after-text.png'
					className='mx-auto'
					alt=''
				/>

				<div className='grid grid-cols-2 gap-5 gap-y-10 pt-14 px-5 md:px-20'>
					{advantages.map((advantage, i) => (
						<div data-aos='zoom-out-up' key={i} className='space-y-4'>
							<div className='bg-secondary h-[60px] md:h-[70px] w-[60px] md:w-[70px] flex items-center justify-center rounded-full mx-auto'>
								<advantage.icon className='text-3xl md:text-4xl mx-auto text-white' />
							</div>
							<h1 className='text-2xl font-medium md:font-semibold'>
								{advantage.title}
							</h1>
							<p className='font-light w-[80%] inline-block'>
								{advantage.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Advantages;
