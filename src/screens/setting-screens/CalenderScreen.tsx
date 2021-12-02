import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppButton from '../../components/AppButton';
import { useAppTheme } from '../../providers/ThemeProvider';
import DrawerMenuIcon from '../../components/DrawerMenuIcon';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';

const CalenderScreen = ({ navigation }) => {
	const { appTheme } = useAppTheme();
	const insets = useSafeAreaInsets();

	const styles = makeStyle(appTheme.colors, insets);
	return (
		<>
		
			{/* <DrawerMenuIcon onPress={() => navigation.openDrawer()} /> */}
		
			<View style={styles.container}>
				<Text style={{ color: 'red' }}>Calender </Text>
				<Text style={{ color: 'red' }}>Switch </Text>
				{/* <AppButton
					buttonStyle={styles.buttonStyle}
					onPress={() => navigation.navigate('AboutScreen')}
					titleStyle={styles.titleStyle}
					title="Go to About"
				/> */}
			</View>
		</>
	);
};

export default CalenderScreen;

const makeStyle = (colors: any, insets:EdgeInsets) =>
	StyleSheet.create({
		container: {
			paddingTop: insets.top,
			paddingLeft: insets.left,
			paddingBottom: insets.bottom,
			flex: 1,
			justifyContent: 'space-between',
			alignItems: 'center',
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
