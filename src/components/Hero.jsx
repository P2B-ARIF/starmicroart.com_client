import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Slider from "react-slick";
import h1 from "./../assets/images/h1.jpg";
import h2 from "./../assets/images/h2.jpg";
import h3 from "./../assets/images/h3.jpg";
import h4 from "./../assets/images/h4.jpg";

AOS.init();

function Hero() {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 300,
		autoplaySpeed: 2000,
		cssEase: "linear",
	};

	return (
		<div className='slider-container overflow-hidden'>
			<Slider {...settings}>
				{[h1, h2, h3, h4].map((image, index) => (
					<div key={index} className='h-screen w-full relative'>
						<img src={image} alt='' className='h-full w-full object-cover' />
						<div className='w-full h-full absolute top-0 left-0 bg-gradient-to-r from-black_c/[90%] via-black_c/[40%] to-black_c/[50%] md:to-black_c z-[1]' />
						<div className='absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center text-white z-[2] px-4 mt-20'>
							<div className='container mx-auto space-y-10 md:space-y-5'>
								<h1 className='text-5xl md:text-7xl font-extrabold font-secondary mb-4'>
									Radiant Beauty Lounge
								</h1>
								<p className='text-sm font-light md:font-normal md:text-base max-w-xl'>
									Step into Radiant Beauty Lounge, where elegance meets
									relaxation. Our expert stylists and estheticians provide
									top-notch services tailored to enhance your natural beauty.
									Whether you&apos;re looking for a rejuvenating facial, a chic
									haircut, or a luxurious manicure, our serene environment and
									personalized care ensure you leave feeling refreshed and
									beautiful. Discover your radiance with us.
								</p>
								<button className='bg-gradient-to-r from-primary to-secondary text-white_c py-2.5 px-10 rounded-full font-medium text-lg hover:from-white_c hover:to-white_c transition-all duration-200 ease-linear border-2 border-transparent hover:border-primary hover:text-primary'>
									Contact Us
								</button>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default Hero;
