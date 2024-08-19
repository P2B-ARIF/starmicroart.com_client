import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ConfirmBookingModal from "../../components/client_modal/ConfirmBookingModal";
import no_photo from "./../../assets/images/no_photo2.jpg";

const Cart = () => {
	const { services, otherServices } = useSelector(state => state.starmicroart);
	const [cart, setCart] = useState([]);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
		const updateCart = serviceList => {
			return Object.entries(serviceList)
				.filter(([key]) => storedCart.some(item => item.id === key))
				.map(([key, value]) => ({
					key,
					value,
					booked: storedCart.find(item => item.id === key),
				}));
		};

		if (services) {
			setCart(updateCart(services));
		}
		if (otherServices) {
			setCart([...cart, ...updateCart(otherServices)]);
		}
	}, [services, otherServices]);

	const handleDelete = async id => {
		const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
		const newCart = storedCart.filter(item => item.id !== id);
		localStorage.setItem("cart", JSON.stringify(newCart));
		setCart(cart.filter(item => item.key !== id));

		toast.success("Successfully deleted from cart");
	};

	useEffect(() => {
		const sumPrices = cart => {
			return cart.reduce((total, c) => {
				const priceStr = c.value.price.replace(/[^0-9.]/g, "");
				const price = parseFloat(priceStr);
				if (!isNaN(price)) {
					total += price;
				}
				return total;
			}, 0);
		};
		const totalSum = sumPrices(cart);
		setTotal(totalSum);
	}, [cart]);

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
								{cart &&
									cart?.map((item, i) => (
										<div
											key={i}
											className='rounded-lg border border-primary bg-white p-4 shadow-sm md:p-6'
										>
											<div className='space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0'>
												<a href='#' className='shrink-0 md:order-1'>
													<img
														className='h-20 w-20'
														src={item?.value?.imgUrl || no_photo}
														alt='Service image'
													/>
												</a>

												<div className='flex items-center justify-between md:order-3 md:justify-end'>
													<p className='text-end md:order-4 md:w-32 text-base font-bold text-gray-900 whitespace-nowrap'>
														{item.value.time} | {item.value.price}
													</p>
												</div>

												<div className='w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md'>
													<a
														href='#'
														className='text-base font-medium text-gray-900 hover:underline'
													>
														{item.value.title}
													</a>

													<div>
														<p className='text-sm text-gray-600 mb-1'>
															Booked Time: {item.booked.select}
														</p>

														<div className='flex items-center gap-4'>
															<button
																onClick={() => handleDelete(item.key)}
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
									))}
							</div>
							{cart && !cart?.length && (
								<div className='flex flex-col items-center justify-center min-h-[50vh] border border-primary rounded-lg'>
									<h1 className='text-2xl font-semibold text-gray-900'>
										Empty Cart!
									</h1>
									<Link
										to='/service'
										className='mt-4 text-primary inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline'
									>
										Go to Services
									</Link>
								</div>
							)}
						</div>

						<div className='mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full'>
							<div className='space-y-4 rounded-lg border border-primary bg-white p-4 shadow-sm sm:p-6'>
								<p className='text-xl font-semibold text-gray-900'>
									Booking summary
								</p>
								<div className='space-y-4'>
									<div className='space-y-2'>
										{cart.map((item, index) => {
											console.log(item, "item");

											return (
												<dl
													key={index}
													className='flex items-center justify-between gap-4'
												>
													<dt className='text-base font-normal text-gray-500'>
														Original price
													</dt>
													<dd className='text-base font-medium text-gray-900'>
														{parseFloat(
															item.value.price.replace(/[^0-9.]/g, ""),
														)}
														{/* {item.value.price.split("+")[0]} */}
													</dd>
												</dl>
											);
										})}
									</div>

									<dl className='flex items-center justify-between gap-4 border-t border-gray-200 pt-2'>
										<dt className='text-base font-bold text-gray-900'>Total</dt>
										<dd className='text-base font-bold text-gray-900'>
											{total}
										</dd>
									</dl>
								</div>

								{cart.length > 0 && <ConfirmBookingModal cart={cart} />}

								<div className='flex items-center justify-center gap-2'>
									<span className='text-sm font-normal text-gray-500'>or</span>
									<Link
										to='/service'
										className='inline-flex items-center gap-2 text-sm font-medium  text-primary-700 underline hover:no-underline'
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
