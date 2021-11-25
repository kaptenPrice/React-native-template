import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './stacks/HomeStackScreens';
import SettingStackScreen from './stacks/SettingStackScreens';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
	return (
		<>
			<Tab.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
				<Tab.Screen
					name="HomeStack"
					component={HomeStackScreen}
					initialParams={{ post: 42 }}
				/>
				<Tab.Screen
					name="SettingsStack"
					component={SettingStackScreen}
					options={{ unmountOnBlur: true }}
				/>
			</Tab.Navigator>
		</>
	);
};

export default BottomTabBar;

const styles = StyleSheet.create({});
