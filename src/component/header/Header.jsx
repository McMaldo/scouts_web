import React from "react";
import "./header.css";
import { useTheme } from "../../hook/useTheme";

export default function Header() {

	const { theme } = useTheme();
	const links = ["avisos", "quienes Somos", "ramas", "cursos", "contactos"];

	const handleScroll = (event, id) => {
		event.preventDefault();
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

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