import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import AppButton from '../comp/AppButton';
import { useAppTheme } from '../providers/ThemeProvider';
import { ThemeType } from '../types/types';
import DrawerMenuIcon from '../comp/DrawerMenuIcon';

const AboutScreen = ({ navigation }) => {
	const { appTheme } = useAppTheme();
	const styles = makeStyles(appTheme.colors);

	return (
		<>
			<DrawerMenuIcon onPress={() => navigation.openDrawer()} />
			<View style={styles.container}>
				<Text style={styles.textStyle}>About</Text>
				<AppButton
					buttonStyle={styles.buttonStyle}
					onPress={() => navigation.navigate('HelpScreen')}
					textStyle={styles.titleStyle}
					title="Goto Help"
				/>
				<AppButton 	buttonStyle={styles.buttonStyle}/>
			</View>
		</>
	);
};

export default AboutScreen;

const makeStyles = (colors: ThemeType['colors']) =>
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
