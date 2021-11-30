import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../../screens/profile-screens/SignInScreen';
import SignUpScreen from '../../screens/profile-screens/SignUpScreen';
import { screenPropTypes } from '../../types/types';

const LoginStack = createNativeStackNavigator();

const UnAuthenticatedStack = () => {
	const screens: screenPropTypes[] = [
		{
			name: 'SignIn',
			options: { headerShown: false, title: 'SignIn' },
			component: SignInScreen,
		},
		{
			name: 'SignUp',
			options: { headerShown: false, title: 'SignUp' },
			component: SignUpScreen,
		},
	];

	const mapScreens = () => {
		return screens.map(({ ...props }, index) => <LoginStack.Screen key={index} {...props} />);
	};

	return <LoginStack.Navigator>{mapScreens()}</LoginStack.Navigator>;
};

export default UnAuthenticatedStack;
