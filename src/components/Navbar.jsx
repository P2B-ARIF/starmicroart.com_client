import React, { useEffect, useState } from "react";
import { CiLocationOn, CiTwitter } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaRegCalendarAlt } from "react-icons/fa";
import { IoCallOutline, IoCartOutline, IoCloseOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			if (show) {
				document.body.style.overflow = "hidden";
			} else {
				document.body.style.overflow = "auto";
			}
			return () => {
				document.body.style.overflow = "auto";
			};
		}, 200);
	}, [show]);

	const navLists = [
		{ path: "/", name: "Home" },
		{ path: "/about", name: "About Us" },
		{ path: "/contact", name: "Contact Us" },
		{ path: "/service", name: "Service" },
		{ path: "/cart", name: "Cart" },
		// { path: "/booking", name: "Booking" },
		// { path: "/account", name: "Account" },
		{ path: "/login", name: "Login" },
		// { path: "/register", name: "Register" },
	];

	return (
		<header>
			<div className='w-full absolute top-0 z-[4]'>
				<div className='hidden md:block bg-white border-b'>
					<div className='container mx-auto flex flex-wrap gap-3 items-center justify-center lg:justify-between py-1.5 text-sm'>
						<h3 className='flex items-center gap-2'>
							<CiLocationOn size={18} className='text-primary' />
							2130 Fulton Street, San Diego, CA 94117-1080
						</h3>
						<h3 className='flex items-center gap-2'>
							<FaRegCalendarAlt size={18} className='text-primary' />
							Mon-Sat: 9AM - 8PM, Sun: 11:AM - 5PM
						</h3>
						<h3 className='flex items-center gap-2'>
							<IoCallOutline size={18} className='text-primary' />
							1-800-1234-456
						</h3>
						<div className='flex items-center gap-1'>
							<FaFacebookF
								size={18}
								className='text-primary flex items-center justify-center w-8 h-8 p-1.5 hover:border border-primary rounded-full'
							/>
							<CiTwitter
								size={18}
								className='text-primary flex items-center justify-center w-8 h-8 p-1.5 hover:border border-primary rounded-full'
							/>
							<FaInstagram
								size={18}
								className='text-primary flex items-center justify-center w-8 h-8 p-1.5 hover:border border-primary rounded-full'
							/>
						</div>
					</div>
				</div>
				<nav
					className={`flex items-center justify-between container mx-auto mt-3 px-5 md:px-0 ${
						window?.location?.pathname == "/" && "text-white"
					}`}
				>
					<div className='flex items-center justify-between w-full'>
						<h5 className='text-2xl font-lato font-extrabold'>Logo Here</h5>
						<div className='md:hidden'>
							{!show && (
								<LuMenu
									size={26}
									onClick={() => setShow(true)}
									cursor={"pointer"}
								/>
							)}
						</div>
					</div>

					<div className='hidden md:flex w-full items-center justify-end gap-10 text-lg font-light py-5'>
						{navLists?.map(navList => (
							<Link
								key={navList?.path}
								to={navList?.path}
								className={`relative flex items-center gap-1 whitespace-nowrap ${
									window?.location?.pathname === navList?.path
										? "font-normal before:w-[100%]"
										: "hover:before:w-[100%] before:w-[0%]"
								} before:content-[''] before:absolute before:bottom-0 hover:before:w-[60%] before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:ease-in-out `}
							>
								{navList?.name}
								{navList?.name === "Cart" && <IoCartOutline size={20} />}
								{navList?.name === "Account" && <RxAvatar size={20} />}
							</Link>
						))}
					</div>
				</nav>

				<nav
					className={`md:hidden text-black px-5 fixed top-0 bg-white min-h-screen w-full transition-all duration-200 ease-linear ${
						!show ? "-translate-x-full" : "translate-x-0"
					}`}
				>
					<div className='container mx-auto flex flex-col items-center justify-between py-5'>
						<div className='flex items-center justify-between w-full'>
							<h5 className='text-2xl font-lato font-extrabold'>Logo Here</h5>
							{show && (
								<IoCloseOutline
									size={30}
									onClick={() => setShow(false)}
									cursor={"pointer"}
								/>
							)}
						</div>

						<div className='flex flex-col items-center gap-8 text-lg font-light py-5 mt-10'>
							{navLists?.map(navList => (
								<Link
									onClick={() => setShow(false)}
									key={navList?.path}
									to={navList?.path}
									className={`relative flex items-center gap-1 whitespace-nowrap ${
										window?.location?.pathname === navList?.path
											? "font-normal before:w-[100%]"
											: "hover:before:w-[100%] before:w-[0%]"
									} before:content-[''] before:absolute before:bottom-0 hover:before:w-[60%] before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:ease-in-out `}
								>
									{navList?.name}
									{navList?.name === "Cart" && <IoCartOutline size={20} />}
									{navList?.name === "Account" && <RxAvatar size={20} />}
								</Link>
							))}

							<div className='container mx-auto flex flex-col gap-4 items-center justify-between py-3 text-sm'>
								<h3 className='flex items-center gap-2'>
									<CiLocationOn size={18} className='text-primary' />
									2130 Fulton Street, San Diego, CA 94117-1080
								</h3>
								<h3 className='flex items-center gap-2'>
									<FaRegCalendarAlt size={18} className='text-primary' />
									Mon-Sat: 9AM - 8PM, Sun: 11:AM - 5PM
								</h3>
								<h3 className='flex items-center gap-2'>
									<IoCallOutline size={18} className='text-primary' />
									1-800-1234-456
								</h3>
								<div className='flex items-center gap-3'>
									<FaFacebookF
										size={18}
										className='text-primary flex items-center justify-center w-8 h-8 p-1.5 hover:border border-primary rounded-full'
									/>
									<CiTwitter
										size={18}
										className='text-primary flex items-center justify-center w-8 h-8 p-1.5 hover:border border-primary rounded-full'
									/>
									<FaInstagram
										size={18}
										className='text-primary flex items-center justify-center w-8 h-8 p-1.5 hover:border border-primary rounded-full'
									/>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
