import { useLocalStorage } from "@uidotdev/usehooks";

export const useTheme = () => {

	const themeList = ["dark", "light", "pinky"];
	const isDarkDefault = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const [themeID, setThemeID] = useLocalStorage(isDarkDefault ? 0 : 1);

	const theme = themeList[themeID]

	const setTheme = (newTheme) => {
		newTheme ?
		setThemeID(newTheme) :
		setThemeID((prevThemeID) => (prevThemeID === themeList.length - 1 ? 0 : prevThemeID + 1));
	};

	return { theme, setTheme };
};
