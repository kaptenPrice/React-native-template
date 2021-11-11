import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './stacks/HomeStackScreens';
import SettingStackScreen from './stacks/SettingStackScreens';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
	return (
		<>
			<Tab.Navigator screenOptions={{ headerShown: false }}>
				<Tab.Screen
					name="HomeStack"
					component={HomeStackScreen}
					initialParams={{ post: 42 }}
				/>
				<Tab.Screen name="SettingsStack" component={SettingStackScreen} />
			</Tab.Navigator>
		</>
	);
};

export default BottomTabBar;

const styles = StyleSheet.create({});
