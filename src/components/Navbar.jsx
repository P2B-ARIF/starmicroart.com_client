import React, { useContext, useEffect, useState } from "react";
import { CiLocationOn, CiTwitter } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaRegCalendarAlt } from "react-icons/fa";
import { IoCallOutline, IoCartOutline, IoCloseOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Navbar = ({ user }) => {
	const [show, setShow] = useState(false);
	const { signOutUser } = useContext(AuthContext);

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
		// { path: "/cart", name: "Cart" },
		// { path: "/booking", name: "Booking" },
		// { path: "/account", name: "Account" },
		// { path: "/login", name: "Login" },
		// { path: "/register", name: "Register" },
	];

	return (
		<header>
			<div className='w-full absolute top-0 z-[4]'>
				<div className='hidden md:block bg-white border-b'>
					<div className='container mx-auto flex flex-wrap gap-3 items-center justify-center lg:justify-between py-1.5 text-sm'>
						<h3 className='flex items-center gap-2'>
							<CiLocationOn size={18} className='text-primary' />
							5751-D Fishers Ln Rockville, MD. 20852
						</h3>
						<h3 className='flex items-center gap-2'>
							<FaRegCalendarAlt size={18} className='text-primary' />
							Mon-Sat: 10AM - 6PM, Sat: 9AM - 4PM
						</h3>
						<h3 className='flex items-center gap-2'>
							<IoCallOutline size={18} className='text-primary' />
							240-605-0832
						</h3>
						<div className='flex items-center gap-1'>
							<a href='https://www.facebook.com/starmicroart' target='_blank'>
								<FaFacebookF
									size={18}
									className='text-primary flex items-center justify-center w-8 h-8 p-1.5 hover:border border-primary rounded-full'
								/>
							</a>
							<a href='https://www.youtube.com/@SMPbyRichie' target='_blank'>
								<FaYoutube
									size={18}
									className='text-primary flex items-center justify-center w-8 h-8 p-1.5 hover:border border-primary rounded-full'
								/>
							</a>
							<a
								href='https://www.linkedin.com/SMPbyRichie?_l=en_US'
								target='_blank'
							>
								<FaLinkedin
									size={18}
									className='text-primary flex items-center justify-center w-8 h-8 p-1.5 hover:border border-primary rounded-full'
								/>
							</a>
							<a href='https://www.instagram.com/edwinstarsmp/' target='_blank'>
								<FaInstagram
									size={18}
									className='text-primary flex items-center justify-center w-8 h-8 p-1.5 hover:border border-primary rounded-full'
								/>
							</a>
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

					<div className='hidden md:flex w-full items-center justify-end gap-5 lg:gap-10 text-lg font-light py-5'>
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
								{/* {navList?.name === "Cart" && <IoCartOutline size={20} />}
								{navList?.name === "Account" && <RxAvatar size={20} />} */}
							</Link>
						))}

						{user ? (
							<>
								<Link
									to='/cart'
									className={`text-lg font-light relative flex items-center gap-1 whitespace-nowrap before:w-[0%] before:content-[''] before:absolute before:bottom-0 hover:before:w-[60%] before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:ease-in-out `}
								>
									Cart <IoCartOutline size={20} />
								</Link>

								<Link
									to='/account'
									className={`text-lg font-light relative flex items-center gap-1 whitespace-nowrap hover:before:w-[60%] before:w-[0%] before:content-[''] before:absolute before:bottom-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:ease-in-out `}
								>
									Account <RxAvatar size={20} />
								</Link>

								<button
									onClick={() => {
										signOutUser();
										window.location.reload();
									}}
									className={`text-lg font-light relative text-red-500 flex items-center gap-1 whitespace-nowrap hover:before:w-[60%] before:w-[0%] before:content-[''] before:absolute before:bottom-0 before:h-[2px] before:bg-red-500 before:transition-all before:duration-300 before:ease-in-out `}
								>
									Log Out <MdLogout size={20} />
								</button>
							</>
						) : (
							<>
								<Link
									to={"/login"}
									className={`relative flex items-center gap-1 whitespace-nowrap before:w-[0%] before:content-[''] before:absolute before:bottom-0 hover:before:w-[60%] before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:ease-in-out `}
								>
									Login
								</Link>
								<Link
									to={"/register"}
									className={`relative flex items-center gap-1 whitespace-nowrap before:w-[0%] before:content-[''] before:absolute before:bottom-0 hover:before:w-[60%] before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:ease-in-out `}
								>
									Register
								</Link>
							</>
						)}
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
									<a
										href='https://www.facebook.com/starmicroart'
										target='_blank'
									>
										<FaFacebookF
											size={18}
											className='text-primary flex items-center justify-center w-8 h-8 p-1.5 hover:border border-primary rounded-full'
										/>
									</a>
									<a
										href='https://www.youtube.com/@SMPbyRichie'
										target='_blank'
									>
										<FaYoutube
											size={18}
											className='text-primary flex items-center justify-center w-8 h-8 p-1.5 hover:border border-primary rounded-full'
										/>
									</a>
									<a
										href='https://www.linkedin.com/SMPbyRichie?_l=en_US'
										target='_blank'
									>
										<FaLinkedin
											size={18}
											className='text-primary flex items-center justify-center w-8 h-8 p-1.5 hover:border border-primary rounded-full'
										/>
									</a>
									<a
										href='https://www.instagram.com/edwinstarsmp/'
										target='_blank'
									>
										<FaInstagram
											size={18}
											className='text-primary flex items-center justify-center w-8 h-8 p-1.5 hover:border border-primary rounded-full'
										/>
									</a>
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
