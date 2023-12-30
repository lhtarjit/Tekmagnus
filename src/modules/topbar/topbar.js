import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import BlackWhite from "../../assets/images/wp10820040.webp";
import ProfilePic from "../../assets/images/sample_profile.jpeg";

const Topbar = () => {
	return (
		<div className="flex w-full h-auto bg-black-150 p-2 md:p-5 justify-center ">
			<div className="flex flex-col-reverse md:flex-row w-full md:w-80per gap-2 md:gap-8 h-full items-center justify-center">
				<div className="flex w-full h-full justify-end">
					<div className="flex w-full md:w-80per h-full justify-between bg-black-75 py-2 px-4 gap-1 items-center rounded-xl border border-grey-200">
						<input
							type="text"
							placeholder="Search"
							className="w-full h-full focus:outline-none bg-transparent placeholder:text-white text-ft4 text-white"
						/>
						<div className="w-8 h-8">
							<IoSearch className="text-white w-full h-full" />
						</div>
					</div>
				</div>

				<div className="flex w-full md:w-80per xs:h-auto sm:h-full gap-8 md:gap-4 justify-between md:justify-start">
					<div className="relative w-fit h-full">
						<div className="flex w-auto h-full justify-center items-center p-2 rounded-xl bg-black-75 relative border border-grey-200">
							<IoMdNotificationsOutline className="text-white w-4 h-4 md:w-8 md:h-8" />
						</div>
						<div className="w-3 h-3 bg-red-50 rounded-full absolute top-0 right-0 -mt-1 -mr-1"></div>
					</div>
					<div className="relative w-fit h-full">
						<div className="flex w-auto h-full justify-center items-center p-2 rounded-xl bg-black-75 relative border border-grey-200">
							<MdOutlineMailOutline className="text-white w-4 h-4 md:w-8 md:h-8" />
						</div>
						<div className="w-3 h-3 bg-red-50 rounded-full absolute top-0 right-0 -mt-1 -mr-1"></div>
					</div>
					<img
						src={BlackWhite}
						alt="Profile"
						className="w-8 h-8 md:w-13 md:h-13 rounded-full border-2 border-white"
					/>
					<img
						src={ProfilePic}
						alt="Profile"
						className="w-8 h-8 md:w-13 md:h-13 rounded-full border-2 border-white"
					/>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
