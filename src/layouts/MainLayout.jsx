import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
	const location = useLocation();
	const [path, setPath] = useState(location.pathname);

	useEffect(() => {
		setPath(location.pathname);
	}, [location]);

	return (
		<AnimatePresence mode='wait'>
			<main>
				<Navbar path={path} />
				<motion.div
					key={location.pathname}
					initial={{ x: window.innerWidth, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: -window.innerWidth, opacity: 0 }}
					transition={{ duration: 0.1 }}
				>
					<Outlet />
				</motion.div>
				<Footer />
			</main>
		</AnimatePresence>
	);
};

export default MainLayout;
