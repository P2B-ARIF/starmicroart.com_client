// src/components/Register.js
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
	const [error, setError] = useState("");
	const {
		createUser,
		error: hotError,
		signWithGoogle,
	} = useContext(AuthContext);
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const handleRegister = async e => {
		e.preventDefault();
		setError("");
		setLoading(true);

		const name = e.target.name.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		const confirm = e.target.confirm.value;

		if (password !== confirm) {
			setError("Passwords do not match");
			return; // Exit early if passwords don't match
		}

		try {
			const result = await createUser(email, password, name);
			if (result) {
				toast.success("User created successfully");
				navigate("/");
			}
		} catch (error) {
			handleFirebaseError(hotError || error);
		} finally {
			setLoading(false);
		}
	};

	const handleFirebaseError = error => {
		switch (error?.code) {
			case "auth/weak-password":
				setError("Password should be at least 6 characters");
				break;
			case "auth/email-already-in-use":
				setError("Email already in use. Please use a different email.");
				break;
			default:
				setError(error.message);
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
				<form onSubmit={handleRegister} className='mt-8 space-y-6'>
					<div className='rounded-md shadow-sm -space-y-px'>
						<div>
							<label htmlFor='name' className='sr-only'>
								Full Name
							</label>
							<input
								id='name'
								name='name'
								type='text'
								autoComplete='name'
								// required
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
						{/* <div>
							<label htmlFor='phone' className='sr-only'>
								Phone
							</label>
							<input
								id='phone'
								name='phone'
								type='number'
								// autoComplete='tel'
								// required
								className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm'
								placeholder='Phone'
							/>
						</div> */}
						<div>
							<label htmlFor='password' className='sr-only'>
								Password
							</label>
							<input
								id='password'
								name='password'
								type='password'
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
								name='confirm'
								type='password'
								className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm'
								placeholder='Confirm Password'
							/>
						</div>
					</div>

					<div>
						{error && <p className='p-1 pt-0 text-sm text-red-500'>{error}</p>}

						<button
							type='submit'
							className='group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-primary to-secondary hover:from-white_c hover:to-white_c transition-all duration-200 ease-linear hover:border-primary hover:text-primary'
						>
							{loading ? "Loading..." : "Sign Up"}
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
