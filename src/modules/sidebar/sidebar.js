import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.png";
import LogoSmall from "../../assets/images/logo-small.png";
import {
	FaArrowLeft,
	FaAngleDown,
	FaAngleUp,
	FaArrowRight,
} from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { IoBarChartSharp } from "react-icons/io5";

const Sidebar = () => {
	const [isMySpaceExpanded, setIsMySpaceExpanded] = useState(true);
	const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(
		window.innerWidth < 768
	);

	const toggleMySpace = () => {
		if (!isSidebarCollapsed) {
			setIsMySpaceExpanded(!isMySpaceExpanded);
		}
	};

	const toggleSidebar = () => {
		if (isMySpaceExpanded) {
			setIsMySpaceExpanded(false);
		}
		setIsSidebarCollapsed(!isSidebarCollapsed);
	};

	useEffect(() => {
		const handleResize = () => {
			setIsSidebarCollapsed(window.innerWidth < 768);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div
			className={`w-${
				isSidebarCollapsed ? "6" : "20"
			}vw h-full bg-black-150 border-r border-grey-200 transition-all ease-in-out`}
		>
			<div className="relative">
				<div className="flex w-full h-40 justify-center items-center border-b border-grey-200">
					<img
						src={isSidebarCollapsed ? LogoSmall : Logo}
						alt="Logo"
						className={` rounded-xl ${
							isSidebarCollapsed ? "w-auto h-30per" : "w-80per h-30per"
						}`}
					/>
				</div>
				<button
					className="flex absolute w-10 h-10 bg-white rounded-full -bottom-5 -right-5 border border-grey-200 justify-center items-center"
					onClick={toggleSidebar}
				>
					{isSidebarCollapsed ? <FaArrowRight /> : <FaArrowLeft />}
				</button>
			</div>
			<div className="flex w-full h-auto flex-col pr-5 pt-10 bg-black-150">
				<div className="">
					<button className="flex w-full h-auto text-black-150 bg-white rounded-r-full justify-start items-center gap-2 p-2">
						<FiHome />
						<span className={isSidebarCollapsed ? "hidden" : ""}>Home</span>
					</button>
				</div>
				<div className="my-4">
					<button
						className="flex w-full h-auto text-white bg-orange-50 rounded-r-full justify-start items-center gap-2 p-2"
						onClick={toggleMySpace}
					>
						<div className="w-auto h-auto">
							<IoBarChartSharp />
						</div>
						<div className="flex w-full justify-between items-center">
							<span className={`  ${isSidebarCollapsed ? "hidden" : ""} `}>
								My Space
							</span>
							{!isSidebarCollapsed && (
								<>{isMySpaceExpanded ? <FaAngleUp /> : <FaAngleDown />}</>
							)}
						</div>
					</button>
					{isMySpaceExpanded && (
						<div className="flex flex-col items-start ml-6 gap-2 mt-2 text-ft1 justify-start w-full truncate">
							<button className="text-white">Leave</button>
							<button className="text-orange-50">Attendance</button>
							<button className="text-white">Performance</button>
							<button className="text-white">Expenses & Travel</button>
							<button className="text-white">Help Desk</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
