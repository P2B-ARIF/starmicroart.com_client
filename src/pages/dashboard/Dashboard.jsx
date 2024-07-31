import React from "react";
import StatsComponent from "../../components/dashboard/StatsComponent";
import LinesGraph from "../../components/dashboard/LinesGraph";

const Dashboard = () => {
	return (
		<div className='p-5 sm:ml-64 w-full'>
			<StatsComponent />
			<LinesGraph />
		</div>
	);
};

export default Dashboard;
