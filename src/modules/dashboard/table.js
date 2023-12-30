import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const Table = () => {
	const data = [
		{
			date: "2023-01-01",
			image: "attendance_visual_1.jpg",
			effectiveHours: 6.5,
			grossHours: 8,
			extraHours: 1.5,
			arrival: "On Time",
			logIcon: "log_icon_1.png",
		},
		{
			date: "2023-01-02",
			image: "attendance_visual_2.jpg",
			effectiveHours: 7.2,
			grossHours: 8,
			extraHours: 0.8,
			arrival: "5 mins late",
			logIcon: "log_icon_2.png",
		},
		{
			date: "2023-01-03",
			image: "attendance_visual_3.jpg",
			effectiveHours: 6.8,
			grossHours: 8,
			extraHours: 1.2,
			arrival: "On Time",
			logIcon: "log_icon_3.png",
		},
		{
			date: "2023-01-04",
			image: "attendance_visual_4.jpg",
			effectiveHours: 6.5,
			grossHours: 8,
			extraHours: 1.5,
			arrival: "10 mins late",
			logIcon: "log_icon_4.png",
		},
	];
	return (
		<div className="w-full overflow-x-auto">
			<table className="w-full bg-black-75 text-white border border-gray-500">
				<thead>
					<tr>
						<th className="py-2 px-4">Date</th>
						<th className="py-2 px-4">Attendance Visual</th>
						<th className="py-2 px-4">Effective Hours</th>
						<th className="py-2 px-4">Gross Hours</th>
						<th className="py-2 px-4">Extra Hours</th>
						<th className="py-2 px-4">Arrival</th>
						<th className="py-2 px-4">Log</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr key={index}>
							<td className="py-2 px-4">{item.date}</td>
							<td className="py-2 px-4">
								<img
									src={item.image}
									alt="Attendance Visual"
									className="w-8 h-8"
								/>
							</td>
							<td className="py-2 px-4">
								<PieChart
									data={[
										{ value: item.effectiveHours, color: "#4CAF50" },
										{
											value: item.grossHours - item.effectiveHours,
											color: "#333",
										},
									]}
									radius={20}
									animate
									animationDuration={500}
									lineWidth={15}
								/>
							</td>
							<td className="py-2 px-4">{item.grossHours}</td>
							<td className="py-2 px-4">{item.extraHours}</td>
							<td className="py-2 px-4">{item.arrival}</td>
							<td className="py-2 px-4">
								{/* Render your log icon here */}
								{/* Example: <img src={item.logIcon} alt="Log" className="w-6 h-6" /> */}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
