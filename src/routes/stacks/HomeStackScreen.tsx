import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import DetailScreen from '../../screens/DetailScreen';
import HelpScreen from '../../screens/HelpScreen';
import { screenPropTypes } from '../../types/types';
const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
	const screens: screenPropTypes[] = [
		{
			name: 'HomeScreen',
			component: HomeScreen,
		},
		{
			name: 'DetailsScreen',
			component: DetailScreen,
		},
		{ name: 'HelpScreen', component: HelpScreen },
	];
	const mapScreens = () => {
		return screens.map(({ ...props }, index) => (
			<HomeStack.Screen key={index} {...props} />
		));
	};

	return (
		<HomeStack.Navigator screenOptions={{ headerShown: false }}>
			{mapScreens()}
		</HomeStack.Navigator>
	);
};

export default HomeStackScreen;
