// import { ThemeProvider } from '@react-navigation/native';
import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import ProfileProvider from './src/providers/ProfileProvider';
import MainRouting from './src/routes/MainRouting';
import ThemeProvider, { useAppTheme } from './src/providers/ThemeProvider';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThemeType} from "./src/types/types"
import { StyleSheet } from 'react-native';
import ActivityProvider from './src/providers/ActivityProvider';

//@ts-ignore
export default App = () => {
	return (
		<SafeAreaProvider>
			<AppearanceProvider>
				<ThemeProvider>
					<ProfileProvider>
						{/* <ActivityProvider> */}
							<MainRouting />
							{/* </ActivityProvider> */}
					</ProfileProvider>
				</ThemeProvider>
			</AppearanceProvider>
		</SafeAreaProvider>
	);
}; 
