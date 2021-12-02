import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AboutScreen from '../../screens/setting-screens/AboutScreen';
import DetailScreen from '../../screens/TESTDetailScreen';
import Scanner from '../../screens/setting-screens/Scanner';
import SettingsMainScreen from '../../screens/setting-screens/SettingsMainScreen';
import { screenPropTypes } from '../../types/types';
import CalenderScreen from '../../screens/setting-screens/CalenderScreen';
import FeedbackScreen from '../../screens/setting-screens/Feedbackscreen';

const SettingStack = () => {
	const SettingStack = createNativeStackNavigator();

	const screens: screenPropTypes[] = [
		{ name: 'SettingsMainScreen', component: SettingsMainScreen },
		{ name: 'CalenderScreen', component: CalenderScreen },
		{ name: 'ScannerScreen', component: Scanner },
		{ name: 'AboutScreen', component: AboutScreen },
		 { name: 'FeedbackScreen', component: FeedbackScreen },
	];
	const mapScreens = () =>
		screens.map(({ ...props }, index) => <SettingStack.Screen key={index} {...props} />);

	return (
		<SettingStack.Navigator screenOptions={{ headerShown: false }}>
			{mapScreens()}
		</SettingStack.Navigator>
	);
};

export default SettingStack;
