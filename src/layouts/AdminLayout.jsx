import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/dashboard/SideBar";

const AdminLayout = () => {
	return (
		<main className='flex'>
			<SideBar />
			<div className='mt-14 md:mt-5 p-5 w-full relative md:ml-64'>
				<Outlet />
			</div>
		</main>
	);
};

export default AdminLayout;
