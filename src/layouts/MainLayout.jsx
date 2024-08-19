import { doc, onSnapshot } from "firebase/firestore";
import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { db } from "../config/firebase";
import { AuthContext } from "../context/AuthContext";
import {
	setBookings,
	setController,
	setLoading,
	setOtherServices,
	setServices,
} from "../redux/features/starmicroartSlice";
import Loader from "../components/Loader";

const MainLayout = () => {
	const location = useLocation();
	const [path, setPath] = useState(location.pathname);
	const { user } = useContext(AuthContext);
	const dispatch = useDispatch();
	const { starmicroart } = useSelector(state => state);

	useEffect(() => {
		setPath(location.pathname);
	}, [location]);


	useEffect(() => {
		dispatch(setLoading(true));
		if (!starmicroart?.services) {
			onSnapshot(doc(db, "starmicroart", "services"), doc => {
				dispatch(setServices(doc.data()));
			});
		}
		if (!starmicroart?.bookings && user) {
			if (user) {
				onSnapshot(doc(db, "starmicroart", "bookings"), doc => {
					const newBookings = Object?.entries(doc.data())?.filter(
						([key, value]) => value?.billingAddress?.email === user?.email,
					);
					dispatch(setBookings(newBookings));
				});
			}
		}
		if (!starmicroart?.controller) {
			onSnapshot(doc(db, "starmicroart", "controller"), doc => {
				dispatch(setController(doc.data()));
			});
		}
		if (!starmicroart?.otherServices) {
			onSnapshot(doc(db, "starmicroart", "otherServices"), doc => {
				dispatch(setOtherServices(doc.data()));
			});
		}
		dispatch(setLoading(false));
	}, [dispatch, user]);

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, [location]);

	if (starmicroart.loading) {
		return <Loader />;
	}

	return (
		<AnimatePresence mode='wait'>
			<main>
				<Navbar path={path} user={user} />
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
