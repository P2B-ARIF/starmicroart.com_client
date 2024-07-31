// src/components/Register.js
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<div className='w-full h-screen bg-white flex items-center justify-center'>
			<div className='max-w-md w-full p-8 space-y-8 pt-20'>
				<div>
					<h2 className='text-center font-lato text-2xl md:text-3xl font-bold text-gray-900'>
						Welcome!
					</h2>
					<p className='mt-2 text-center text-sm text-gray-600'>
						Please fill in the details to create your account.
					</p>
				</div>
				<form className='mt-8 space-y-6'>
					<div className='rounded-md shadow-sm -space-y-px'>
						<div>
							<label htmlFor='full-name' className='sr-only'>
								Full Name
							</label>
							<input
								id='full-name'
								name='full-name'
								type='text'
								autoComplete='name'
								required
								className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm'
								placeholder='Full Name'
							/>
						</div>
						<div>
							<label htmlFor='email' className='sr-only'>
								Email
							</label>
							<input
								id='email'
								name='email'
								type='email'
								autoComplete='email'
								required
								className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm'
								placeholder='Email address'
							/>
						</div>
						<div>
							<label htmlFor='phone' className='sr-only'>
								Phone
							</label>
							<input
								id='phone'
								name='phone'
								type='tel'
								autoComplete='tel'
								required
								className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm'
								placeholder='Phone'
							/>
						</div>
						<div>
							<label htmlFor='password' className='sr-only'>
								Password
							</label>
							<input
								id='password'
								name='password'
								type='password'
								autoComplete='new-password'
								required
								className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm'
								placeholder='Password'
							/>
						</div>
						<div>
							<label htmlFor='confirm-password' className='sr-only'>
								Confirm Password
							</label>
							<input
								id='confirm-password'
								name='confirm-password'
								type='password'
								autoComplete='new-password'
								required
								className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm'
								placeholder='Confirm Password'
							/>
						</div>
					</div>

					<div>
						<button
							type='submit'
							className='group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-primary to-secondary hover:from-white_c hover:to-white_c transition-all duration-200 ease-linear hover:border-primary hover:text-primary'
						>
							Sign Up
						</button>
					</div>

					<div className='flex items-center justify-center mt-4'>
						<div className='text-sm'>
							<Link
								to={"/login"}
								className='font-medium text-secondary hover:text-primary-dark'
							>
								Already have an account? Sign in
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
