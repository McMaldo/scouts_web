import { useLocalStorage } from "@uidotdev/usehooks";

export const useTheme = () => {

	const themeList = ["dark", "light", "pinky"];
	const isDarkDefault = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const [themeID, setThemeID] = useLocalStorage("themeID", isDarkDefault ? 0 : 1);

	const theme = themeList[themeID]

	const setTheme = (newTheme) => {
		if(Number(newTheme)){
			if(newTheme != 0 & newTheme != 1 & newTheme != 2){
				console.error(`error setting new theme "${newTheme}"`);
				return;
			}
			setThemeID(newTheme);
		}else{
			setThemeID((prevThemeID) => (prevThemeID === themeList.length - 1 ? 0 : prevThemeID + 1));
		}
	};

	return { theme, setTheme };
};
