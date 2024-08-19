// TimeSlots.js

import React from "react";

const TimeSlots = ({ selectedTime, setSelectedTime }) => {
	const times = [
		"10:00 AM",
		"10:30 AM",
		"11:00 AM",
		"11:30 AM",
		"12:00 PM",
		"12:30 PM",
		"1:00 PM",
		"1:30 PM",
		"2:00 PM",
		"2:30 PM",
		"3:00 PM",
		"3:30 PM",
		"4:00 PM",
	];

	return (
		<div className='mt-8'>
			{/* <div className='flex justify-around'>
				<div>Morning</div>
				<div>Afternoon</div>
			</div> */}

			<div className="text-lg font-semibold text-primary">Time</div>
			<div className='grid grid-cols-2 lg:grid-cols-3 gap-4 mt-2'>
				{times?.map(time => (
					<button
						key={time}
						className={`p-2 border border-primary rounded ${
							selectedTime === time
								? "bg-primary bg-gradient-to-r from-primary to-secondary text-white_c"
								: ""
						}`}
						onClick={() => setSelectedTime(time)}
					>
						{time}
					</button>
				))}
			</div>
		</div>
	);
};

export default TimeSlots;
