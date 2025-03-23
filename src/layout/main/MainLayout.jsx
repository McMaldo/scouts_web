import React from "react";
import "./mainLayout.css";
import { Outlet } from "react-router-dom";
import { useTheme } from "../../hook/useTheme";

import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import Menu from "../../component/menu/Menu";

export default function MainLayout() {
	const { theme } = useTheme();
	
	return(
		<div className="base mainLayout" data-theme={theme? theme : "light"}>
			<Header/>
			<main>
				<Outlet/>
			</main>
			<Footer/>
			<Menu/>
		</div>
	);
}