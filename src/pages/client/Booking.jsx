import React, { useState } from "react";
import Calendar from "../../components/Calender";
import ServiceCard from "../../components/ServiceCard";
import TimeSlots from "../../components/TimeSlots";
import h1 from "./../../assets/images/h1.jpg";
import h2 from "./../../assets/images/h2.jpg";
import h3 from "./../../assets/images/h3.jpg";
import h4 from "./../../assets/images/h4.jpg";

const Booking = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [selectedTime, setSelectedTime] = useState("");

	const services = [
		{
			img: h1,
			title: "Medi-SPA & Massage",
			des: "Relieve stress and muscle strain with relaxing and gentle massage.",
			price: 40,
		},
		{
			img: h2,
			title: "Facial Treatments",
			des: "Revitalize your skin with our customized facial treatments.",
			price: 60,
		},
		{
			img: h3,
			title: "Body Scrubs",
			des: "Exfoliate and rejuvenate your skin with our luxurious body scrubs.",
			price: 50,
		},
		{
			img: h4,
			title: "Manicure & Pedicure",
			des: "Pamper yourself with our professional manicure and pedicure services.",
			price: 30,
		},
	];

	return (
		<div className='py-40 pt-52'>
			<h1 className='text-3xl font-semibold text-center mb-14'>
				Appointment Booking
			</h1>
			<div className='container mx-auto grid grid-cols-2 gap-10'>
				<div>
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
				</div>
				<div className='space-y-3'>
					<h1 className='text-2xl font-semibold text-primary'>
						Eyebrow Microblading Service
					</h1>
					<h5 className='text-lg font-bold text-black_c/80'>
						3 hrs | $580.00 +
					</h5>
					<img
						src={h1}
						alt=''
						className='col-span-1 w-full rounded-lg h-[350px] object-cover'
					/>
					<p className='text-black/70 text-lg'>
						Experience expert precision and artistry with our Microblading
						Service. Our estheticians use top-of-the-line tools to create
						natural-looking, defined eyebrows for a flawless finish.
					</p>
				</div>
			</div>

			<div className='container mx-auto my-20'>
				<h3 className='text-2xl font-semibold text-black_c text-center mb-10'>
					Other Services
				</h3>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{services?.map((service, index) => (
						<ServiceCard
							key={index}
							image={service.img}
							title={service.title}
							description={service.des}
							price={service.price}
						/>
					))}
				</div>
				<div className='flex justify-center my-5'>
					<button className='bg-primary text-white_c py-3 px-10 rounded-full font-medium text-lg'>
						Contact Us
					</button>
				</div>
			</div>
		</div>
	);
};

export default Booking;
