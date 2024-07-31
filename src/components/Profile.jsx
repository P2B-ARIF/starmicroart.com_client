import React from "react";

const Profile = () => {
	return (
		<>
			<h3 className='text-lg font-bold text-black_c/80'>Update Profile</h3>
			<form className='space-y-4 mt-6'>
				<div>
					<label
						htmlFor='email'
						className='block mb-2 text-sm font-medium text-gray-900'
					>
						Full Name
					</label>
					<input
						type='email'
						name='login'
						id='email'
						className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5'
						placeholder='name'
						required=''
					/>
				</div>
				<div>
					<label
						htmlFor='email'
						className='block mb-2 text-sm font-medium text-gray-900'
					>
						Phone
					</label>
					<input
						type='email'
						name='login'
						id='email'
						className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5'
						placeholder='+123456789'
						required=''
					/>
				</div>
				<div>
					<label
						htmlFor='email'
						className='block mb-2 text-sm font-medium text-gray-900'
					>
						Email Address
					</label>
					<input
						type='email'
						name='login'
						id='email'
						className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5'
						placeholder='name@company.com'
						required=''
					/>
				</div>
				<div>
					<label
						htmlFor='password'
						className='block mb-2 text-sm font-medium text-gray-900'
					>
						Password
					</label>
					<input
						type='password'
						name='password'
						id='password'
						placeholder='••••••••'
						className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5'
						required=''
					/>
				</div>
				<br />

				<button
					type='submit'
					className='text-white bg-primary py-2 px-4 rounded  w-full'
				>
					Update Changes
				</button>
			</form>
		</>
	);
};

export default Profile;
