import React from "react";

const ServiceCard = ({ image, title, description, price }) => {
	return (
		<div
			data-aos='fade-up'
			data-aos-anchor-placement='top-bottom'
			className='bg-white rounded-lg overflow-hidden'
		>
			<img src={image} alt={title} className='w-full h-48 object-cover' />
			<div className='p-2 py-8 text-center'>
				<h2 className='text-2xl font-medium mb-2'>{title}</h2>
				<div className='w-[50px] h-[3px] bg-primary mx-auto my-4'></div>
				<p className='text-gray-700 mb-4'>{description}</p>
				<div className='text-2xl font-medium text-black_c/[80%]'>${price}</div>

				<button className='bg-gradient-to-r from-primary to-secondary hover:from-white_c hover:to-white_c transition-all duration-300 ease-linear border border-transparent hover:border-primary hover:text-primary text-white_c py-1 px-5 rounded-full mt-2'>
					Book
				</button>

				{/* 			
				className='bg-gradient-to-r from-primary to-secondary text-white_c py-3 px-10 rounded-full font-medium text-lg hover:from-white_c hover:to-white_c transition-all duration-200 ease-linear border-2 border-transparent hover:border-primary hover:text-primary'
								 */}
			</div>
		</div>
	);
};

export default ServiceCard;

// className='bg-primary text-white_c py-1 px-5 rounded-full mt-2'
