import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types'
import React from 'react'
import { View, Text , StyleSheet, Dimensions} from 'react-native'
import AppButton from '../../components/AppButton'
import { useAppTheme } from '../../providers/ThemeProvider'
import { ThemeType } from '../../types/types'

const LandingScreen = ({navigation}:NativeStackScreenProps<any, any>) => {
    const theme = useAppTheme();
	const { width, height } = Dimensions.get('screen');
	const styles = makeStyle(theme.appTheme.colors, width, height);



    return (
        <View style={styles.container}>
            <Text>LandingScreen</Text>
            <AppButton
				title="LOGIN"
				titleStyle={styles.buttonTitle}
				buttonStyle={styles.buttonStyle}
				onPress={() => navigation.navigate("SignInScreen")}
			/>
            <AppButton
				title="NoMember"
				titleStyle={styles.buttonTitle}
				buttonStyle={styles.buttonStyle}
				onPress={() => navigation.navigate("NonMemberScreen")}
			/>
        </View>
    )
}

export default LandingScreen
const makeStyle = (colors: ThemeType['colors'], width: number, height: number) =>
	StyleSheet.create({
		container: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: colors.background,
		},
		buttonStyle: {
			width: width * 0.2,
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
