import React from "react";

const StatsComponent = () => {
	const stats = [
		{
			label: "Revenue",
			value: "$405,091.00",
		},
		{
			label: "Overdue invoices",
			value: "$12,787.00",
		},
		{
			label: "Outstanding invoices",
			value: "$245,988.00",
		},
	];

	return (
		<section>
			<h3 className='ml-2 font-semibold mb-2 text-lg text-black_c'>Stats</h3>
			<div className='bg-white rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
				{stats.map((stat, index) => (
					<div key={index} className='border p-5 rounded-lg'>
						<p className='font-medium text-black_c/70'>{stat.label}</p>
						<p className='text-2xl font-semibold font-lato'>{stat.value}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default StatsComponent;
