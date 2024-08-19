import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
	const { isLoading, user } = useContext(AuthContext);
	const location = useLocation();

	if (isLoading) {
		return (
			// <div className='h-screen absolute top-0 left-0 w-full flex items-center justify-center text-5xl font-bold'>
			// 	Loading...
			// </div>

			<Loader />
		);
	}

	if (isLoading === false && user === null) {
		return <Navigate to={"/login"} state={{ from: location }} />;
	}

	return children;
};

export default ProtectedRoute;
