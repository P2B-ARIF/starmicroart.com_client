import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
	const { user, updateUserProfile, updateUserPassword } =
		useContext(AuthContext);
	const [loading, setLoading] = useState(false);

	const [formData, setFormData] = useState({
		name: user?.displayName || "",
		password: "",
		confirmPassword: "",
	});
	const [error, setError] = useState("");

	const handleInputChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
		setError("");
	};

	const handleUpdateProfile = async () => {
		const { name, password, confirmPassword } = formData;
		setLoading(true);

		if (password && password !== confirmPassword) {
			setError("Passwords do not match");
			return;
		}
		try {
			if (name && name !== user?.displayName) {
				await updateUserProfile({ displayName: name });
			}
			if (password) {
				await updateUserPassword(password);
			}
			toast.success("Profile updated successfully");
		} catch (err) {
			setError(err.message);
			toast.error("Failed to update profile");
		}
		setLoading(false);
	};

	return (
		<div className='mx-auto p-6 bg-white rounded-md'>
			<h3 className='text-lg font-bold text-black_c/80 mb-4'>Update Profile</h3>
			<div className='space-y-4'>
				<div>
					<label
						htmlFor='name'
						className='block mb-2 text-sm font-medium text-gray-900'
					>
						Full Name
					</label>
					<input
						type='text'
						name='name'
						id='name'
						value={formData.name}
						onChange={handleInputChange}
						className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5'
						placeholder='Full Name'
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
						name='email'
						id='email'
						value={user?.email}
						readOnly
						className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5'
						placeholder='name@company.com'
					/>
				</div>

				<div>
					<label
						htmlFor='password'
						className='block mb-2 text-sm font-medium text-gray-900'
					>
						New Password
					</label>
					<input
						type='password'
						name='password'
						id='password'
						value={formData.password}
						onChange={handleInputChange}
						className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5'
						placeholder='New Password'
					/>
				</div>

				<div>
					<label
						htmlFor='confirmPassword'
						className='block mb-2 text-sm font-medium text-gray-900'
					>
						Confirm Password
					</label>
					<input
						type='password'
						name='confirmPassword'
						id='confirmPassword'
						value={formData.confirmPassword}
						onChange={handleInputChange}
						className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5'
						placeholder='Confirm Password'
					/>
				</div>

				{error && <p className='text-red-500 text-sm'>{error}</p>}

				<button
					onClick={handleUpdateProfile}
					className='text-white bg-primary py-2 px-4 rounded-lg w-full'
				>
					{loading ? "Loading..." : "Update Changes"}
				</button>
			</div>
		</div>
	);
};

export default Profile;
