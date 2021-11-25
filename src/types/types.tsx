import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { Dispatch, SetStateAction } from "react";
import { NativeScreen } from "react-native-screens";
import { EndPointType } from "../routes/helper/useFetch";

export type screenPropTypes = {
	name: string;
	options?: NativeStackNavigationOptions ;
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
export type UseThemeType = () => {
	appTheme: ThemeType;
	setAppTheme: Dispatch<SetStateAction<any>>;
};
export type UseFetchType = (
	endpoint: EndPointType,
	init?: RequestInit
) => Promise<{
	data?: any;
	status: number;
	error?: any;
}>;
type RequestInit = Parameters<typeof fetch>[1];