import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import About from "../pages/client/About";
import Account from "../pages/client/Account";
import Booking from "../pages/client/Booking";
import Cart from "../pages/client/Cart";
import Contact from "../pages/client/Contact";
import Home from "../pages/client/Home";
import Service from "../pages/client/Service";
import Login from "../pages/client/auth/Login";
import Register from "../pages/client/auth/Register";
import Controller from "../pages/dashboard/Controller";
import Dashboard from "../pages/dashboard/Dashboard";
import Orders from "../pages/dashboard/Bookings";
import Services from "../pages/dashboard/Services";
import Users from "../pages/dashboard/Users";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/about", element: <About /> },
			{ path: "/contact", element: <Contact /> },
			{ path: "/service", element: <Service /> },
			{ path: "/cart", element: <Cart /> },
			{
				path: "/account",
				element: (
					<ProtectedRoute>
						<Account />
					</ProtectedRoute>
				),
			},
			{
				path: "/booking/:id",
				element: (
					<ProtectedRoute>
						<Booking />
					</ProtectedRoute>
				),
			},
			{ path: "/login", element: <Login /> },
			{ path: "/register", element: <Register /> },
			{ path: "*", element: <NotFound /> },
		],
	},

	{
		path: "/dashboard",
		element: <AdminLayout />,
		children: [
			{ path: "/dashboard", element: <div></div> },
			// {
			// 	path: "/dashboard",
			// 	element: (
			// 		<ProtectedRoute>
			// 			<Dashboard />
			// 		</ProtectedRoute>
			// 	),
			// },
			{
				path: "/dashboard/controller",
				element: (
					<ProtectedRoute>
						<Controller />
					</ProtectedRoute>
				),
			},
			{
				path: "/dashboard/services",
				element: (
					<ProtectedRoute>
						<Services />
					</ProtectedRoute>
				),
			},
			{ path: "/dashboard/users", element: <Users /> },
			{ path: "/dashboard/orders", element: <Orders /> },
			{ path: "*", element: <NotFound /> },
		],
	},

	{
		path: "*",
		element: <NotFound />,
	},
]);
