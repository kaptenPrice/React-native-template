import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabStack from '../MainTabStack';
import { screenPropTypes } from '../../types/types';
import Feedback from '../../screens/main-screens/Feedback';

const MainStack = () => {
	const MainStack = createNativeStackNavigator();

	const screens: screenPropTypes[] = [
		{ name: 'MainTabStack', component: MainTabStack },
		{ name: 'Feedback', component: Feedback },
	];

	const mapScreens = () => {
		return screens.map(({ ...props }, index) => <MainStack.Screen key={index} {...props} />);
	};

	return (
		<MainStack.Navigator screenOptions={{ headerShown: false }}>
			{mapScreens()}
		</MainStack.Navigator>
	);
};

export default MainStack;
