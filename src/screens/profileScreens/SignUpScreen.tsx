import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useAppTheme } from '../../providers/ThemeProvider';


const SignUpScreen = () => {
	const { appTheme } = useAppTheme();
	const styles = makeStyles(appTheme);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.textStyle}>SignUp</Text>
		</SafeAreaView>
	);
};

export default SignUpScreen;

const makeStyles = (colors: any) =>
	StyleSheet.create({
		container: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
		},
		textStyle: {
			color: colors.text,
			fontSize: 24,
		},
	});
