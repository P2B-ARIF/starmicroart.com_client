import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updatePassword,
	updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { auth } from "../config/firebase";

export const AuthContext = createContext();
// const authentication2 = getAuth();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const authentication = auth;
	const provider = new GoogleAuthProvider();

	const updateUserPassword = async newPassword => {
		updatePassword(authentication.currentUser, newPassword)
			.then(() => {
				toast.success("Successfully updated password!");
			})
			.catch(error => {
				toast.error(`Failed to update profile: ${error.message}`);
			});
	};

	const updateUserProfile = async name => {
		try {
			await updateProfile(authentication.currentUser, {
				displayName: name.displayName,
			});
			toast.success("Successfully updated profile!");
		} catch (error) {
			toast.error(`Failed to update profile: ${error.message}`);
		}
	};

	const createUser = async (email, password, name, phone) => {
		try {
			const result = await createUserWithEmailAndPassword(
				authentication,
				email,
				password,
			);
			const user = result.user;

			await updateProfile(user, {
				displayName: name,
				// phoneNumber: phone, // Firebase does not support phone number in updateProfile
			});

			setUser(user);
			toast.success("Account created successfully!");
			return user;
		} catch (error) {
			toast.error(`Failed to create account: ${error.message}`);
		}
	};

	const loginUser = async (email, password) => {
		try {
			const result = await signInWithEmailAndPassword(
				authentication,
				email,
				password,
			);
			const user = result.user;
			setUser(user);
			// toast.success("Logged in successfully!");
			return user;
		} catch (error) {
			if (error.message) {
				setError({ status: error.code, message: error.message });
			}
		}
	};

	const signOutUser = async () => {
		try {
			const result = await signOut(authentication);
			return result;
		} catch (error) {
			if (error.message) {
				setError({ status: error.code, message: error.message });
			}
		}
	};

	const signWithGoogle = async () => {
		try {
			const result = await signInWithPopup(authentication, provider);
			const newUser = result.user;
			setUser(newUser);
			toast.success("Logged in with Google successfully!");
			return newUser;
		} catch (error) {
			if (error.message) {
				setError({ status: error.code, message: error.message });
			}
		}
	};

	useEffect(() => {
		let isMounted = true;
		setIsLoading(true);

		const unSubscribe = onAuthStateChanged(authentication, currentUser => {
			if (isMounted) {
				if (currentUser) {
					setUser(currentUser);
					setIsLoading(false);

					console.log("User is logged in here");
					console.log(currentUser);
				} else {
					console.log("User is signed out");
					setIsLoading(false);
					setUser(null);
				}
			}
		});

		return () => {
			isMounted = false;
			unSubscribe();
		};
	}, []);

	return (
		<AuthContext.Provider
			value={{
				user,
				isLoading,
				error,
				signWithGoogle,
				createUser,
				loginUser,
				signOutUser,
				updateUserProfile,
				updateUserPassword,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
