import React from "react";
import LinesGraph from "../../components/dashboard/LinesGraph";
import StatsComponent from "../../components/dashboard/StatsComponent";

const Dashboard = () => {
	return (
		<>
			<StatsComponent />
			<LinesGraph />
		</>
	);
};

export default Dashboard;
