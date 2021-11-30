import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenPropTypes } from '../../types/types';
import UserActivitiesScreen from '../UserActivitiesScreen';
import UserSettingsScreen from '../UserSettingsScreen';

const UserProfileStack = () => {
	const UserProfileStack = createNativeStackNavigator();

	const screens: screenPropTypes[] = [
		{ name: 'UserActivitiesScreen', component: UserActivitiesScreen },
		{ name: 'UserSettingsScreen', component: UserSettingsScreen },
	];
	const mapScreens = () =>
		screens.map(({ ...props }, index) => <UserProfileStack.Screen key={index} {...props} />);
	return <UserProfileStack.Navigator>{mapScreens()}</UserProfileStack.Navigator>;
};

export default UserProfileStack;
