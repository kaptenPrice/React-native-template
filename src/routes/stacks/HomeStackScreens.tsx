import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../../screens/start-screen/StartScreen';
import DetailScreen from '../../screens/TESTDetailScreen';
import CalenderScreen from '../../screens/setting-screens/CalenderScreen';
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
		{ name: 'HelpScreen', component: CalenderScreen },
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
