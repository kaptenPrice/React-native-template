import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AppButton from '../components/AppButton';
import { useAppTheme } from '../providers/ThemeProvider';


const DetailScreen = ({
	navigation,
	route,
}: NativeStackScreenProps<any, any>) => {
	const { appTheme } = useAppTheme();
	const styles = makeStyle(appTheme);
	const { itemId, otherParam } = route.params;
	
	const handlePush = () => {
		navigation.push('DetailsScreen', {
			itemId: Math.floor(Math.random() * 100),
		});
	};

	return (
		<View style={styles.container}>
			<Text style={styles.textStyle}>DetailScreen</Text>
			{itemId ? (
				<Text style={styles.textStyle}>itemId: {JSON.stringify(itemId)}</Text>
			) : null}
			{otherParam ? (
				<Text style={styles.textStyle}>
					otherParam: {JSON.stringify(otherParam)}
				</Text>
			) : null}
			<AppButton
				buttonStyle={styles.buttonStyle}
				onPress={handlePush}
				titleStyle={styles.titleStyle}
				title="DETAILS ...again"
			/>
		</View>
	);
};

export default DetailScreen;
const makeStyle = (colors: any) =>
	StyleSheet.create({
		container: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
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
