/*import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItem,
	DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import { useProfile } from '../providers/ProfileProvider';
import { useAppTheme } from '../providers/ThemeProvider';
import AboutScreen from '../screens/setting-screens/AboutScreen';
import HelpScreen from '../screens/setting-screens/HelpScreen';
import MainTabStack from './MainTabStack';

const DrawerBarX = () => {
	const Drawer = createDrawerNavigator();
	const { setAuthenticatedUser } = useProfile();
	const handleLogout = (props) => {
		setAuthenticatedUser(false);
	};
	const { appTheme } = useAppTheme();

	return (
		<Drawer.Navigator
			initialRouteName="HomeScreen"
			// defaultScreenOptions={{unmountOnBlur:true}}
			screenOptions={{ headerShown: false }}
			drawerContent={(props) => {
				return (
					<DrawerContentScrollView {...props}>
						<DrawerItemList {...props} />
						<DrawerItem label="Logout" onPress={() => handleLogout(props)} />
					</DrawerContentScrollView>
				);
			}}
		>
			<Drawer.Screen name="MainScreens" component={MainTabStack}  />
			<Drawer.Screen name="HelpScreen" component={HelpScreen} />
			<Drawer.Screen name="AboutScreen" component={AboutScreen} />
		</Drawer.Navigator>
	);
};

export default DrawerBarX;
*/
