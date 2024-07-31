import React from "react";
import { Link } from "react-router-dom";
import BookingTable from "../../components/BookingTable";
import Profile from "../../components/Profile";

const Account = () => {
	return (
		<div className='p-40 container mx-auto'>
			<h1 className='text-3xl text-center text-primary mb-10'>
				Hi Mohammad Arif!
			</h1>
			<div className='grid grid-cols-4 gap-5'>
				<div className='col-span-1 flex flex-col gap-3'>
					<Link
						to={"/bookings"}
						className='py-2 border border-primary text-center rounded-lg text-primary'
					>
						Bookings
					</Link>
					<Link
						to={"/profile"}
						className='py-2 border border-primary text-center rounded-lg text-primary'
					>
						Profile
					</Link>
				</div>
				{/* <div className='col-span-3 border border-primary rounded-lg h-64 flex items-center justify-center'>
					<h1 className='text-2xl font-bold text-black_c/70'>
						Not Purchase Yet!
					</h1>
				</div> */}
				{/* <div className='col-span-3 border border-primary rounded-lg'>
					<BookingTable />
				</div> */}

				<div className='col-span-3 border border-primary rounded-lg p-5'>
					<Profile />
				</div>
			</div>
		</div>
	);
};

export default Account;
