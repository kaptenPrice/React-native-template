import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export type screenPropTypes = {
	name: string;
	options?: NativeStackNavigationOptions;
	component: ({ navigation }: { navigation: any }) => JSX.Element;
};
export type ThemeType = {
	dark: boolean;
	colors: {
		primary: string;
		background: string;
		card: string;
		text: string;
		border: string;
		notification: string;
		buttonBackground: string;
		buttonTitle: string;
		shadowColor: string;
	};
};