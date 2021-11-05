import React from 'react';

import { Button, StyleSheet, Text, View } from 'react-native';
import { useProfile } from '../../providers/ProfileProvider';
import { useAppTheme } from '../../providers/ThemeProvider';
import { ThemeType } from '../../types/types';

const SignInScreen = ({ navigation }) => {
	const theme = useAppTheme();
	const styles = makeStyle(theme.appTheme.colors);
	const { setAuthenticatedUser } = useProfile();

	return (
		<View style={styles.container}>
			<Text style={{ color: 'red' }}>SignInScreen</Text>
			<Button title="LOGIN" onPress={() => setAuthenticatedUser(true)} />
			<Button title="SIGN UP" onPress={() => navigation.navigate('SignUp')} />
		</View>
	);
};

export default SignInScreen;

const makeStyle = (colors: ThemeType['colors']) =>
	StyleSheet.create({
		container: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: colors.background,
		},
	});
