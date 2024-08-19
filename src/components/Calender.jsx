// Calendar.js

import React, { useState } from "react";
import {
	format,
	addMonths,
	subMonths,
	startOfMonth,
	endOfMonth,
	startOfWeek,
	endOfWeek,
	addDays,
	isSameMonth,
	isSameDay,
} from "date-fns";

const Calendar = ({ selectedDate, setSelectedDate }) => {
	const [currentMonth, setCurrentMonth] = useState(new Date());

	const renderHeader = () => {
		return (
			<div className='flex justify-between items-center mb-4'>
				<button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
					<span>&lt;</span>
				</button>
				<div>
					<span>{format(currentMonth, "MMMM yyyy")}</span>
				</div>
				<button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
					<span>&gt;</span>
				</button>
			</div>
		);
	};

	const renderDays = () => {
		const days = [];
		const startDate = startOfWeek(currentMonth, { weekStartsOn: 0 });

		for (let i = 0; i < 7; i++) {
			days.push(
				<div key={i} className='text-center'>
					{format(addDays(startDate, i), "E")}
				</div>,
			);
		}

		return <div className='grid grid-cols-7'>{days}</div>;
	};

	const renderCells = () => {
		const monthStart = startOfMonth(currentMonth);
		const monthEnd = endOfMonth(monthStart);
		const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
		const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

		const rows = [];
		let days = [];
		let day = startDate;
		let formattedDate = "";

		while (day <= endDate) {
			for (let i = 0; i < 7; i++) {
				formattedDate = format(day, "d");
				const cloneDay = day;
				days.push(
					<div
						key={day}
						className={`text-center p-2 cursor-pointer ${
							!isSameMonth(day, monthStart) ? "text-gray-400" : ""
						} ${
							isSameDay(day, selectedDate)
								? "bg-primary text-white_c rounded-full bg-gradient-to-r from-primary to-secondary"
								: ""
						} `}
						onClick={() => setSelectedDate(cloneDay)}
					>
						<span>{formattedDate}</span>
					</div>,
				);
				day = addDays(day, 1);
			}
			rows.push(
				<div className='grid grid-cols-7' key={day}>
					{days}
				</div>,
			);
			days = [];
		}
		return <div>{rows}</div>;
	};

	return (
		<div className='bg-white p-4 rounded-lg shadow-md border border-primary'>
			{renderHeader()}
			{renderDays()}
			{renderCells()}
		</div>
	);
};

export default Calendar;
