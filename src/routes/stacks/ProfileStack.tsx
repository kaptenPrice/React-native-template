import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';
import UserActivitiesScreen from '../../screens/UserActivitiesScreen';
import UserSettingsScreen from '../../screens/UserSettingsScreen';
import { screenPropTypes } from '../../types/types';
import MenuStack from './MenuStack';

const UserStack = () => {
	const MoreMenuStack = createNativeStackNavigator();

	const screens: screenPropTypes[] = [
		//TODO RENAME TO MOREMENU
		{ name: 'UserActivitiesScreen', component: UserActivitiesScreen }, //Screen
		{ name: 'UserSettingsScreen', component: UserSettingsScreen }, //Shows all pt screens
		// { name: '', component: UserStack }, //Shows profile mainScreen and profileSettings(tabBar right now)
	];

	const mapScreens = () =>
		screens.map(({ ...props }, index) => <MoreMenuStack.Screen key={index} {...props} />);

	return <MoreMenuStack.Navigator>{mapScreens()}</MoreMenuStack.Navigator>;
};

export default UserStack;
