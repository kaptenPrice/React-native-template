import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../../screens/profileScreens/SignInScreen';
import SignUpScreen from '../../screens/profileScreens/SignUpScreen';
import { screenPropTypes } from '../../types/types';

const LoginStack = createNativeStackNavigator();

const UnAuthenticatedStackScreen = () => {
	const screens: screenPropTypes[] = [
		{
			name: 'SignIn',
			options: { headerShown: false, title: 'SignIn' },
			component: SignInScreen,
		},
		{
			name: 'SignUp',
			options: { headerShown: true, title: 'SignUp' },
			component: SignUpScreen,
		},

	];

	const mapScreens = () => {
		return screens.map(({ ...props }, index) => (
			<LoginStack.Screen key={index} {...props} />
		));
	};
	
	return <LoginStack.Navigator>{mapScreens()}</LoginStack.Navigator>;
};

export default UnAuthenticatedStackScreen;
