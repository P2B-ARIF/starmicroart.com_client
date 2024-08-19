import {
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import React from "react";

const AdminBookingTable = ({ bookings, count, step }) => {
	const sortedBookings = Object?.entries(bookings)?.sort(([, a], [, b]) => {
		if (a?.appointmentDate > b?.appointmentDate) {
			return -1;
		} else {
			return 1;
		}
	});

	return (
		<TableContainer>
			<Table variant='simple'>
				<Thead>
					<Tr>
						<Th>Id</Th>
						<Th>Date</Th>
						<Th>Customer Name</Th>
						<Th>Order Date</Th>
						<Th>Order Name</Th>
						<Th>Price</Th>
						<Th>Phone</Th>
					</Tr>
				</Thead>
				<Tbody>
					{sortedBookings.slice(count, count + step).map(([key, book]) => (
						<Tr key={key}>
							<Td>{key}</Td>
							<Td className='uppercase text-sm'>
								{new Date(book.appointmentDate).toLocaleDateString()}
							</Td>
							<Td>{book.billingAddress?.fullName}</Td>
							<Td className='text-sm'>
								{book.cart?.map((order, index) => (
									<h6 key={index}>{order.booked?.select}</h6>
								))}
							</Td>
							<Td className='text-sm'>
								{book.cart?.map((order, index) => (
									<h6 key={index}>{order.value?.title}</h6>
								))}
							</Td>
							<Td className='text-sm'>
								{book.cart?.map((order, index) => (
									<h6 key={index}>{order.value?.price}</h6>
								))}
							</Td>
							<Td>{book.billingAddress?.phone}</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default AdminBookingTable;
