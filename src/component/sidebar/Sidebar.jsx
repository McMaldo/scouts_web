import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./sidebar.css";
import { faCalendar, faDiamond, faHome, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar({ isSidebarOpened, setIsSidebarOpened }) {

	return(
		<>
		{isSidebarOpened && 
			<div className="closeSidebar" onClick={() => setIsSidebarOpened(false)}></div>
		}

		<aside className={isSidebarOpened ? "opened" : ""}>
			<FontAwesomeIcon 
				icon={faXmark}
				className="close"
				onClick={() => setIsSidebarOpened(false)}
			/>
			<Link to="/scouts_web/">
				<FontAwesomeIcon icon={faHome}/> Inicio
			</Link>
			<Link to="/scouts_web/calendario">
				<FontAwesomeIcon icon={faCalendar}/> Calendario
			</Link>
			<hr />
			<Link to="/scouts_web/rover">
				<FontAwesomeIcon icon={faDiamond}/> Rovers
			</Link>
		</aside>
		</>
	);
}