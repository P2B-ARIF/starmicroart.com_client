import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
	const location = useLocation();
	const [path, setPath] = useState(location.pathname);

	useEffect(() => {
		setPath(location.pathname);
	}, [location]);

	// if (true) {
	// 	return <Loading />;
	// }

	return (
		<main>
			<Navbar path={path} />
			<Outlet />
			<Footer />
		</main>
	);
};

export default MainLayout;
