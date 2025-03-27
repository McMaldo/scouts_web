import React from "react";
import "./header.css";
import { useTheme } from "../../hook/useTheme";
import { handleScroll } from "../../utils/handleScroll";

export default function Header() {

	const { theme } = useTheme();
	const links = ["avisos", "quienes Somos", "ramas", "recursos", "contactos"];

	return (
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
			</div>
		</header>
	);
}