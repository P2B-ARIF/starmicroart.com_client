import {
	Box,
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import React from "react";


const users = [
	{
		id: 1,
		name: "John Doe",
		email: "john@example.com",
		phone: "123-456-7890",
		createDate: "2023-01-01",
		orderCount: 5,
	},
	{
		id: 2,
		name: "Jane Smith",
		email: "jane@example.com",
		phone: "987-654-3210",
		createDate: "2023-02-01",
		orderCount: 3,
	},
	{
		id: 3,
		name: "Michael Johnson",
		email: "michael@example.com",
		phone: "456-789-0123",
		createDate: "2023-03-01",
		orderCount: 8,
	},
	{
		id: 4,
		name: "Emily Davis",
		email: "emily@example.com",
		phone: "789-012-3456",
		createDate: "2023-04-01",
		orderCount: 2,
	},
	{
		id: 5,
		name: "William Brown",
		email: "william@example.com",
		phone: "012-345-6789",
		createDate: "2023-05-01",
		orderCount: 10,
	},
	{
		id: 6,
		name: "Olivia Wilson",
		email: "olivia@example.com",
		phone: "345-678-9012",
		createDate: "2023-06-01",
		orderCount: 4,
	},
	{
		id: 7,
		name: "James Taylor",
		email: "james@example.com",
		phone: "678-901-2345",
		createDate: "2023-07-01",
		orderCount: 7,
	},
	{
		id: 8,
		name: "Sophia Martinez",
		email: "sophia@example.com",
		phone: "901-234-5678",
		createDate: "2023-08-01",
		orderCount: 6,
	},
	{
		id: 9,
		name: "Liam Anderson",
		email: "liam@example.com",
		phone: "234-567-8901",
		createDate: "2023-09-01",
		orderCount: 9,
	},
	{
		id: 10,
		name: "Isabella Thomas",
		email: "isabella@example.com",
		phone: "567-890-1234",
		createDate: "2023-10-01",
		orderCount: 1,
	},
];

const UserTable = () => {
	return (
		<TableContainer>
			<Table variant='simple'>
				<Thead>
					<Tr>
						<Th>Serial No</Th>
						<Th>Name</Th>
						<Th>Email</Th>
						<Th>Phone</Th>
						<Th>Create Date</Th>
						<Th>Order Count</Th>
					</Tr>
				</Thead>
				<Tbody>
					{users.map((user, index) => (
						<Tr key={user.id}>
							<Td>{index + 1}</Td>
							<Td>{user.name}</Td>
							<Td>{user.email}</Td>
							<Td>{user.phone}</Td>
							<Td>{user.createDate}</Td>
							<Td>{user.orderCount}</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default UserTable;
