import { Alert, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppButton from '../../components/AppButton';
import { useAppTheme } from '../../providers/ThemeProvider';
import { ThemeType } from '../../types/types';
import DrawerMenuIcon from '../../components/DrawerMenuIcon';

const FeedbackScreen = ({ navigation }) => {
	const { appTheme } = useAppTheme();
	const styles = makeStyles(appTheme.colors);

	return (
		<>
			{/* <DrawerMenuIcon onPress={() => navigation.openDrawer()} /> */}
			<View style={styles.container}>
				<Text style={styles.textStyle}>FeedBackScreen</Text>
				<AppButton
					buttonStyle={styles.buttonStyle}
					onPress={() => Alert.alert("Nice!","We will call you nextnextnext year to discuss it")}
					titleStyle={styles.titleStyle}
					title="FeedBack"
				/>
				<AppButton buttonStyle={styles.buttonStyle} />
			</View>
		</>
	);
};

export default FeedbackScreen;

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
