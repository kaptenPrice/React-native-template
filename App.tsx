// import { ThemeProvider } from '@react-navigation/native';
import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import ProfileProvider from './src/providers/ProfileProvider';
import Routing from './src/routes/MainRouting';
import ThemeProvider, { useAppTheme } from './src/providers/ThemeProvider';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThemeType} from "./src/types/types"
import { StyleSheet } from 'react-native';

//@ts-ignore
export default App = () => {
	return (
		<SafeAreaProvider>
			<AppearanceProvider>
				<ThemeProvider>
					<ProfileProvider>
							<Routing />
					</ProfileProvider>
				</ThemeProvider>
			</AppearanceProvider>
		</SafeAreaProvider>
	);
}; 
