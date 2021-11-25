import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, BackHandler } from 'react-native';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';
import AppButton from '../comp/AppButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Camera } from 'expo-camera';
import { useIsFocused } from '@react-navigation/native';

const Scanner = ({ navigation }: NativeStackScreenProps<any, any>) => {
	const { height, width } = Dimensions.get('screen');
	const [hasPermission, setHasPermission] = useState<boolean | null>(null);
	const [scanned, setScanned] = useState<boolean>(false);
	const [type, setType] = useState(Camera.Constants.Type.back);
	const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
	const styles = makeStyle(height, width);

	const { back, front } = Camera.Constants.Type;
	const { qr } = BarCodeScanner.Constants.BarCodeType;
	const { off, torch } = Camera.Constants.FlashMode;
	const isFocused = useIsFocused();

	useEffect(() => {
		handleRequestPermision();
	}, []);

	useEffect(() => {
		!isFocused && setScanned(false);
	}, [isFocused]);

	const handleRequestPermision = async () => {
		const { status } = await Camera.requestCameraPermissionsAsync();
		setHasPermission(status === 'granted');
	};

	const handleBarCodeScanned = ({ data, type }) => {
		// if (!scanned) {
		// 	const { type, data, bounds: { origin } = {} } = scanningResult;
		// 	const { x, y } = origin;
		// 	if (
		// 		x >= viewMinX &&
		// 		y > viewMinY &&
		// 		x <= viewMinX + finderWidth / 2 &&
		// 		y <= viewMinY + finderHeight / 2
		// 	) {
		setScanned(true);
		//TODO CHANGE TO REAL STUFF HERE
		navigation.navigate('HelpScreen');
		alert(`Bar code with type ${type} and data ${data} has been scanned!`);
	};
const handleFlashMode = () => {
		setFlashMode(flashMode === off ? torch : off);
	};

	if (hasPermission === null) {
		return (
			<View>
				<Text>No access</Text>
			</View>
		);
	}
	if (hasPermission === false) return <Text> No Access to Camera</Text>;

	return (
		<View style={{ flex: 1 }}>
			{isFocused && (
				<Camera
					onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
					type={type}
					barCodeScannerSettings={[qr]}
					style={styles.container}
					flashMode={flashMode}
					ratio={'16:9'}
					onMountError={(object) =>
						console.log('Error when trying to run CAMERA', object)
					}
				>
					<View style={styles.flipBtnContainer}>
						{!scanned && (
							<AppButton
								buttonStyle={styles.flipBtnStyle}
								onPress={() => {
									setType(type === back ? front : back);
								}}
								titleStyle={{ fontSize: 18, margin: 5, color: 'white' }}
								title="Flip Camera"
							/>
						)}
					</View>
					<View style={styles.btnContainer}>
						{!scanned && (
							<AppButton
								buttonStyle={styles.closeBtnStyle}
								onPress={() => navigation.goBack()}
								titleStyle={{ fontSize: 18, margin: 5, color: 'white' }}
								title="Close"
							/>
						)}
						{!scanned && (
							<AppButton
								buttonStyle={styles.torchBtnStyle}
								onPress={handleFlashMode}
								titleStyle={{ fontSize: 18, margin: 5, color: 'white' }}
								title="Flash"
							/>
						)}
					</View>
					{scanned && <Button title={'Scan Again'} onPress={() => setScanned(false)} />}
				</Camera>
			)}
		</View>
	);
};

export default Scanner;

const makeStyle = (height: number, width: number) =>
	StyleSheet.create({
		container: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'space-evenly',
		},
		flipBtnContainer: {
			flex: 1,
			flexDirection: 'row',
		},
		flipBtnStyle: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'flex-end',
			height: height / 10,
			backgroundColor: '#111',
			opacity: 0.9,
		},
		btnContainer: {
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'space-evenly',
			width: width * 1,
			backgroundColor: '#1111',
		},
		closeBtnStyle: {
			alignItems: 'center',
			justifyContent: 'center',
			height: height / 10,
			backgroundColor: '#111',
			opacity: 0.8,
		},
		torchBtnStyle: {
			alignItems: 'center',
			justifyContent: 'center',
			height: height / 10,
			backgroundColor: '#111',
			opacity: 0.8,
		},
	});
