import React from 'react';
import {
	Pressable,
	PressableProps,
	StyleProp,
	Text,
	TextStyle,
	ViewStyle,
} from 'react-native';

const AppButton = ({
	title,
	buttonStyle,
	textStyle,
	onPress,
}: buttonPropTypes) => {
	return (
		<Pressable style={buttonStyle} onPress={onPress}>
			<Text style={textStyle}>{title}</Text>
		</Pressable>
	);
};

export default AppButton;

interface buttonPropTypes extends PressableProps {
	title?: string;
	buttonStyle: StyleProp<ViewStyle>;
	textStyle?: StyleProp<TextStyle>;
	onPress?: () => void;
}
