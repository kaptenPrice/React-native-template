import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenPropTypes } from '../../types/types';
import ActivityScreen from '../../screens/ActivityScreen';
import Filters from '../../screens/activity-screens/Filters';
import ActivitiesFilter from '../../screens/activity-screens/ActivitiesFilter';
import ClubsFilter from '../../screens/activity-screens/ClubsFilter';
import InstructorsFilter from '../../screens/activity-screens/InstructorsFilter';

const ActivitiesStack = () => {
	const ActivityStack = createNativeStackNavigator();

	const screens: screenPropTypes[] = [
		{
			name: 'ActivityScreen',
			component: ActivityScreen,
			
		},
		{ name: 'Filters', component: Filters },
		{
			//TODO RENAME TO GeoFiltredActivities
			name: 'ActivitiesFilter',
			component: ActivitiesFilter,
		},
		{ name: 'ClubsFilter', component: ClubsFilter },
		{ name: 'InstructorsFilter', component: InstructorsFilter },
	];

	const mapScreens = () => {
		return screens.map(({ ...props }, index) => (
			<ActivityStack.Screen key={index} {...props} />
		));
	};

	return (
		<ActivityStack.Navigator screenOptions={{ headerShown: false }}>
			{mapScreens()}
		</ActivityStack.Navigator>
	);
};

export default ActivitiesStack;
