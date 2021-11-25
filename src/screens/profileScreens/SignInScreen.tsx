import React from 'react';

import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppButton from '../../comp/AppButton';
import { useProfile } from '../../providers/ProfileProvider';
import { useAppTheme } from '../../providers/ThemeProvider';
import { ThemeType } from '../../types/types';

const SignInScreen = ({ navigation }) => {
	const theme = useAppTheme();
	const { width, height } = Dimensions.get('screen');
	const styles = makeStyle(theme.appTheme.colors, width, height);
	const { setAuthenticatedUser } = useProfile();


	return (
		<SafeAreaView style={styles.container}>
			<Text style={{ color: 'red' }}>SignInScreen</Text>
			<AppButton
				title="LOGIN"
				titleStyle={styles.buttonTitle}
				buttonStyle={styles.buttonStyle}
				onPress={() => setAuthenticatedUser(true)}
			/>
			<AppButton
				title="SIGN UP"
				titleStyle={styles.buttonTitle}
				buttonStyle={styles.buttonStyle}
				onPress={() => navigation.navigate('SignUp')}
			/>
		</SafeAreaView>
	);
};

export default SignInScreen;

const makeStyle = (colors: ThemeType['colors'], width: number, height: number) =>
	StyleSheet.create({
		container: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: colors.background,
		},
		buttonStyle: {
			width: width * 0.2,
			height: height * 0.05,
			alignItems: 'center',
			justifyContent: 'center',
			marginVertical: 10,
			backgroundColor: colors.buttonBackground,
			borderRadius: 20,
			shadowColor: colors.shadowColor,
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.5,
			elevation: 2,
		},
		buttonTitle: {
			color: colors.buttonTitle,
		},
	});
