import React from "react";

const DiscountOffer = ({ discount }) => {
	return (
		<div
			className='bg-cover bg-center flex justify-end ml-auto relative mt-28'
			style={{ backgroundImage: `url(${discount?.imgUrl})` }}
		>
			<div className='w-full h-full absolute top-0 left-0 bg-gradient-to-r from-black/[10%] via-black/[20%] to-black/[70%] z-10' />

			<div className='container mx-auto'>
				<div className='space-y-3 md:space-y-4 w-[70%] md:w-1/2 py-20 relative z-20 ml-auto'>
					<span className='font-lato text-4xl md:text-5xl font-extrabold text-white'>
						{discount?.discount || "30% OFF"}
					</span>
					<h1 className='text-3xl md:text-4xl text-white mb-14 mt-2'>
						{discount?.title || "for All Massages"}
					</h1>
					<p className='text-white pb-5 md:pb-10 font-light md:font-normal'>
						{discount?.description}
					</p>
					<button className='bg-gradient-to-r from-primary to-secondary text-white_c py-2.5 px-10 rounded-full font-medium text-lg hover:from-white_c hover:to-white_c transition-all duration-200 ease-linear border-2 border-transparent hover:border-primary hover:text-primary'>
						Contact Us
					</button>
				</div>
			</div>
		</div>
	);
};

export default DiscountOffer;
