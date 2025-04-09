import React from "react";
import { useLocation } from "react-router-dom";
import "./header.css";
import { useTheme } from "../../hook/useTheme";
import { handleScroll } from "../../utils/handleScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header({ setIsSidebarOpened }) {

	const { theme } = useTheme();
	const links = ["avisos", "nosotros", "ramas", "recursos", "contactos"];
	const { pathname } = useLocation();
	const isLandingPage = (pathname == "/scouts_web" | pathname == "/scouts_web/");

	return (
		<>
		<header className={isLandingPage ? "withNav" : "noNav"}>
			<div className="headerContent">
				<div className="logo">
					<img src="/scouts_web/img/Fleur-de-lis.svg" alt="" className={theme=="dark"? "dark" : ""} />
					<span>Scouts Web</span>
				</div>
				{isLandingPage ?
					<nav>
						{links.map((link, index) => {
							const id = link.replace(/\s+/g, '');
							
							return (
								<a
									href={"#"+id}
									key={index}
									onClick={(event) => handleScroll(event, id)}
								>
									{link}
								</a>
							);
						})}
					</nav>
				: ""}
				<button className="menu" onClick={() => setIsSidebarOpened(true)}>
					<FontAwesomeIcon icon={faBars}/>
				</button>
			</div>
		</header>
        </>
	);
}