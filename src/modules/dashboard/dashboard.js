import React from "react";
import { IoMdTime } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { PieChart } from "react-minimal-pie-chart";

const Dashboard = () => {
	return (
		<div className="flex w-full h-auto bg-black-75 border border-grey-200 rounded-md p-4 gap-4 justify-between overflow-x-auto">
			<div className="flex flex-col w-115 gap-4">
				<span className="text-ft42 font-bold text-white">
					Attendance Status
				</span>
				<div className="flex w-full h-8 gap-2 text-white items-center">
					<span className="text-ft3">Last Week</span>
					<FaAngleDown />
				</div>
				<div className="flex w-full h-full bg-black-100 rounded-lg border border-grey-200 p-2 gap-2">
					<div className="flex w-50per">
						<div className="flex text-white justify-center items-center">
							<IoMdTime className="w-15 h-15" />
							<div className="flex flex-col w-full justify-center items-center gap-1">
								<span className="text-ft42">Avg hrs / Day</span>
								<span className="text-ft1">( 6hrs 48m )</span>
							</div>
						</div>
					</div>
					<div className="flex w-50per">
						<div className="flex text-white justify-center items-center gap-1">
							<div className="flex w-10 h-10">
								<PieChart
									data={[
										{ value: 95, color: "#4CAF50" },
										{ value: 5, color: "#FF0000" },
									]}
								/>
							</div>
							<div className="flex flex-col w-full justify-center items-center gap-1">
								<span className="text-ft42">On Time Arrival</span>
								<span className="text-ft1">95%</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col w-80 gap-3">
				<span className="w-full text-center text-ft42 font-bold text-white">
					Timings
				</span>
				<div className="flex w-full gap-2 text-white items-center">
					<div className="flex w-full gap-2 justify-between">
						{[..."MTWTFSS"].map((day, index) => (
							<div
								key={index}
								className={`flex w-8 h-full rounded-full border border-grey-200 p-1 justify-center items-center ${
									index === 2
										? "text-orange-50"
										: index === 5
										? "text-green-50"
										: index === 6
										? "text-red-50"
										: ""
								}`}
							>
								{day}
							</div>
						))}
					</div>
				</div>
				<div className="flex w-full h-full gap-2">
					<div className="flex w-full h-full bg-black-100 rounded-lg border border-grey-200 px-4 py-1">
						<div className="flex flex-col w-full h-full gap-1 text-white justify-center items-center">
							<span className=" text-ft4">Today (09:30AM - 06:30PM)</span>
							<div className="flex gap-3">
								<span className=" text-ft2">Duration: 9h 0m</span>
								<span className=" text-ft2">Break: 0m</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col w-115 gap-4">
				<span className="w-full text-center text-ft42 font-bold text-white">
					Action
				</span>
				<div className="flex w-full h-8 gap-2 text-white items-center">
					<span className="invisible">Last Week</span>
				</div>
				<div className="flex w-full h-full gap-2">
					<div className="flex w-50per h-full bg-black-100 rounded-lg border border-grey-200 px-4 py-1">
						<div className="flex flex-col w-full h-full gap-1 text-white justify-center items-center">
							<span className=" text-ft6">04:04:39 PM</span>
							<span className=" text-ft2">Wed 06, Dec 2023</span>
						</div>
					</div>
					<div className="flex w-50per h-full">
						<div className="flex flex-col w-full h-full gap-1 text-black-150 justify-center items-center">
							<button className="flex w-full h-full text-ft2 bg-orange-50 p-2 justify-center items-center rounded-lg font-bold">
								Leave Request
							</button>
							<button className="flex w-full h-full text-ft2 bg-orange-50 p-2 justify-center items-center rounded-lg font-bold">
								Work From Home
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
