import React from "react";
import Dashboard from "./dashboard";

const DashboardComponent = () => {
	return (
		<div className="flex flex-col w-full h-full bg-black-150 p-7 gap-7">
			<span className="text-white text-ft3">
				<span className=" font-semibold">My Space</span> /{" "}
				<span className="text-orange-50">Attendance</span>
			</span>
			<Dashboard />
		</div>
	);
};

export default DashboardComponent;
