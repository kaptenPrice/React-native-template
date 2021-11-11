import React from 'react';
import { Dimensions, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DrawerMenuIcon = ({ onPress }) => {
	const { width, height } = Dimensions.get('screen');

	return (
		<Pressable
			style={{
				height: height * 0.08,
				width: width * 0.16,
				marginLeft: width * 0.02,
				marginVertical: height * 0.03,
			}}>
			<Ionicons
				style={{
					paddingHorizontal: width * 0.055,
					paddingVertical: height * 0.035,
				}}
				name="md-menu-outline"
				size={32}
				color="blue"
				onPress={onPress}
			/>
		</Pressable>
	);
};

export default DrawerMenuIcon;

const styles = StyleSheet.create({});
