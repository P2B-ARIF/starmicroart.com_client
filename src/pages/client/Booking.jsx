import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Calendar from "../../components/Calender";
import ServiceCard from "../../components/ServiceCard";
import TimeSlots from "../../components/TimeSlots";
import no_photo from "./../../assets/images/no_photo2.jpg";

const Booking = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [selectedTime, setSelectedTime] = useState("");
	const { services: allServices, otherServices } = useSelector(
		state => state.starmicroart,
	);
	const { id } = useParams();
	const navigate = useNavigate();

	const [singleS, setSingleS] = useState([]);
	const [newServices, setNewServices] = useState([]);

	const [newAllServices, setNewAllServices] = useState([]);

	useEffect(() => {
		if (allServices) {
			const imgFind = Object.entries(allServices)
				.filter(([key, service]) => service.imgUrl)
				.map(([key, service]) => ({ ...service, id: key }));

			const imgNan = Object.entries(allServices)
				.filter(([key, service]) => !service.imgUrl)
				.map(([key, service]) => ({ ...service, id: key }));

			const initialServices = imgFind;
			const additionalServices = imgNan.slice(0, 6 - initialServices.length);
			setNewServices([...initialServices, ...additionalServices]);

			const newOtherArr = Object.entries(otherServices).map(
				([key, otherServ]) => ({ ...otherServ, id: key }),
			);

			setNewAllServices([...imgFind, ...imgNan, ...newOtherArr]);
		}
	}, [allServices, otherServices]);

	useEffect(() => {
		if (newAllServices) {
			const find = newAllServices?.find(s => s.id === id);
			setSingleS(find);
		}
	}, [newAllServices, id]);

	// const services = [
	// 	{
	// 		img: h1,
	// 		title: "Medi-SPA & Massage",
	// 		des: "Relieve stress and muscle strain with relaxing and gentle massage.",
	// 		price: 40,
	// 	},
	// 	{
	// 		img: h2,
	// 		title: "Facial Treatments",
	// 		des: "Revitalize your skin with our customized facial treatments.",
	// 		price: 60,
	// 	},
	// 	{
	// 		img: h3,
	// 		title: "Body Scrubs",
	// 		des: "Exfoliate and rejuvenate your skin with our luxurious body scrubs.",
	// 		price: 50,
	// 	},
	// 	{
	// 		img: h4,
	// 		title: "Manicure & Pedicure",
	// 		des: "Pamper yourself with our professional manicure and pedicure services.",
	// 		price: 30,
	// 	},
	// ];

	const handleBooking = async () => {
		const select = format(selectedDate, "MM/dd/yyyy");
		const getItem = JSON.parse(localStorage.getItem("cart")) || [];

		if (select === format(new Date(), "MM/dd/yyyy")) {
			alert("Please select a date");
			return;
		}
		const book = { id, select, selectedTime };

		if (getItem) {
			const find = getItem?.find(item => item?.id === id);
			if (find) {
				toast.error("This Service already have");
				return;
			}
			getItem.push(book);
			localStorage.setItem("cart", JSON.stringify(getItem));
			toast.success("Successfully Service Booked..");
			navigate("/cart");
		} else {
			localStorage.setItem("cart", JSON.stringify([book]));
			toast.success("Successfully Service Booked..");
			navigate("/cart");
		}
	};

	return (
		<div className='py-40 pb-28 pt-28 sm:pt-44'>
			<div className='flex justify-center'>
				<h1 className='text-2xl font-semibold text-center mb-14 bg-clip-text text-transparent bg-gradient-to-r mx-auto justify-center inline-block from-primary to-secondary'>
					Appointment Booking
				</h1>
			</div>
			<div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-0'>
				<div className='max-md:order-2'>
					<Calendar
						selectedDate={selectedDate}
						setSelectedDate={setSelectedDate}
					/>
					<TimeSlots
						selectedTime={selectedTime}
						setSelectedTime={setSelectedTime}
					/>
					<div className='mt-4 text-center'>
						<p>Selected Date: {selectedDate.toDateString()}</p>
						<p>Selected Time: {selectedTime}</p>
					</div>

					<div className='flex justify-center mt-5'>
						<button
							onClick={handleBooking}
							className='bg-gradient-to-r from-primary to-secondary text-white_c py-2.5 px-10 rounded-full font-medium text-lg hover:from-white_c hover:to-white_c transition-all duration-200 ease-linear border-2 border-transparent hover:border-primary hover:text-primary'
						>
							Confirm Booking
						</button>
					</div>
				</div>
				<div className='space-y-2 md:space-y-3'>
					<h1 className='text-xl md:text-2xl font-semibold text-primary'>
						{singleS?.title}
					</h1>
					<h5 className='text-lg font-bold text-black_c/80'>
						{singleS?.time} | {singleS?.price}
					</h5>
					<img
						src={singleS?.imgUrl || no_photo}
						alt=''
						className='col-span-1 w-full rounded-lg h-[250px] md:h-[350px] object-cover'
					/>
					<p className='text-black/70 text-md md:text-lg'>
						{singleS?.description}
					</p>
				</div>
			</div>

			<div className='container mx-auto mt-20'>
				<h3 className='text-2xl font-semibold text-black_c text-center mb-10'>
					Other Services
				</h3>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{newServices?.map((service, index) => (
						<ServiceCard key={index} service={service} />
					))}
				</div>
				{/* <div className='flex justify-center my-5'>
					<button className='bg-primary text-white_c py-3 px-10 rounded-full font-medium text-lg'>
						Contact Us
					</button>
				</div> */}
			</div>
		</div>
	);
};

export default Booking;
