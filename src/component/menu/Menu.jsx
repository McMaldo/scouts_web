import { useState } from "react";
import s from "./menu.module.css";
import { useLocalStorage } from "@uidotdev/usehooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCake, faMoon, faPalette, faSun, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from "../../hook/useTheme";

function extractCssVarValue(cssVar) {
	let base = document.querySelector("#root .base");
	let baseStyles = getComputedStyle(base);
	return baseStyles.getPropertyValue(cssVar);
}

function PalettePanel(){
	let palette = ["main", "font", "bg"];

	return(
		<div className={s.selectorPanel}>
			{palette.map((paletteColor, paletteColorKey) => (
				<div className={s.option} key={paletteColorKey}>
					<div className={s.desc}>{paletteColor}</div>
					<div className={s.value}>{extractCssVarValue(`--${paletteColor}-color`)}</div>
					<div className={s.preview}>
						<div style={{background: `var(--${paletteColor}-color)`}}></div>
					</div>
				</div>
			))}
			<div className={s.conector}></div>
		</div>
	)
}
function ThemePanel({themeIcons}){
	let themeList = ["dark", "light", "pinky"];
	let { theme, setTheme } = useTheme();

	return(
		<div className={s.selectorPanel}>
			{themeList.map((themeOption, themeKey) => (
				<div 
					className={s.option+" "+(theme == themeOption ? s.selected : "")} 
					onClick={() => setTheme(themeKey)}
					key={themeKey}
				>
					<div className={s.value}>
						<FontAwesomeIcon icon={themeIcons[themeOption]}/>
						<span>{themeOption}</span>
					</div>
					<div className={s.preview} data-theme={themeOption} style={{background: `var(--bg)`}}>
						<div style={{background: `var(--main-color)`}}></div>
					</div>
				</div>
			))}
			<div className={s.conector}></div>
		</div>
	)
}
function LangPanel(){
	let [isTranslatedToEnglish, setTranslatedToEnglish] = useLocalStorage("translatedToEnglish", true);
	let langList = [{lang:"Español",icon:"SpanishFlag.webp"}, {lang:"English",icon:"EnglishFlag.webp"}];

	return(
		<div className={s.selectorPanel}>
			{langList.map(({lang, icon}, langKey) => (
				<div 
					className={s.option+" "+(isTranslatedToEnglish & lang == "English" | !isTranslatedToEnglish & lang == "Español" ? s.selected : "")} 
					onClick={() => setTranslatedToEnglish(lang === "English")} 
					key={langKey}
				>
					<div className={s.value}>
						<img src={"/scouts_web/icon/"+icon} alt="" />
						<span>{lang}</span>
					</div>
				</div>
			))}
			<div className={s.conector}></div>
		</div>
	)
}

export default function Menu() {

	let [isExpanded, setExpanded] = useState(true);
	let [panelOpened, setPanelOpened] = useState("");

	let { theme, setTheme } = useTheme();
	let themeIcons = {
		dark: faMoon,
		light: faSun,
		pinky: faCake
	}

	let [isTranslatedToEnglish, setTranslatedToEnglish] = useLocalStorage("translatedToEnglish", true);

	return(
		<div className={s.menu+" "+(panelOpened == "palette" && s.openedTopPanel)}>
			{isExpanded && (<>
				<div 
					className={s.btnContainer}
					onMouseEnter={() => setPanelOpened("palette")}
					onMouseLeave={() => setPanelOpened("")}
				>
					{panelOpened == "palette" && <PalettePanel/>}
					<button onClick={() => setPanelOpened("")}>
						<FontAwesomeIcon icon={faPalette}/>
					</button>
				</div>
				<div 
					className={s.btnContainer} 
					onMouseEnter={() => setPanelOpened("theme")}
					onMouseLeave={() => setPanelOpened("")}
				>
					{panelOpened == "theme" && <ThemePanel themeIcons={themeIcons}/>}
					<button 
						onClick={() => setTheme()}  
						title={isTranslatedToEnglish? "Switch Theme" : "Cambiar Tema"}
					>
						<FontAwesomeIcon icon={themeIcons[theme]}/>
					</button>
				</div>
				<div 
					className={s.btnContainer} 
					onMouseEnter={() => setPanelOpened("lang")}
					onMouseLeave={() => setPanelOpened("")}
				>
					{panelOpened == "lang" && <LangPanel/>}
					<button
						onClick={() => setTranslatedToEnglish(!isTranslatedToEnglish)}
						title={isTranslatedToEnglish? "Cambiar a Español / Switch to Spanish" : "Switch to English / Cambiar a Inglés"}
					>
						{isTranslatedToEnglish? "EN" : "ES"}
					</button>
				</div>
			</>)}
			<button className={isExpanded? s.close : ""} onClick={() => setExpanded(!isExpanded)}>
				<FontAwesomeIcon icon={isExpanded? faXmark : faBars}/>
			</button>
		</div>
	);
}