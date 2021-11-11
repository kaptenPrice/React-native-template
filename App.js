// import { ThemeProvider } from '@react-navigation/native';
import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import ProfileProvider from './src/providers/ProfileProvider';
import Routing from './src/routes/MainRouting';
import ThemeProvider from './src/providers/ThemeProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default App = () => {
	return (
		<AppearanceProvider>
			<ThemeProvider>
				<ProfileProvider>
					<Routing />
				</ProfileProvider>
			</ThemeProvider>
		</AppearanceProvider>
	
	);
};
