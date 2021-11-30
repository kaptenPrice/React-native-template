import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import AppButton from '../comp/AppButton';
import { useAppTheme } from '../providers/ThemeProvider';
import { ThemeType } from '../types/types';
import DrawerMenuIcon from '../comp/DrawerMenuIcon';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { useFetch } from '../helper/useFetch';
import { useActivity } from '../providers/ActivityProvider';

const StartScreen = ({
	navigation,
}: NativeStackScreenProps<any, any> & DrawerScreenProps<any, any>) => {
	const { appTheme } = useAppTheme();
	const styles = makeStyle(appTheme.colors);

	//USE TO SET screen options from outside of routing
	/*	useLayoutEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<AppButton
					buttonStyle={styles.buttonStyle}
					onPress={() => setAuthenticatedUser(false)}
					textStyle={styles.titleStyle}
					title="LOGOUT"
				/>
			),
			headerRight: () => (
				<AppButton
					buttonStyle={styles.buttonStyle}
					onPress={() => navigation.navigate('DrawerBar')}
					textStyle={styles.titleStyle}
					title="Settings"
				/>
			),
		});
	}, [navigation]);*/

	return (
		<>
			{/* <DrawerMenuIcon onPress={() => navigation.openDrawer()} /> */}
			<View style={styles.container}>
				<Text style={styles.textStyle}>START-SCREEN</Text>
				<AppButton
					buttonStyle={styles.buttonStyle}
					onPress={() => navigation.navigate('ActivityScreen', {screen:"ActivityScreen"})}
					titleStyle={styles.titleStyle}
					title="ActivityScreen"
				/>
			</View>
		</>
	);
};
export default StartScreen;

const makeStyle = (colors: ThemeType['colors']) =>
	StyleSheet.create({
		container: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'space-evenly',
			flexDirection: 'column',
		},
		textStyle: {
			color: colors.text,
		},
		buttonStyle: {
			padding: 15,
			backgroundColor: colors.buttonBackground,
			borderRadius: 14,
			shadowColor: colors.shadowColor,
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.5,
			elevation: 2,
		},
		titleStyle: {
			color: colors.buttonTitle,
			fontSize: 12,
			paddingVertical: 5,
			paddingHorizontal: 8,
		},
	});
