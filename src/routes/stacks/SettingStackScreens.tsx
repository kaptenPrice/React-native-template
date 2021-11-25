import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AboutScreen from '../../screens/AboutScreen';
import DetailScreen from '../../screens/DetailScreen';
import Scanner from '../../screens/Scanner';
import SettingsScreen from '../../screens/SettingsScreen';
import { screenPropTypes } from '../../types/types';

const SettingStack = createNativeStackNavigator();

const SettingStackScreen = () => {
	const screens: screenPropTypes[] = [
		{ name: 'SettingsScreen', component: SettingsScreen },
		{ name: 'DetailsScreen', component: DetailScreen },
		{ name: 'ScannerScreen', component: Scanner },
		{ name: 'AboutScreen', component: AboutScreen },
	];
	const mapScreens = () => {
		return screens.map(({ ...props }, index) => <SettingStack.Screen key={index} {...props} />);
	};

	return (
		<SettingStack.Navigator screenOptions={{ headerShown: false }}>
			{mapScreens()}
		</SettingStack.Navigator>
	);
};

export default SettingStackScreen;
