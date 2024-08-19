// src/components/Login.js
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
	const { loginUser, user, signWithGoogle } = useContext(AuthContext);
	const navigate = useNavigate();
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async e => {
		e.preventDefault();
		e.stopPropagation();

		if (!email || !password) {
			toast.error("Please fill in all fields");
			return;
		}

		setError(null);
		setLoading(true);

		// const email = e.target.email.value;
		// const password = e.target.password.value;

		try {
			const result = await loginUser(email, password);
			if (result) {
				toast.success("Successfully Logged In");
				navigate("/");
			} else {
				throw new Error("Invalid Email or Password");
			}

			console.log(result, user);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const handleGoogleLogin = async e => {
		e.stopPropagation();

		try {
			const result = await signWithGoogle();
			if (result) {
				toast.success("Successfully Logged In");
				navigate("/");
			} else {
				throw new Error("Invalid Email or Password");
			}
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

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
				{/* <form onSubmit={handleLogin} className='mt-8 space-y-6'> */}
				<div className='mt-8 space-y-6'>
					<div className='rounded-md shadow-sm -space-y-px'>
						<div>
							<label htmlFor='email' className='sr-only'>
								Email
							</label>
							<input
								id='email'
								// name='email'
								type='email'
								autoComplete='email'
								defaultValue={email}
								onChange={e => setEmail(e.target.value)}
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
								defaultValue={password}
								onChange={e => setPassword(e.target.value)}
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
						{error && <p className='p-1 pt-0 text-sm text-red-500'>{error}</p>}

						<button
							disabled={loading}
							onClick={handleLogin}
							type='submit'
							className='group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-primary to-secondary hover:from-white_c hover:to-white_c transition-all duration-200 ease-linear hover:border-primary hover:text-primary'
						>
							{loading ? "Loading..." : "Sign in"}
						</button>
					</div>

					<button
						onClick={handleGoogleLogin}
						className='text-center w-full flex items-center justify-center gap-2 bg-slate-800 text-gray-100 rounded-lg py-2.5'
					>
						<FcGoogle size={20} />
						<span>Continue With Google</span>
					</button>

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
				</div>
			</div>
		</div>
	);
};

export default Login;
