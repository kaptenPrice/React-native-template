import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import React from 'react';
import { screenPropTypes } from '../../types/types';
import MenuScreen from '../../screens/MenuScreen';
import PTStack from './PTStack';
import UserProfileStack from '../../screens/user-profile/UserProfileStack';

const MenuStack = () => {
	const MenuStack = createNativeStackNavigator();
	const screens: screenPropTypes[] = [
		//TODO RENAME TO MOREMENU
		{ name: 'MenuScreen', component: MenuScreen }, //shows all available screeens and stacks eg. Menu
		{ name: 'PTStack', component: PTStack }, //Shows all pt screens
		{ name: 'UserProfileStack', component: UserProfileStack }, //Shows profile mainScreen and profileSettings(tabBar right now)
	];
	const mapScreens = () =>
		screens.map(({ ...props }, index) => <MenuStack.Screen key={index} {...props} />);

	return <MenuStack.Navigator>{mapScreens()}</MenuStack.Navigator>;
};

export default MenuStack;
