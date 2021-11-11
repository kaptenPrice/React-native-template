import React, {
	createContext,
	useContext,
	useEffect,
	useState,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
} from 'react';
import { useColorScheme } from 'react-native';
import { Theme } from '../theme/Theme';
import { ThemeType } from '../types/types';

const ThemeContext = createContext(null);

const ThemeProvider = ({ children }: PropsWithChildren<any>) => {
	const scheme = useColorScheme();
	const { appDarkTheme, appDefaultTheme } = Theme;
	const [appTheme, setAppTheme] = useState<ThemeType | null>(null);

	const changeTheme = (newTheme: 'dark' | 'ligth') => {
		setAppTheme(
			newTheme === 'dark' ? Theme.appDarkTheme : Theme.appDefaultTheme
		);
	};

	useEffect(() => {
		if (scheme === null) {
			setAppTheme(appDefaultTheme);
		} else {
			setAppTheme(scheme === 'dark' ? appDarkTheme : appDefaultTheme);
		}
	
	}, [scheme]);

	return (
		<ThemeContext.Provider value={{ appTheme, setAppTheme: changeTheme }}>
			{appTheme !== null && children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;

export const useAppTheme: UseThemeType = () => useContext(ThemeContext);

type UseThemeType = () => {
	appTheme: ThemeType;
	setAppTheme: Dispatch<SetStateAction<any>>;
};
