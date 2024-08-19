import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import AdminBookingTable from "../../components/dashboard/AdminBookingTable";
import { useSelector } from "react-redux";

const Bookings = () => {
	const booking = [
		{
			id: 1,
			customerName: "John Doe",
			bookName: ["Laptop", "Desktop"],
			price: 1200,
			bookDate: "2023-01-01",
			phone: "123-456-7890",
		},
		{
			id: 2,
			customerName: "Jane Smith",
			bookName: ["Phone"],
			price: 800,
			bookDate: "2023-02-01",
			phone: "987-654-3210",
		},
		{
			id: 3,
			customerName: "Michael Johnson",
			bookName: ["Tablet"],
			price: 300,
			bookDate: "2023-03-01",
			phone: "456-789-0123",
		},
		{
			id: 4,
			customerName: "Emily Davis",
			bookName: ["Monitor"],
			price: 150,
			bookDate: "2023-04-01",
			phone: "789-012-3456",
		},
		{
			id: 5,
			customerName: "William Brown",
			bookName: ["Headphones"],
			price: 100,
			bookDate: "2023-05-01",
			phone: "012-345-6789",
		},
		{
			id: 6,
			customerName: "Olivia Wilson",
			bookName: ["Keyboard"],
			price: 70,
			bookDate: "2020-06-01",
			phone: "345-678-9012",
		},
		{
			id: 7,
			customerName: "James Taylor",
			bookName: ["Mouse"],
			price: 50,
			bookDate: "2023-07-01",
			phone: "678-901-2345",
		},
		{
			id: 8,
			customerName: "Sophia Martinez",
			bookName: ["Printer"],
			price: 200,
			bookDate: "2023-08-01",
			phone: "901-234-5678",
		},
		{
			id: 9,
			customerName: "Liam Anderson",
			bookName: ["Desk"],
			price: 300,
			bookDate: "2023-09-01",
			phone: "234-567-8901",
		},
		{
			id: 10,
			customerName: "Isabella Thomas",
			bookName: ["Chair"],
			price: 150,
			bookDate: "2023-10-01",
			phone: "567-890-1234",
		},
		{
			id: 11,
			customerName: "James Taylor",
			bookName: ["Mouse"],
			price: 50,
			bookDate: "2023-07-01",
			phone: "678-901-2345",
		},
		{
			id: 12,
			customerName: "Sophia Martinez",
			bookName: ["Printer"],
			price: 200,
			bookDate: "2023-08-01",
			phone: "901-234-5678",
		},
		{
			id: 13,
			customerName: "Liam Anderson",
			bookName: ["Desk"],
			price: 300,
			bookDate: "2023-09-01",
			phone: "234-567-8901",
		},
		{
			id: 14,
			customerName: "Isabella Thomas",
			bookName: ["Chair"],
			price: 150,
			bookDate: "2023-10-01",
			phone: "567-890-1234",
		},
	];

	const { allBookings } = useSelector(state => state.starmicroart);

	console.log(allBookings, "bookings");

	const [count, setCount] = useState(0);
	let step = 8;

	return (
		<div>
			<div className='flex items-center justify-between mb-3'>
				<h3 className='font-semibold text-lg text-black_c'>Bookings</h3>
				<div>
					<Button
						onClick={() => {
							if (count - (step - step - step) < booking?.length) {
								setCount(prev => prev + step);
							}
						}}
						colorScheme='blue'
						size={"sm"}
						marginX={2}
					>
						+
					</Button>
					<Button
						onClick={() => {
							if (count > 0) {
								setCount(prev => prev - step);
							}
						}}
						colorScheme='blue'
						size={"sm"}
						marginX={2}
					>
						-
					</Button>
				</div>
			</div>
			<div className='border rounded-lg overflow-hidden border-primary'>
				{allBookings && (
					<AdminBookingTable bookings={allBookings} count={count} step={step} />
				)}
			</div>
		</div>
	);
};

export default Bookings;
