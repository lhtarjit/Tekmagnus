import React from "react";
import Topbar from "./modules/topbar/topbar";
import Sidebar from "./modules/sidebar/sidebar";
import DashboardComponent from "./modules/dashboard";

const App = () => {
	return (
		<div className="flex w-full h-screen">
			<div className="w-auto">
				<Sidebar />
			</div>
			<div className="flex flex-col w-full h-full">
				<Topbar />
				<DashboardComponent />
			</div>
		</div>
	);
};

export default App;
