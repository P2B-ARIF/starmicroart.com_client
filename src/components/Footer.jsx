import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
	const navLists = [
		{ name: "Home", url: "/" },
		{ name: "Service", url: "/" },
		{ name: "Contact", url: "/" },
		{ name: "About", url: "/" },
	];

	return (
		<div className='bg-black_c text-white_c/90 pb-0 mb-0'>
			<div className='container mx-auto p-4 py-10 text-center flex flex-col items-center space-y-5'>
				<h2 className='text-2xl md:text-3xl font-semibold md:font-bold'>
					starmicroart.com
				</h2>

				<div className='flex text-sm md:text-md gap-5 md:gap-8 uppercase text-white_c/50'>
					{navLists.map(nav => (
						<Link key={nav.name} to={nav.url}>
							{nav.name}
						</Link>
					))}
				</div>

				<div className='flex items-center gap-5'>
					<FaFacebook
						size={20}
						className='text-primary ring-[1px] rounded-full w-[35px] h-[35px] p-2 ring-primary'
					/>
					<FaInstagram
						size={20}
						className='text-primary ring-[1px] rounded-full w-[35px] h-[35px] p-2 ring-primary'
					/>
					<FaTwitter
						size={20}
						className='text-primary ring-[1px] rounded-full w-[35px] h-[35px] p-2 ring-primary'
					/>
				</div>
				<p className='max-sm:text-sm text-white/60'>
					&copy; 2023 starmicroart.com. All rights reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
