import React from 'react';
import { Dimensions,  StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DrawerMenuIcon = ({ onPress }) => {
	const { width, height } = Dimensions.get('screen');
	const styles = makeStyle(width, height);

	return (
		<View style={styles.container}>
			<Ionicons
				style={styles.iconStyle}
				name="md-menu-outline"
				size={32}
				color="grey"
				onPress={onPress}
			/>
		</View>
	);
};




export default DrawerMenuIcon;

const makeStyle = (height: number, width: number) =>
	StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			zIndex: 1000,
			position: 'absolute',
			// backgroundColor: 'red',
		},
		iconStyle: {
			paddingHorizontal: width * 0.05,
			paddingVertical: height * 0.05,
			opacity:0.4
			// backgroundColor: 'yellow',
		},
	});
