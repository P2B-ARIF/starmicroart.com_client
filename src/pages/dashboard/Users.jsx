import React from "react";
import UserTable from "../../components/dashboard/UserTable";

const Users = () => {
	return (
		<div>
			<h3 className='font-semibold mb-2 text-lg text-black_c'>ALL USERS</h3>
			<div className="border-primary border-[1px] rounded-lg">
				<UserTable />
			</div>
		</div>
	);
};

export default Users;
