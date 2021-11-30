import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AboutScreen from '../../screens/setting-screens/AboutScreen';
import DetailScreen from '../../screens/DetailScreen';
import Scanner from '../../screens/setting-screens/Scanner';
import SettingsMainScreen from '../../screens/setting-screens/SettingsMainScreen';
import { screenPropTypes } from '../../types/types';

const SettingStack = createNativeStackNavigator();

const SettingStackScreen = () => {
	const screens: screenPropTypes[] = [
		{ name: 'SettingsScreen', component: SettingsMainScreen },
		// { name: 'CalenderScreen', component: CalenderScreen },
		// { name: 'AboutScreen', component: AboutScreen },
	];


	const mapScreens = () =>
		screens.map(({ ...props }, index) => <SettingStack.Screen key={index} {...props} />);
		
	return (
		<SettingStack.Navigator screenOptions={{ headerShown: false }}>
			{mapScreens()}
		</SettingStack.Navigator>
	);
};

export default SettingStackScreen;
