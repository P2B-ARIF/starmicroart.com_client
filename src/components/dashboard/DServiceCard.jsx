import { Button } from "@chakra-ui/react";
import { deleteField, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { db } from "../../config/firebase";
import ServiceCardModel from "./modal/ServiceCardModel";

const DServiceCard = ({ details }) => {
	const [loading, setLoading] = useState(false);
	const [show, setShow] = useState(false);

	// console.log(details, index);

	const handleDeleteService = async () => {
		setLoading(true);
		try {
			const collection = doc(db, "starmicroart", "services");
			await updateDoc(collection, {
				[details.id]: deleteField(),
			});
			toast.success("successfully deleted service");
			setLoading(false);
		} catch (error) {
			console.log(error.message);
			setLoading(false);
		}
	};

	return (
		<>
			{details?.imgUrl ? (
				<div className='grid grid-cols-5 min-h-56 border gap-2 bg-white rounded-lg overflow-hidden hover:shadow hover:transition-all hover:duration-500 hover:ease-linear'>
					<div className='col-span-2 w-full h-56'>
						<img
							src={details?.imgUrl}
							alt={details?.title}
							className='w-full h-[105%] object-cover'
						/>
					</div>
					<div className='col-span-3 p-2 h-full flex flex-col'>
						<div className='flex-grow'>
							<h2 className='text-lg leading-6 font-medium mb-2'>
								{details?.title}
							</h2>
							<div className='w-[50px] h-[3px] bg-primary my-2'></div>
							<p className='text-gray-700 text-sm'>
								{details?.description?.length > 100 ? (
									<>
										{`${details?.description.slice(0, show ? -1 : 100)} ... `}
										<button
											onClick={() => setShow(!show)}
											className='text-xs text-primary font-medium'
										>
											{show ? "Less" : "See"} more
										</button>
									</>
								) : (
									details?.description
								)}
							</p>
						</div>
						<div className='flex items-center justify-between mt-auto'>
							<h3 className='text-black_c/90'>
								{details?.time} | <span>{details.price}</span>
							</h3>
							<div className='flex gap-2'>
								{/* <Button size='sm' colorScheme='purple' marginTop={2}>
								<span className='font-normal'>Edit</span>
							</Button> */}

								{/* Edit Button */}
								<ServiceCardModel details={details} />
								<Button
									onClick={handleDeleteService}
									isLoading={loading}
									isDisabled={loading}
									size='sm'
									colorScheme='red'
									marginTop={2}
								>
									<span className='font-normal'>Delete</span>
								</Button>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className='grid grid-cols-5 min-h-56 border gap-2 bg-white rounded-lg overflow-hidden hover:shadow hover:transition-all hover:duration-500 hover:ease-linear'>
					<div className='col-span-5 px-5 py-2 h-full flex flex-col'>
						<div className='flex-grow'>
							<h2 className='text-lg leading-6 font-medium mb-2'>
								{details?.title}
							</h2>
							<div className='w-[50px] h-[3px] bg-primary my-2'></div>
							<p className='text-gray-700 text-sm'>
								{details?.description?.length > 100 ? (
									<>
										{`${details?.description.slice(0, show ? -1 : 100)} ${
											!show && "..."
										} `}
										<button
											onClick={() => setShow(!show)}
											className='text-xs text-primary font-medium'
										>
											{show ? "Less" : "See"} more
										</button>
									</>
								) : (
									details?.description
								)}
							</p>
							{/* <p className='text-gray-700 text-sm'>
								{details?.description?.length > 200
									? details?.description.slice(0, 200) + "..."
									: details?.description}
							</p> */}
						</div>
						<div className='flex items-center justify-between mt-auto'>
							<h3 className='text-black_c/90'>
								{details?.time} | <span>{details.price}</span>
							</h3>
							<div className='flex gap-2'>
								{/* <Button size='sm' colorScheme='purple' marginTop={2}>
								<span className='font-normal'>Edit</span>
							</Button> */}

								{/* Edit Button */}
								<ServiceCardModel details={details} />
								<Button
									onClick={handleDeleteService}
									isLoading={loading}
									isDisabled={loading}
									size='sm'
									colorScheme='red'
									marginTop={2}
								>
									<span className='font-normal'>Delete</span>
								</Button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default DServiceCard;
