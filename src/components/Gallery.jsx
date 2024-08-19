import React, { useEffect, useState } from "react";

const Gallery = ({ galleryImages }) => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		if (galleryImages) {
			setImages(Object.values(galleryImages));
		}
	}, [galleryImages]);

	return (
		<section className='bg-white my-20'>
			<div className='text-center mb-8 space-y-4 md:space-y-5'>
				<h3 className='text-3xl md:text-4xl font-bold text-primary font-secondary'>
					Portfolio
				</h3>
				<h1 className='text-2xl md:text-3xl font-medium mt-2'>Our Gallery</h1>
				<img
					src='https://ld-wp73.template-help.com/wordpress/prod_14770/v1/wp-content/uploads/2020/11/after-text.png'
					className='mx-auto'
					alt=''
				/>
			</div>

			<div className='py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6'>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full'>
					<div
						data-aos='fade-right'
						data-aos-anchor-placement='center-bottom'
						className='col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col'
					>
						<a
							href=''
							className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'
						>
							<img
								src={images[0]}
								alt=''
								className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
							/>
						</a>
					</div>
					<div className='col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50'>
						<a
							data-aos='fade-up'
							data-aos-anchor-placement='center-bottom'
							href=''
							className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4'
						>
							<img
								src={images[1]}
								alt=''
								className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
							/>
						</a>
						<div className='grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2'>
							<a
								data-aos-anchor-placement='center-bottom'
								data-aos='fade-right'
								data-aos-duration='700'
								href=''
								className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'
							>
								<img
									src={images[2]}
									alt=''
									className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
								/>
							</a>
							<a
								data-aos='fade-left'
								data-aos-anchor-placement='center-bottom'
								data-aos-duration='700'
								href=''
								className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'
							>
								<img
									src={images[3]}
									alt=''
									className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
								/>
							</a>
						</div>
					</div>
					<div
						data-aos='fade-left'
						data-aos-anchor-placement='center-bottom'
						className='col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col'
					>
						<a
							href=''
							className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'
						>
							<img
								src={images[4]}
								alt=''
								className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
