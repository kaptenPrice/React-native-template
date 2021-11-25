import { ThemeType } from "../types/types";

export const Theme: Record<'appDarkTheme' | 'appDefaultTheme', ThemeType> = {
	appDarkTheme: {
		dark: true,
		colors: {
			primary: '#9933FF',
			background: '#000023',
			card: '#000028',
			text: '#ffffff',
			border: '#000028',
			notification: '#9933FF',
			buttonBackground: '#ffffff',
			buttonTitle: '#9933FF',
			shadowColor: '#ffffff',
		},
	},
	appDefaultTheme: {
		dark: false,
		colors: {
			primary: '#453F36',
			background: '#ffffff',
			card: '#D6D6FF',
			text: '#161313',
			border: '#161313',
			notification: '#453F36',
			buttonBackground: '#e0ece1',
			buttonTitle: '#4f6367',
			shadowColor: '#d5d5d5',
		},
	},
};



declare module '@react-navigation/native' {
	//@ts-ignore
	type Theme = ThemeType;
}
