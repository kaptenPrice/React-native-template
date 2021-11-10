import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useProfile } from '../providers/ProfileProvider';
import { Theme } from '../theme/Theme';
import UnAuthenticatedStackScreen from './stacks/UnAuthenticatedStackScreens';
import { useAppTheme } from '../providers/ThemeProvider';
import DrawerBar from './DrawerBar';

const Routing = () => {
	const { authenticatedUser } = useProfile();
	const {
		appTheme: { dark },
	} = useAppTheme();
	const { appDarkTheme, appDefaultTheme } = Theme;

	return (
		<NavigationContainer theme={dark ? appDarkTheme : appDefaultTheme}>
			{authenticatedUser ? <DrawerBar /> : <UnAuthenticatedStackScreen />}
		</NavigationContainer>
	);
};

export default Routing;
