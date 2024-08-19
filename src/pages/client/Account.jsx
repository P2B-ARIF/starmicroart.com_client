import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import BookingTable from "../../components/BookingTable";
import Profile from "../../components/Profile";
import { AuthContext } from "../../context/AuthContext";

const Account = () => {
	const [accountRoute, setAccountRoute] = useState("bookings");
	const { user } = useContext(AuthContext);
	const { bookings } = useSelector(state => state.starmicroart);

	return (
		<div className='px-5 pt-32 md:pt-52 xl:pt-40 xl:p-40 container mx-auto max-md:mb-20 min-h-[80vh]'>
			<h1 className='text-xl font-bold md:text-3xl text-center text-primary mb-10'>
				Hi Mohammad Arif!
			</h1>
			<div className='grid grid-cols-4 gap-5'>
				<div className='col-span-4 md:col-span-1 flex max-md:w-full md:flex-col gap-3'>
					<button
						onClick={() => setAccountRoute("bookings")}
						className={`py-2 border border-primary text-center rounded-lg text-primary max-md:w-full ${
							accountRoute === "bookings" && "bg-primary text-white_c hover:bg-"
						}`}
					>
						Bookings
					</button>
					<button
						onClick={() => setAccountRoute("profile")}
						className={`py-2 border border-primary text-center rounded-lg text-primary max-md:w-full ${
							accountRoute === "profile" && "bg-primary text-white_c hover:bg-"
						}`}
					>
						Profile
					</button>
				</div>
				{accountRoute === "bookings" ? (
					<>
						{bookings?.length === 0 || bookings === null ? (
							<div className='col-span-4 md:col-span-3 border border-primary rounded-lg h-64 flex items-center justify-center'>
								<h1 className='text-2xl font-bold text-black_c/70'>
									Appointment Take Yet!
								</h1>
							</div>
						) : (
							<div className='col-span-4 md:col-span-3 border border-primary rounded-lg'>
								{bookings?.map((booking, index) => (
									<div key={index}>
										<h3 className='text-base m-2 ml-5 font-medium mb-1'>
											Appointment Date: {booking[1].appointmentDate}
										</h3>
										<BookingTable booking={booking[1]} />
									</div>
								))}
							</div>
						)}
					</>
				) : (
					<div className='col-span-4 lg:col-span-3 border border-primary rounded-lg p-5'>
						<Profile />
					</div>
				)}
			</div>
		</div>
	);
};

export default Account;
