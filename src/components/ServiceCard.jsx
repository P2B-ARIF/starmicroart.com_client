import React, { useState } from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
	const [show, setShow] = useState(false);

	return (
		<>
			{service?.imgUrl ? (
				<div className='grid grid-cols-5 min-h-56 border gap-2 bg-white rounded-lg overflow-hidden hover:shadow hover:transition-all hover:duration-500 hover:ease-linear'>
					<div className='col-span-2 w-full h-56'>
						<img
							src={service?.imgUrl}
							alt={service?.title}
							className='w-full h-[105%] object-cover'
						/>
					</div>
					<div className='col-span-3 p-2 h-full flex flex-col'>
						<div className='flex-grow'>
							<h2 className='text-lg leading-6 font-medium mb-2'>
								{service?.title}
							</h2>
							<div className='w-[50px] h-[3px] bg-primary my-2'></div>
							<p className='text-gray-700 text-sm'>
								{service?.description?.length > 100 ? (
									<>
										{`${service?.description.slice(0, show ? -1 : 100)} ... `}
										<button
											onClick={() => setShow(!show)}
											className='text-xs text-primary font-medium'
										>
											{show ? "Less" : "See"} more
										</button>
									</>
								) : (
									service?.description
								)}
							</p>
						</div>
						<div className='flex items-center justify-between mt-auto'>
							<div className='text-lg font-medium text-black_c/[80%]'>
								${service?.price}
							</div>
							<div className='flex justify-left'>
								<Link
									to={`/booking/${service?.id}`}
									className='flex items-center gap-1 bg-gradient-to-r from-primary to-secondary hover:from-white_c hover:to-white_c transition-all duration-300 ease-linear border border-transparent hover:border-primary hover:text-primary text-white_c py-1 px-5 rounded-full'
								>
									Book
								</Link>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className='grid grid-cols-5 min-h-56 border gap-2 bg-white rounded-lg overflow-hidden hover:shadow hover:transition-all hover:duration-500 hover:ease-linear'>
					<div className='col-span-5 p-5 h-full flex flex-col'>
						<div className='flex-grow'>
							<h2 className='text-lg leading-6 font-medium mb-2'>
								{service?.title}
							</h2>
							<div className='w-[50px] h-[3px] bg-primary my-2'></div>
							<p className='text-gray-700 text-sm'>
								{service?.description?.length > 100 ? (
									<>
										{`${service?.description.slice(0, show ? -1 : 100)} ${!show&& "..."} `}
										<button
											onClick={() => setShow(!show)}
											className='text-xs text-primary font-medium'
										>
											{show ? "Less" : "See"} more
										</button>
									</>
								) : (
									service?.description
								)}
							</p>
							{/* <p className='text-gray-700 text-sm'>
								{service?.description?.length > 200
									? service?.description.slice(0, 200) + "..."
									: service?.description}
							</p> */}
						</div>
						<div className='flex items-center justify-between mt-auto'>
							<div className='text-lg font-medium text-black_c/[80%]'>
								${service?.price}
							</div>
							<div className='flex justify-left'>
								<Link
									to={`/booking/${service?.id}`}
									className='flex items-center gap-1 bg-gradient-to-r from-primary to-secondary hover:from-white_c hover:to-white_c transition-all duration-300 ease-linear border border-transparent hover:border-primary hover:text-primary text-white_c py-1 px-5 rounded-full'
								>
									Book
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ServiceCard;

// className='bg-primary text-white_c py-1 px-5 rounded-full mt-2'
