import React, { useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./sidebar.css";
import { faCalendar, faDiamond, faHome, faXmark, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useTheme } from "../../hook/useTheme";
import { ThemePanel, LangPanel} from "../menu/Menu";

export default function Sidebar({ isSidebarOpened, setIsSidebarOpened }) {
	
	let [panelOpened, setPanelOpened] = useState("");
	
	let { theme, setTheme } = useTheme();
	let themeIcons = {
		dark: faMoon,
		light: faSun,
		pinky: faSun
	}

	let [isTranslatedToEnglish] = useLocalStorage("translatedToEnglish", false);
	let langIcons = {
		Español:"SpanishFlag.webp", 
		English:"EnglishFlag.webp"
	};

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
			<section>
				<Link to="/scouts_web">
					<FontAwesomeIcon icon={faHome}/> Inicio
				</Link>
				<Link to="/scouts_web/calendario">
					<FontAwesomeIcon icon={faCalendar}/> Calendario
				</Link>
				<Link to="/scouts_web/rover">
					<FontAwesomeIcon icon={faDiamond}/> Rovers
				</Link>
			</section>
			<section>
				<hr />
				<div 
					className={"btnContainer"} 
					onMouseEnter={() => setPanelOpened("theme")}
					onMouseLeave={() => setPanelOpened("")}
				>
					{panelOpened == "theme" && <ThemePanel themeIcons={themeIcons}/>}
					<button
						title={isTranslatedToEnglish? "Switch Theme" : "Cambiar Tema"}
					>
						<FontAwesomeIcon icon={themeIcons[theme]}/>
						<span>{theme} Theme</span>
					</button>
				</div>
				<div 
					className={"btnContainer"} 
					onMouseEnter={() => setPanelOpened("lang")}
					onMouseLeave={() => setPanelOpened("")}
				>
					{panelOpened == "lang" && <LangPanel/>}
					<button
						title={isTranslatedToEnglish? "Cambiar a Español / Switch to Spanish" : "Switch to English / Cambiar a Inglés"}
					>
						<img src={"/scouts_web/icon/" + langIcons[isTranslatedToEnglish? "English" : "Español"]} alt="" />
						<span>{isTranslatedToEnglish? "English" : "Español"}</span>
					</button>
				</div>
			</section>
		</aside>
		</>
	);
}