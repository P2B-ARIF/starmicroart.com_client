import React, { useState } from "react";
import { IoIosPeople } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaCircleDollarToSlot, FaMoneyCheckDollar } from "react-icons/fa6";
import { FaGears } from "react-icons/fa6";

const SideBar = () => {
	const [show, setShow] = useState(false);
	return (
		<div>
			<button
				onClick={() => setShow(!show)}
				// data-drawer-target='default-sidebar'
				// data-drawer-toggle='default-sidebar'
				aria-controls='default-sidebar'
				type='button'
				className='inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
			>
				<span className='sr-only'>Open sidebar</span>
				<svg
					className='w-6 h-6'
					aria-hidden='true'
					fill='currentColor'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						clipRule='evenodd'
						fillRule='evenodd'
						d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
					></path>
				</svg>
			</button>

			<aside
				// id='default-sidebar'
				className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0 ${
					show !== true && "-translate-x-full"
				}`}
				aria-label='Sidebar'
			>
				<div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 border-r border-gray-400 pt-5'>
					<h2 className='text-center font-bold text-black_c text-lg py-5'>
						Star Micro Art
					</h2>

					<ul className='space-y-2 font-medium'>
						<li>
							<Link
								to={"/dashboard"}
								className='flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200  group'
							>
								<svg
									className='w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900'
									aria-hidden='true'
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									viewBox='0 0 22 21'
								>
									<path d='M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z' />
									<path d='M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z' />
								</svg>
								<span className='ms-3'>Dashboard</span>
							</Link>
						</li>
						<li>
							<Link
								to={"/controller"}
								className='flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200  group'
							>
								<FaGears
									size={22}
									className='text-gray-500 group-hover:text-black_c'
								/>
								<span className='ms-3'>Controller</span>
							</Link>
						</li>

						<li>
							<Link
								to={"/services"}
								className='flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 group'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='size-6 text-gray-500 group-hover:text-black_c'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z'
									/>
								</svg>

								<span className='flex-1 ms-3 whitespace-nowrap'>Services</span>
							</Link>
						</li>
						<li>
							<Link
								to={"/users"}
								className='flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 group'
							>
								<IoIosPeople
									size={24}
									className='text-gray-500 group-hover:text-black_c'
								/>
								<span className='flex-1 ms-3 whitespace-nowrap'>Users</span>
							</Link>
						</li>
						<li>
							<Link
								to={"/payments"}
								className='flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 group'
							>
								<FaCircleDollarToSlot
									size={20}
									className='text-gray-500 group-hover:text-black_c'
								/>
								<span className='flex-1 ms-3 whitespace-nowrap'>Payments</span>
							</Link>
						</li>
					</ul>
					<div className='absolute bottom-2 left-[50%] -translate-x-[50%] w-full justify-center px-3'>
						<button className='flex items-center p-2 text-center justify-center w-full text-red-600 hover:bg-red-200 rounded-lg group'>
							<IoLogOut size={24} />
							<span className='flex-1 ms-3 whitespace-nowrap'>Sign Up</span>
						</button>
					</div>
				</div>
			</aside>
		</div>
	);
};

export default SideBar;
