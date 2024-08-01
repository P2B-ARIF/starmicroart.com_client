import React from "react";

const AboutUs = () => {
	return (
		<div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-10 lg:gap-10 my-36 px-5 md:px-0'>
			<div className='space-y-4 md:space-y-5'>
				<h3 className='text-center text-3xl font-bold text-primary font-secondary'>
					History
				</h3>
				<h1 className='text-center text-3xl md:text-4xl font-medium mt-2'>
					About US
				</h1>
				<img
					src='https://ld-wp73.template-help.com/wordpress/prod_14770/v1/wp-content/uploads/2020/11/after-text.png'
					className='mx-auto'
					alt=''
				/>
				<p className='text-black_c/80 text-justify'>
					Edem offers a luxurious spa experience and a harmonious escape from
					the stresses of urban life.
					<br /> <br />
					At Edem, guests enjoy seasonal treatments inspired by the best
					cosmetic creators. As industry leaders, we will bring you the highest
					quality service and products and always strive to be the best.
					Exceeding your expectations is our goal and promise to you.
				</p>
				<div className='flex justify-center'>
					<button className='bg-gradient-to-r from-primary to-secondary text-white_c py-2.5 px-10 rounded-full font-medium text-lg hover:from-white_c hover:to-white_c transition-all duration-200 ease-linear border-2 border-transparent hover:border-primary hover:text-primary'>
						Contact Us
					</button>
				</div>
			</div>
			<div className='w-full h-full min-h-[300px] rounded-lg overflow-hidden'>
				<iframe
					data-ux='EmbedVideo'
					src='https://player.vimeo.com/video/978722148?h=890b192c07&autoplay=1&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0&controls=0'
					frameBorder='0'
					allow='autoplay; fullscreen'
					allowFullScreen=''
					loading='lazy'
					data-aid='HEADER_VIDEO_EMBED'
					className='w-full min-h-[300px] h-full'
				></iframe>
			</div>
		</div>
	);
};

export default AboutUs;
