import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useProfile } from '../providers/ProfileProvider';
import BottomTabBar from './BottomTabBar';
import { Theme } from '../theme/Theme';
import { useColorScheme, Appearance } from 'react-native-appearance';
import UnAuthenticatedStackScreen from './stacks/UnAuthenticatedStackScreen';
import { useAppTheme } from '../providers/ThemeProvider';
import { Alert } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerBar from './DrawerBar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './stacks/HomeStackScreen';
import SettingStackScreen from './stacks/SettingStackScreen';

const Routing = () => {
	const Stack = createNativeStackNavigator();
	const Drawer = createDrawerNavigator();
	const Tab = createBottomTabNavigator();

	const { authenticatedUser } = useProfile();
	const {
		appTheme: { dark },
	} = useAppTheme();
	const { appDarkTheme, appDefaultTheme } = Theme;

	return (
		<NavigationContainer theme={dark ? appDarkTheme : appDefaultTheme}>
			{authenticatedUser ? <DrawerBar /> : <UnAuthenticatedStackScreen />}
		</NavigationContainer>
	);
};

export default Routing;
