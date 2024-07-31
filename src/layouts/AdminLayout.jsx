import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/dashboard/SideBar";

const AdminLayout = () => {
	return (
		<main className='flex'>
			<SideBar />
			<Outlet />
		</main>
	);
};

export default AdminLayout;
