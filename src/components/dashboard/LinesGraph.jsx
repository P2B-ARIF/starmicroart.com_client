import React from "react";
import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const data = [
	{ date: "2024-07-01", orders: 30 },
	{ date: "2024-07-02", orders: 45 },
	{ date: "2024-07-03", orders: 28 },
	{ date: "2024-07-04", orders: 50 },
	{ date: "2024-07-05", orders: 35 },
];

const LinesGraph = () => {
	return (
		<div className='pr-5 mt-5'>
			<h3 className='ml-2 font-semibold mb-5 text-lg text-black_c'>Summery</h3>
			<ResponsiveContainer width='100%' height={400}>
				<LineChart data={data}>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='date' />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line
						type='monotone'
						dataKey='orders'
						stroke='#8884d8'
						activeDot={{ r: 8 }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default LinesGraph;
