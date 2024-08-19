import React, { useContext, useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaHandsHelping } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { TbLayoutDashboardFilled, TbPackages } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import CreateServiceModel from "./modal/CreateServiceModel";
import CreateOtherService from "./modal/CreateOtherService";
import { AuthContext } from "../../context/AuthContext";

const SideBar = () => {
	const [show, setShow] = useState(false);
	const location = useLocation();
	const { signOutUser } = useContext(AuthContext);

	const navLists = [
		// { url: "/dashboard", icon: TbLayoutDashboardFilled, name: "Dashboard" },
		{ url: "/dashboard/controller", icon: FaGears, name: "Controller" },
		{ url: "/dashboard/services", icon: FaHandsHelping, name: "Services" },
		// { url: "/dashboard/users", icon: IoIosPeople, name: "Users" },
		{
			url: "/dashboard/orders",
			icon: TbPackages,
			name: "Orders",
		},
	];

	return (
		<div>
			<button
				onClick={() => setShow(!show)}
				aria-controls='default-sidebar'
				type='button'
				className='absolute top-0 right-4 inline-flex items-center p-1.5 mt-3 ms-3 text-sm text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
			>
				<span className='sr-only'>Open sidebar</span>
				{show ? <CgClose size={30} /> : <HiMenuAlt2 size={30} />}
			</button>

			<aside
				className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform md:translate-x-0 ${
					show !== true && "-translate-x-full"
				}`}
				aria-label='Sidebar'
			>
				<div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 border-r border-gray-400 pt-5'>
					<h2 className='text-center font-bold text-black_c text-lg py-5'>
						Star Micro Art
					</h2>

					<ul className='space-y-2 font-medium'>
						{navLists?.map((nav, index) => (
							<li key={index} onClick={() => setShow(false)}>
								<Link
									to={nav.url}
									className={`flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-200 group ${
										location.pathname === nav.url && "bg-gray-300 text-gray-900"
									}`}
								>
									<nav.icon
										size={22}
										className={`${
											location.pathname === nav.url
												? "group:text-black_c"
												: "text-gray-500 group-hover:text-black_c"
										}`}
									/>
									<span className='ms-3'>{nav.name}</span>
								</Link>
							</li>
						))}
						<li onClick={() => setShow(false)}>
							{/* <button
								className={`flex items-center p-2 text-green-700 rounded-lg hover:bg-green-200 group w-full`}
							>
								<IoIosAddCircle
									size={22}
									className={`text-green-500 group-hover:text-green-700`}
								/>
								<span className='ms-3'>Add Service</span>
							</button> */}

							<CreateServiceModel />
							<CreateOtherService />
						</li>
					</ul>
					<div className='absolute bottom-2 left-[50%] -translate-x-[50%] w-full justify-center px-3'>
						<button
							onClick={() => {
								signOutUser();
								window.location.reload();
							}}
							className='flex items-center p-2 text-center justify-center w-full text-red-600 hover:bg-red-200 rounded-lg group'
						>
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
