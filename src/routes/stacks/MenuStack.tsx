import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { screenPropTypes } from '../../types/types';
import MenuMainScreen from '../../screens/more-menu-screens/MenuScreen';
import PTStack from './PTStack';
import UserProfileStack from './UserProfileStack';
import SettingStack from './SettingsStack';

const MenuStack = () => {
	const MenuStack = createNativeStackNavigator();
	const screens: screenPropTypes[] = [
		{ name: 'MenuMainScreen', component: MenuMainScreen },
		{ name: 'PTStack', component: PTStack }, //Shows all pt screens
		{ name: 'UserProfileStack', component: UserProfileStack, options: { headerShown: false } }, //Shows profile mainScreen and profileSettings(tabBar right now)
		{ name: 'SettingsStack', component: SettingStack, options: { headerShown: false } },
	];
	const mapScreens = () =>
		screens.map(({ ...props }, index) => <MenuStack.Screen key={index} {...props} />);

	return <MenuStack.Navigator>{mapScreens()}</MenuStack.Navigator>;
};

export default MenuStack;
