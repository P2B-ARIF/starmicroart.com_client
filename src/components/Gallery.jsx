import React from "react";
import h1 from "./../assets/images/h1.jpg";
import h2 from "./../assets/images/h2.jpg";
import h3 from "./../assets/images/h3.jpg";
import h4 from "./../assets/images/h4.jpg";
import h5 from "./../assets/images/h5.jpg";

const Gallery = () => {
	const images = [h1, h2, h3, h4, h5];

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
					<div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col'>
						<a
							href=''
							className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'
						>
							<img
								src={h1}
								alt=''
								className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
							/>
						</a>
					</div>
					<div className='col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50'>
						<a
							href=''
							className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4'
						>
							<img
								src={h2}
								alt=''
								className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
							/>
						</a>
						<div className='grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2'>
							<a
								href=''
								className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'
							>
								<img
									src={h3}
									alt=''
									className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
								/>
							</a>
							<a
								href=''
								className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'
							>
								<img
									src={h4}
									alt=''
									className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
								/>
							</a>
						</div>
					</div>
					<div className='col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col'>
						<a
							href=''
							className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'
						>
							<img
								src={h5}
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
