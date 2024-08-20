import { doc, onSnapshot } from "firebase/firestore";
import { React, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SideBar from "../components/dashboard/SideBar";
import { db } from "../config/firebase";
import { AuthContext } from "../context/AuthContext";
import {
	setAllBookings,
	setBookings,
	setController,
	setLoading,
	setOtherServices,
	setServices,
} from "../redux/features/starmicroartSlice";

const AdminLayout = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { user } = useContext(AuthContext);
	const dispatch = useDispatch();
	const { starmicroart } = useSelector(state => state);

	useEffect(() => {
		if (location.pathname === "/dashboard") {
			navigate("/dashboard/controller");
			console.log("navigate to...");
		}

		if (user) {
			if (
				user?.email !== "mohammadarif4319@gmail.com" ||
				user?.email !== "starmicroart@gmail.com"
			) {
				toast.error("You can't entry here..");
				navigate("/");
			}
		}
	}, [location, navigate, user]);
 
	
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

			if (
				user?.email !== "mohammadarif4319@gmail.com" ||
				user?.email !== "starmicroart@gmail.com"
			) {
				onSnapshot(doc(db, "starmicroart", "bookings"), doc => {
					dispatch(setAllBookings(doc.data()));
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
