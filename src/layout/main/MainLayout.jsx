import React, { useState } from "react";
import "./mainLayout.css";
import { Outlet } from "react-router-dom";
import { useTheme } from "../../hook/useTheme";

import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import Sidebar from "../../component/sidebar/Sidebar";

export default function MainLayout() {

	const { theme } = useTheme();
	const [ isSidebarOpened, setIsSidebarOpened ] = useState(false);
	
	return(
		<div className="base mainLayout" data-theme={theme? theme : "light"}>
			<Header
				setIsSidebarOpened={setIsSidebarOpened}
			/>
			<Sidebar 
				isSidebarOpened={isSidebarOpened}
				setIsSidebarOpened={setIsSidebarOpened}
			/>
			<main>
				<div className="mainContent">
					<Outlet/>
				</div>
			</main>
			<Footer/>
		</div>
	);
}