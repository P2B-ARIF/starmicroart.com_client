<div
					data-aos='fade-up'
					data-aos-anchor-placement='top-bottom'
					className='bg-white rounded-lg overflow-hidden'
				>
					<img
						src={service?.imgUrl}
						alt={service?.title}
						className='w-full h-48 object-cover'
					/>
					<div className='p-2 py-8 text-center'>
						<h2 className='text-2xl font-medium mb-2'>{service?.title}</h2>
						<div className='w-[50px] h-[3px] bg-primary mx-auto my-4'></div>
						<p className='text-gray-700 mb-4'>{service?.description}</p>
						<div className='text-2xl font-medium text-black_c/[80%]'>
							${service?.price}
						</div>

						<div className='flex justify-center'>
							<Link
								to={`booking/${service?.id}`}
								// onClick={handleAddCart}
								className='flex items-center gap-1 bg-gradient-to-r from-primary to-secondary hover:from-white_c hover:to-white_c transition-all duration-300 ease-linear border border-transparent hover:border-primary hover:text-primary text-white_c py-1 px-5 rounded-full mt-2'
							>
								Book
							</Link>
						</div>

						{/* 			
				className='bg-gradient-to-r from-primary to-secondary text-white_c py-3 px-10 rounded-full font-medium text-lg hover:from-white_c hover:to-white_c transition-all duration-200 ease-linear border-2 border-transparent hover:border-primary hover:text-primary'
								 */}
					</div>
				</div>



import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ConfirmBookingModal from "../../components/client_modal/ConfirmBookingModal";

const Cart = () => {
	const { services } = useSelector(state => state.starmicroart);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		if (services) {
			const getCart = JSON.parse(localStorage.getItem("cart")) || [];

			// for (let i = 0; i < getCart?.length; i++) {
			// 	const item = getCart[i];

			// 	if (item.id === services[item.id]) {
			// 		console.log(services[item.id]);
			// 	}
			// }

			const updatedCart = Object?.entries(services)
				?.filter(([key]) => getCart?.find(c => c.id === key))
				.map(([key, value]) => ({
					key,
					value,
					booked: getCart.find(f => f.id === key),
				}));

			console.log(updatedCart, "updated cart");
			// // Filter services based on the keys found in getCart
			// const updatedCart = Object?.entries(services)
			// 	?.filter(([key]) => getCart?.includes(key))
			// 	?.map(([key, value]) => ({ key, value }));

			// // Update the cart state
			setCart(updatedCart);

			// console.log(cart, "cart");
		}
	}, [services]);

	const handleDelete = async id => {
		const getCart = JSON.parse(localStorage.getItem("cart")) || [];
		const newCart = getCart.filter(c => c.id !== id);
		localStorage.setItem("cart", JSON.stringify(newCart));
		setCart(cart.filter(item => item.key !== id));

		toast.success("successfully deleted cart");
	};

	return (
		<div className='py-32 container mx-auto min-h-[80vh]'>
			<section className='bg-white py-8 antialiased md:py-16'>
				<div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
					<h2 className='text-xl font-semibold text-gray-900 sm:text-2xl'>
						Booking Cart
					</h2>

					<div className='mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8'>
						<div className='mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl'>
							<div className='space-y-6'>
								{cart?.map((val, i) => {
									return (
										<div
											key={i}
											className='rounded-lg border border-primary bg-white p-4 shadow-sm md:p-6'
										>
											<div className='space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0'>
												<a href='#' className='shrink-0 md:order-1'>
													<img
														className='h-20 w-20'
														src={val.value.imgUrl}
														alt='imac image'
													/>
												</a>

												<label htmlFor='counter-input' className='sr-only'>
													Choose quantity:
												</label>
												<div className='flex items-center justify-between md:order-3 md:justify-end'>
													<div className='text-end md:order-4 md:w-32'>
														<p className='text-base font-bold text-gray-900'>
															{val.value.time} | {val.value.price}
														</p>
													</div>
												</div>

												<div className='w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md'>
													<a
														href='#'
														className='text-base font-medium text-gray-900 hover:underline'
													>
														{val.value?.description}
													</a>

													<div>
														<p className='text-sm text-gray-600 mb-1'>
															Booked Time: {val.booked.select}
														</p>

														<div className='flex items-center gap-4'>
															<button
																onClick={() => handleDelete(val.key)}
																type='button'
																className='inline-flex items-center text-sm font-medium text-red-600 hover:underline'
															>
																<IoClose size={20} className='mr-2' />
																Remove
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>

						<div className='mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full'>
							<div className='space-y-4 rounded-lg border border-primary bg-white p-4 shadow-sm sm:p-6'>
								<p className='text-xl font-semibold text-gray-900'>
									Booking summary
								</p>

								<div className='space-y-4'>
									<div className='space-y-2'>
										{cart?.map((c, index) => {
											return (
												<>
													<dl className='flex items-center justify-between gap-4'>
														<dt
															key={index}
															className='text-base font-normal text-gray-500'
														>
															Original price
														</dt>
														<dd className='text-base font-medium text-gray-900'>
															{c?.value?.price}
														</dd>
													</dl>
												</>
											);
										})}

										{/* <dl className='flex items-center justify-between gap-4'>
											<dt className='text-base font-normal text-gray-500'>
												Savings
											</dt>
											<dd className='text-base font-medium text-green-600'>
												-$299.00
											</dd>
										</dl>

										<dl className='flex items-center justify-between gap-4'>
											<dt className='text-base font-normal text-gray-500'>
												Tax
											</dt>
											<dd className='text-base font-medium text-gray-900'>
												$799
											</dd>
										</dl> */}
									</div>

									<dl className='flex items-center justify-between gap-4 border-t border-gray-200 pt-2'>
										<dt className='text-base font-bold text-gray-900'>Total</dt>
										<dd className='text-base font-bold text-gray-900'>
											{cart.reduce((p, n) => p + Number(n.value.price), 0)}
										</dd>
									</dl>
								</div>

								{/* <button
									className='flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-primary to-secondary text-white_c py-2 px-10 text-sm font-medium hover:from-white_c hover:to-white_c transition-all duration-200 ease-linear border-2 border-transparent hover:border-primary hover:text-primary'
								>
									Proceed to Confirm
								</button> */}
								{cart && <ConfirmBookingModal cart={cart} />}

								<div className='flex items-center justify-center gap-2'>
									<span className='text-sm font-normal text-gray-500'>
										{" "}
										or{" "}
									</span>
									<Link
										to='/service'
										className='inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline'
									>
										Continue to Book
										<FaArrowRightLong />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Cart;



import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import no_photo2 from "./../../assets/images/no_photo2.jpg";
import ServiceCardModel from "./modal/ServiceCardModel";
import { deleteField, doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import toast from "react-hot-toast";

const DServiceCard = ({ details }) => {
	const [loading, setLoading] = useState(false);

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
		<div className='grow max-w-[300px] h-full relative border border-primary rounded-lg overflow-hidden'>
			<img
				src={details?.imgUrl || no_photo2}
				alt='no photo here'
				className='h-[180px] object-cover w-full object-center overflow-hidden'
			/>
			<div className='ml-2 p-2 h-full'>
				<div>
					<h3 className='text-lg font-medium'>{details.title}</h3>
					<h3 className='mb-2'>{details?.description}</h3>
				</div>
				<div className=''>
					<div className='flex items-center justify-between'>
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
		</div>
	);
};

export default DServiceCard;


