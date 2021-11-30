import React from 'react';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useProfile } from '../providers/ProfileProvider';
import { Theme } from '../theme/Theme';
import UnAuthenticatedStack from './stacks/UnAuthenticatedStack';
import { useAppTheme } from '../providers/ThemeProvider';
import DrawerBarX from './DrawerBarX';
import { ThemeType } from '../types/types';
import MainStack from './stacks/MainStackScreen';

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
			<NavigationContainer >
				{authenticatedUser ? <MainStack /> : <UnAuthenticatedStack />}
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
