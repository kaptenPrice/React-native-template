import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './stacks/HomeStackScreens';
import SettingStackScreen from './stacks/TestStack';
import StartScreen from '../screens/StartScreen';
import ActivitiesStack from './stacks/ActivitiesStack';
import WellnessOnline from '../screens/WellnessOnline';
import TriggzStack from './stacks/TriggzStack';
import MenuStack from './stacks/MenuStack';

const Tab = createBottomTabNavigator();

const MainTabStack = () => {
	return (
		<>
			<Tab.Navigator initialRouteName="StartScreen" screenOptions={{ headerShown: false }}>
				<Tab.Screen
					name="Home"
					component={StartScreen}
					// initialParams={{ post: 42 }}
				/>
				<Tab.Screen
					name="Activities"
					component={ActivitiesStack}
					options={{ unmountOnBlur: true }}
				/>
				<Tab.Screen
					name="WellnessOnline"
					component={WellnessOnline}
					options={{ unmountOnBlur: false }}
				/>
				<Tab.Screen
					name="Triggz"
					component={TriggzStack}
					options={{ unmountOnBlur: true }}
				/>
				<Tab.Screen
					name="MoreStack"
					component={MenuStack}
					options={{ unmountOnBlur: false }}
				/>
			</Tab.Navigator>
		</>
	);
};

export default MainTabStack;

const styles = StyleSheet.create({});
