import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../../screens/StartScreen';
import DetailScreen from '../../screens/DetailScreen';
import HelpScreen from '../../screens/setting-screens/HelpScreen';
import { screenPropTypes } from '../../types/types';
const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
	const screens: screenPropTypes[] = [
		{
			name: 'HomeScreen',
			component: StartScreen,
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
