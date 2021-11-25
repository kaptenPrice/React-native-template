import React from 'react';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useProfile } from '../providers/ProfileProvider';
import { Theme } from '../theme/Theme';
import UnAuthenticatedStackScreen from './stacks/UnAuthenticatedStackScreens';
import { useAppTheme } from '../providers/ThemeProvider';
import DrawerBar from './DrawerBar';
import { ThemeType } from '../types/types';

const Routing = () => {
	const { authenticatedUser } = useProfile();
	const {
		appTheme: { dark, colors },
	} = useAppTheme();
	const { appDarkTheme, appDefaultTheme } = Theme;
	const styles = makeStyle(colors, Platform);

	return (
		<>
			<SafeAreaView style={styles.container} />
			<NavigationContainer theme={dark ? appDarkTheme : appDefaultTheme}>
				{authenticatedUser ? <DrawerBar /> : <UnAuthenticatedStackScreen />}
			</NavigationContainer>
		</>
	);
};

export default Routing;

const makeStyle = (colors: ThemeType['colors'], Platform) =>
	StyleSheet.create({
		container: {
			backgroundColor: colors.background,
			paddingTop: Platform.OS === 'android' ? 38 : 0
		},
	});
//https://github.com/maitriyogin/jotai-meetup
