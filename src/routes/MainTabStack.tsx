import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StartScreen from '../screens/start-screen/StartScreen';
import ActivitiesStack from './stacks/ActivitiesStack';
import WellnessOnline from '../screens/wellnes-online-screens/WellnessOnline';
import TriggzStack from './stacks/TriggzStack';
import MenuStack from './stacks/MenuStack';
import DrawerMenuIcon from '../components/DrawerMenuIcon';


//USE SCREEN NAMES TO NAVIGATE TO RIGHT STACK
//EG. navigation.navigate('Activities', {screen:"ActivityScreen"})

const MainTabStack = () => {
	const Tab = createBottomTabNavigator();
	return (
		<>
			<Tab.Navigator initialRouteName="StartScreen" screenOptions={{ headerShown: false }}>
				<Tab.Screen
					name="Home"
					component={StartScreen}
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
					name="MoreMenu"
					component={MenuStack}
					options={{ unmountOnBlur: false }}
					
				/>
			</Tab.Navigator>
		</>
	);
};

export default MainTabStack;

const styles = StyleSheet.create({});
