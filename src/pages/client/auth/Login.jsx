// src/components/Login.js
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className='w-full h-screen bg-white flex items-center justify-center pt-10'>
			<div className='max-w-md w-full p-8 space-y-8'>
				<div>
					<h2 className='text-center font-lato text-2xl md:text-3xl font-bold text-gray-900'>
						Hello Again!
					</h2>
					<p className='mt-2 text-center text-sm text-gray-600'>
						Welcome back! Please enter your details.
					</p>
				</div>
				<form className='mt-8 space-y-6'>
					<div className='rounded-md shadow-sm -space-y-px'>
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
								className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm'
								placeholder='Email address'
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
								autoComplete='current-password'
								required
								className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm'
								placeholder='Password'
							/>
						</div>
					</div>

					<div className='flex items-center justify-between'>
						<div className='flex items-center'>
							<input
								id='remember-me'
								name='remember-me'
								type='checkbox'
								className='h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded'
							/>
							<label
								htmlFor='remember-me'
								className='ml-2 block text-sm text-gray-900'
							>
								Remember me
							</label>
						</div>

						<div className='text-sm'>
							<a
								href='#'
								className='font-medium text-primary hover:text-primary-dark'
							>
								Forgot your password?
							</a>
						</div>
					</div>

					<div>
						<button
							type='submit'
							className='group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-primary to-secondary hover:from-white_c hover:to-white_c transition-all duration-200 ease-linear hover:border-primary hover:text-primary'
						>
							Sign in
						</button>
					</div>

					<div className='flex items-center justify-center mt-4'>
						<div className='text-sm'>
							<Link
								to={"/register"}
								className='font-medium text-secondary hover:text-primary-dark'
							>
								Don&apos;t have an account? Sign up
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
