import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../../screens/un-authenticated-screens/SignInScreen';
import { screenPropTypes } from '../../types/types';
import LandingScreen from '../../screens/un-authenticated-screens/LandingScreen';
import NonMemberScreen from '../../screens/un-authenticated-screens/SignUpScreen';

const LoginStack = createNativeStackNavigator();

const UnAuthenticatedStack = () => {
	const screens: screenPropTypes[] = [
		{
			name: 'LandingScreen',
			component: LandingScreen,
			options: { headerShown: false },
		},
		{
			name: 'SignInScreen',
			options: { headerShown: false, title: 'SignIn' },
			component: SignInScreen,
		},
		{
			name: 'NonMemberScreen',
			options: { headerShown: true, title: '', headerBackTitle:"" },
			component: NonMemberScreen,
		},
	];

	const mapScreens = () =>
		screens.map(({ ...props }, index) => <LoginStack.Screen key={index} {...props} />);

	return <LoginStack.Navigator>{mapScreens()}</LoginStack.Navigator>;
};

export default UnAuthenticatedStack;
