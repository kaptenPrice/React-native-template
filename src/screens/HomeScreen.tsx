import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import AppButton from '../comp/AppButton';
import { useAppTheme } from '../providers/ThemeProvider';
import { ThemeType } from '../types/types';
import DrawerMenuIcon from '../comp/DrawerMenuIcon';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { useFetch } from '../routes/helper/useFetch';

const HomeScreen = ({
	navigation,
}: NativeStackScreenProps<any, any> & DrawerScreenProps<any, any>) => {
	const { appTheme } = useAppTheme();
	const styles = makeStyle(appTheme.colors);

const fetchData=async()=>{
	const {data, status, error} = await useFetch("/login")
	console.log(data,status, error)
	//set your data and use it

}
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
			<DrawerMenuIcon onPress={() => navigation.openDrawer()} />
			<View style={styles.container}>
				<Text style={styles.textStyle}>HomeScreen</Text>
				<AppButton
					buttonStyle={styles.buttonStyle}
					onPress={() =>
						navigation.navigate('DetailsScreen', {
							itemId: 88,
							otherParam: 'Watch her walk away... ',
						})
					}
					titleStyle={styles.titleStyle}
					title="Details"
				/>
			</View>
		</>
	);
};
export default HomeScreen;

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
