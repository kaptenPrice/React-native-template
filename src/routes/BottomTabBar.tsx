import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './stacks/HomeStackScreen';
import SettingStackScreen from './stacks/SettingStackScreen';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
	return (
		<>
			<Tab.Navigator screenOptions={{ headerShown: false }}>
				<Tab.Screen
					name="Home"
					component={HomeStackScreen}
					initialParams={{ post: 42 }}
				/>
				<Tab.Screen name="Settings" component={SettingStackScreen} />
			</Tab.Navigator>
		</>
	);
};

export default BottomTabBar;

const styles = StyleSheet.create({});
