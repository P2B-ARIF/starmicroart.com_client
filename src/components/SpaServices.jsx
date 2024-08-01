
import React from "react";
import h1 from "./../assets/images/h1.jpg";
import h2 from "./../assets/images/h2.jpg";
import h3 from "./../assets/images/h3.jpg";
import h4 from "./../assets/images/h4.jpg";
import ServiceCard from "./ServiceCard";

const SpaServices = () => {
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
		<section className='container mx-auto py-4 md:py-8'>
			<div className='text-center mb-8 space-y-4 md:space-y-5'>
				<h3 className='text-2xl md:text-3xl font-bold text-primary font-secondary'>
					For Our Clients
				</h3>
				<h1 className='text-2xl md:text-4xl font-medium mt-2'>
					High-Quality Spa Services
				</h1>
				<img
					src='https://ld-wp73.template-help.com/wordpress/prod_14770/v1/wp-content/uploads/2020/11/after-text.png'
					className='mx-auto'
					alt=''
				/>
				<p className='text-lg w-[90%] md:w-[70%] mx-auto font-[300] text-black_c py-5'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci odit
					iusto non tenetur explicabo pariatur voluptatibus eligendi dolorem ea
					repellendus. Eius, ex? Molestiae eos dicta odit. Qui possimus
					repudiandae quisquam.
				</p>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-5 md:mx-0'>
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
			{/* <div className='flex justify-center my-2'>
				<button className='bg-primary text-white_c py-3 px-10 rounded-full font-medium text-lg'>
					Contact Us
				</button>
			</div> */}
		</section>
	);
};

export default SpaServices;
