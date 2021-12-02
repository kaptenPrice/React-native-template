import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import AppButton from '../../components/AppButton';
import { useAppTheme } from '../../providers/ThemeProvider';
import { ThemeType } from '../../types/types';

const MenuMainScreen = ({ navigation }: NativeStackScreenProps<any, any>) => {
	const theme = useAppTheme();
	const { width, height } = Dimensions.get('screen');
	const styles = makeStyle(theme.appTheme.colors, width, height);
	return (
		<View>
			<Text style={styles.container}>This is the main menu</Text>
			<AppButton
				title="Personal trainer"
				titleStyle={styles.buttonTitle}
				buttonStyle={styles.buttonStyle}
				onPress={() => navigation.navigate('PTStack')}
			/>
			<AppButton
				title="Profil"
				titleStyle={styles.buttonTitle}
				buttonStyle={styles.buttonStyle}
				onPress={() => navigation.navigate('UserProfileStack')}
			/>
			<AppButton
				title="Settings"
				titleStyle={styles.buttonTitle}
				buttonStyle={styles.buttonStyle}
				onPress={() => navigation.navigate('SettingsStack')}
			/>
	
		</View>
	);
};

export default MenuMainScreen;
const makeStyle = (colors: ThemeType['colors'], width: number, height: number) =>
	StyleSheet.create({
		container: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: colors.background,
		},
		buttonStyle: {
			width: width * 0.5,
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
