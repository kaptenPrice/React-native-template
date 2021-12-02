import React from 'react';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useProfile } from '../providers/ProfileProvider';
import { Theme } from '../theme/Theme';
import UnAuthenticatedStack from './stacks/UnAuthenticatedStack';
import { useAppTheme } from '../providers/ThemeProvider';
import { ThemeType } from '../types/types';
import MainTabStack from './MainTabStack';

const MainRouting = () => {
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
				{authenticatedUser ? <MainTabStack /> : <UnAuthenticatedStack />}
			</NavigationContainer>
		</>
	);
};

export default MainRouting;

const makeStyle = (colors: ThemeType['colors'], Platform) =>
	StyleSheet.create({
		container: {
			backgroundColor: colors.background,
			paddingTop: Platform.OS === 'android' ? 38 : 0
		},
	});
//https://github.com/maitriyogin/jotai-meetup
