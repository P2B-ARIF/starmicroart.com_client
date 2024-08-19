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

const BookingTable = ({ booking }) => {
	return (
		<TableContainer>
			<Table variant='simple'>
				<Thead>
					<Tr>
						<Th>Date</Th>
						<Th>Service</Th>
						<Th>Price</Th>
						{/* <Th>Status</Th> */}
					</Tr>
				</Thead>
				<Tbody>
					{booking.cart?.map((booking, index) => (
						<Tr key={index}>
							<Td>{booking.booked.select}</Td>
							<Td>{booking.value.title}</Td>
							<Td>{booking.value.price}</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default BookingTable;
