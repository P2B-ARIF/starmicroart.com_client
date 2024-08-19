import React, { useEffect, useState } from "react";
import no_photo from "./../../assets/images/no_photo2.jpg";
import { useSelector } from "react-redux";
import ServiceCard from "../../components/ServiceCard";
import { Link } from "react-router-dom";

const Service = () => {
	const { services, otherServices } = useSelector(state => state.starmicroart);
	const [newServices, setNewServices] = useState([]);
	const [newOtherServices, setNewOtherServices] = useState([]);

	// console.log(otherServices, "other");
	useEffect(() => {
		if (services) {
			// Get services with images
			const imgFind = Object.entries(services)
				.filter(([key, service]) => service.imgUrl)
				.map(([key, service]) => ({ ...service, id: key }));

			// Get services without images
			const imgNan = Object.entries(services)
				.filter(([key, service]) => !service.imgUrl)
				.map(([key, service]) => ({ ...service, id: key }));

			setNewServices([...imgFind, ...imgNan]);
		}
		if (otherServices) {
			const newArr = Object.entries(otherServices).map(([key, s]) => ({
				...s,
				id: key,
			}));
			setNewOtherServices(newArr);
			console.log(newArr, "new arr");
		}
	}, [services, otherServices]);

	return (
		<div className='py-40 container mx-auto min-h-screen'>
			{/* <h1 className='text-center text-primary text-2xl font-semibold'>
				Online Appointment
			</h1> */}

			<div className='flex justify-center'>
				<h1 className='text-2xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r mx-auto justify-center inline-block from-primary to-secondary'>
					Online Appointment
				</h1>
			</div>

			{/* <div className='flex flex-wrap gap-5 items-stretch justify-center mt-10'> */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-5 mx-5 md:mx-0 mt-10'>
				{newServices
					?.sort((obj1, obj2) => {
						if (obj1.image === null && obj2.image !== null) {
							return 1;
						} else if (obj1.image !== null && obj2.image === null) {
							return -1;
						} else {
							return 0;
						}
					})
					.map((service, index) => {
						return <ServiceCard key={index} service={service} />;
					})}
			</div>

			<div className='mt-20 px-5'>
				<h1 className='text-2xl text-primary font-bold text-center mb-5'>
					Other Services
				</h1>
				<div className='flex flex-wrap items-center gap-10 gap-y-5 justify-center'>
					{newOtherServices?.map((nService, index) => (
						<div
							key={index}
							className='bg-secondary text-white p-5 rounded-lg space-y-1 flex flex-col grow w-[280px]'
						>
							<h2 className='text-lg'>{nService?.title}</h2>
							<div className='flex items-center justify-between'>
								<span className='text-xl font-bold'>${nService?.price}</span>
								<Link
									to={`/booking/${nService?.id}`}
									className='flex items-center gap-1 text-primary hover:bg-gradient-to-r bg-white hover:text-white_c hover:from-primary hover:to-secondary transition-all duration-300 ease-linear border border-white hover:border-white py-1 px-5 rounded-full'
								>
									Book
								</Link>
								{/* <Link
									to={`/booking/${nService?.id}`}
									className='flex items-center gap-1 bg-gradient-to-r from-primary to-secondary hover:from-white_c hover:to-white_c transition-all duration-300 ease-linear border border-white hover:border-primary hover:text-primary text-white_c py-1 px-5 rounded-full'
								>
									Book
								</Link> */}
							</div>
						</div>
					))}
					{/* <div className='bg-secondary text-white p-5 rounded-lg space-y-1 flex flex-col grow w-[280px]'>
						<h2 className='text-lg'>Eyebrow Lamination / Wax / Tint</h2>
						<span className='text-xl font-bold'>$65+</span>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Service;
