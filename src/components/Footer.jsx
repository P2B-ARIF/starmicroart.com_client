import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
	const navLists = [
		{ name: "Home", url: "/" },
		{ name: "Service", url: "/service" },
		{ name: "Contact", url: "/contact" },
		{ name: "About", url: "/about" },
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
					<a href='https://www.facebook.com/starmicroart' target='_blank'>
						<FaFacebookF
							size={18}
							// className='text-primary flex items-center justify-center w-8 h-8 p-1.5 hover:border border-primary rounded-full'
							className='text-primary ring-[1px] rounded-full w-[35px] h-[35px] p-2 ring-primary'
						/>
					</a>
					<a href='https://www.youtube.com/@SMPbyRichie' target='_blank'>
						<FaYoutube
							size={18}
							// className='text-primary flex items-center justify-center w-8 h-8 p-1.5 hover:border border-primary rounded-full'
							className='text-primary ring-[1px] rounded-full w-[35px] h-[35px] p-2 ring-primary'
						/>
					</a>
					<a
						href='https://www.linkedin.com/SMPbyRichie?_l=en_US'
						target='_blank'
					>
						<FaLinkedin
							size={18}
							// className='text-primary flex items-center justify-center w-8 h-8 p-1.5 hover:border border-primary rounded-full'
							className='text-primary ring-[1px] rounded-full w-[35px] h-[35px] p-2 ring-primary'
						/>
					</a>
					<a href='https://www.instagram.com/edwinstarsmp/' target='_blank'>
						<FaInstagram
							size={18}
							className='text-primary ring-[1px] rounded-full w-[35px] h-[35px] p-2 ring-primary'
							// className='text-primary flex items-center justify-center w-8 h-8 p-1.5 hover:border border-primary rounded-full'
						/>
					</a>
				</div>
				<p className='max-sm:text-sm text-white/60'>
					&copy; 2023 starmicroart.com. All rights reserved.
				</p>
			</div>
		</div>
	);
};

// className='text-primary ring-[1px] rounded-full w-[35px] h-[35px] p-2 ring-primary'
export default Footer;
