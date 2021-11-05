import { Image, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
const LogoTitle = () => {
	return (
		<Image style={styles.imgStyle} source={require('../image/logo.png')} />
	);
};

export default LogoTitle;

const styles = StyleSheet.create({
	imgStyle: {
		width: 50,
		height: 45,
		paddingBottom: 50,
	},
});
