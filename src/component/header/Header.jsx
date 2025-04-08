import React, { useState } from "react";
import "./header.css";
import { useTheme } from "../../hook/useTheme";
import { handleScroll } from "../../utils/handleScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../sidebar/Sidebar";

export default function Header() {

	const { theme } = useTheme();
	const links = ["avisos", "nosotros", "ramas", "recursos", "contactos"];
	const [ isSidebarOpened, setIsSidebarOpened ] = useState(false);

	return (
		<>
		<header>
			<div className="headerContent">
				<div className="logo">
					<img src="/scouts_web/img/Fleur-de-lis.svg" alt="" className={theme=="dark"? "dark" : ""} />
					<span>Scouts Web</span>
				</div>
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
				<button className="menu" onClick={() => setIsSidebarOpened(true)}>
					<FontAwesomeIcon icon={faBars}/>
				</button>
			</div>
		</header>
		<Sidebar 
            isSidebarOpened={isSidebarOpened}
            setIsSidebarOpened={setIsSidebarOpened}
        />
        </>
	);
}