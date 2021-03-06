import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import AppButton from '../comp/AppButton';
import { useAppTheme } from '../providers/ThemeProvider';
import { ThemeType } from '../types/types';

const SettingsScreen = ({ navigation }: NativeStackScreenProps<any, any>) => {
	const { appTheme, setAppTheme } = useAppTheme();
	const styles = makeStyle(appTheme.colors);
	const [isEnabled, setIsEnabled] = useState(null);

	const toggleSwitch = () => setIsEnabled((currentState: boolean) => !currentState);

	useEffect(() => {
		setAppTheme(!isEnabled ? 'light' : 'dark');
	}, [isEnabled]);

	return (
		<View style={styles.container}>
			<Text style={styles.textStyle}> SettingsScreen</Text>
			<Switch
				trackColor={{ false: '#FED326', true: '#006AA7' }}
				thumbColor={isEnabled ? '#FECC00' : '#006AA7'}
				ios_backgroundColor="#FECC00"
				onValueChange={toggleSwitch}
				value={isEnabled}
			/>
			<AppButton
				buttonStyle={styles.buttonStyle}
				titleStyle={styles.titleStyle}
				title="Go to Details"
				onPress={() => navigation.navigate('DetailsScreen', { itemId: '' })}
			/>
			<AppButton
				buttonStyle={styles.buttonStyle}
				titleStyle={styles.titleStyle}
				title="Scanner"
				onPress={() => navigation.navigate('ScannerScreen')}
			/>
		</View>
	);
};

export default SettingsScreen;

const makeStyle = (colors: ThemeType['colors']) =>
	StyleSheet.create({
		container: {
			flex: 1,
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'space-evenly',
		},

		textStyle: {
			color: colors.text,
		},

		buttonStyle: {
			backgroundColor: colors.buttonBackground,
			borderColor: 'red',
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
