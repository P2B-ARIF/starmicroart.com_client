import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Cart = () => {
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
								<div className='rounded-lg border border-primary bg-white p-4 shadow-sm md:p-6'>
									<div className='space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0'>
										<a href='#' className='shrink-0 md:order-1'>
											<img
												className='h-20 w-20 dark:hidden'
												src='https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg'
												alt='imac image'
											/>
											<img
												className='hidden h-20 w-20 dark:block'
												src='https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg'
												alt='imac image'
											/>
										</a>

										<label htmlFor='counter-input' className='sr-only'>
											Choose quantity:
										</label>
										<div className='flex items-center justify-between md:order-3 md:justify-end'>
											<div className='text-end md:order-4 md:w-32'>
												<p className='text-base font-bold text-gray-900'>
													3h | $1,499
												</p>
											</div>
										</div>

										<div className='w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md'>
											<a
												href='#'
												className='text-base font-medium text-gray-900 hover:underline'
											>
												PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple
												M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU,
												Keyboard layout INT
											</a>

											<div className='flex items-center gap-4'>
												<button
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
						</div>

						<div className='mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full'>
							<div className='space-y-4 rounded-lg border border-primary bg-white p-4 shadow-sm sm:p-6'>
								<p className='text-xl font-semibold text-gray-900'>
									Booking summary
								</p>

								<div className='space-y-4'>
									<div className='space-y-2'>
										<dl className='flex items-center justify-between gap-4'>
											<dt className='text-base font-normal text-gray-500'>
												Original price
											</dt>
											<dd className='text-base font-medium text-gray-900'>
												$7,592.00
											</dd>
										</dl>

										<dl className='flex items-center justify-between gap-4'>
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
										</dl>
									</div>

									<dl className='flex items-center justify-between gap-4 border-t border-gray-200 pt-2'>
										<dt className='text-base font-bold text-gray-900'>Total</dt>
										<dd className='text-base font-bold text-gray-900'>
											$8,191.00
										</dd>
									</dl>
								</div>

								<Link
									href='#'
									className='flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-primary to-secondary text-white_c py-2 px-10 text-sm font-medium hover:from-white_c hover:to-white_c transition-all duration-200 ease-linear border-2 border-transparent hover:border-primary hover:text-primary'
								>
									Proceed to Checkout
								</Link>

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
