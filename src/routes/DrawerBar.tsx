import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItem,
	DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import { useProfile } from '../providers/ProfileProvider';
import AboutScreen from '../screens/AboutScreen';
import HelpScreen from '../screens/HelpScreen';
import BottomTabBar from './BottomTabBar';

const DrawerBar = () => {
	const Drawer = createDrawerNavigator();
	const { setAuthenticatedUser } = useProfile();

	return (
		<Drawer.Navigator
			initialRouteName="HomeScreen"
			drawerContent={(props) => {
				return (
					<DrawerContentScrollView {...props}>
						<DrawerItemList {...props} />
						<DrawerItem
							label="By bye"
							onPress={() => [
								props.navigation.navigate('Settings', { screen: 'SignIn' }),
								setAuthenticatedUser(false),
							]}
						/>
					</DrawerContentScrollView>
				);
			}}>
			<Drawer.Screen name="Home" component={BottomTabBar} />
			<Drawer.Screen name="HelpScreen" component={HelpScreen} />
			<Drawer.Screen name="AboutScreen" component={AboutScreen} />
		</Drawer.Navigator>
	);
};

export default DrawerBar;
