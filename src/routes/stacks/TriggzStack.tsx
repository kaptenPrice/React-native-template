import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DiscountsScreen from '../../screens/triggz-screens/DiscountsScreen';
import RewardsScreen from '../../screens/triggz-screens/RewardsScreen';
import TriggzMainScreen from '../../screens/triggz-screens/TriggzMainScreen';
import { screenPropTypes } from '../../types/types';

const TriggzStack = () => {
	const TriggzStack = createNativeStackNavigator();

	const screens: screenPropTypes[] = [
		{ name: 'TriggzMainScreen', component: TriggzMainScreen },
		{ name: 'RewardsScreen', component: RewardsScreen },
		{ name: 'DiscountsScreen', component: DiscountsScreen },
	];
	const mapScreens = () =>
		screens.map(({ ...props }, index) => <TriggzStack.Screen key={index} {...props} />);

	return (
		<TriggzStack.Navigator screenOptions={{ headerShown: false }}>
			{mapScreens()}
		</TriggzStack.Navigator>
	);
};
export default TriggzStack;
