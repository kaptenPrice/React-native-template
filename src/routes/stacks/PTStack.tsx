import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FilterByClubs from '../../screens/pt-screens/FilterByClubs';
import FilterBySkills from '../../screens/pt-screens/FilterBySkills';
import FilterByType from '../../screens/pt-screens/FilterByType';
import PTDetailScreen from '../../screens/pt-screens/PTDetailScreen';
import PTFilterScreen from '../../screens/pt-screens/PTFilterScreen';
import PTListScreen from '../../screens/pt-screens/PTListScreen';
import { screenPropTypes } from '../../types/types';

const PTStack = () => {
	const PTStack = createNativeStackNavigator();
	const screens: screenPropTypes[] = [
		{ name: 'PTList', component: PTListScreen },
		{ name: 'PTDetailScreen', component: PTDetailScreen },
		{ name: 'PTFilterScreen', component: PTFilterScreen },
		{ name: 'FilterByClubs', component: FilterByClubs },
		{ name: 'FilterByType', component: FilterByType },
		{ name: 'FilterBySkills', component: FilterBySkills },
	];

	const mapScreens = () =>
		screens.map(({ ...props }, index) => <PTStack.Screen key={index} {...props} />);

	return <PTStack.Navigator>{mapScreens()}</PTStack.Navigator>;
    
};

export default PTStack;
