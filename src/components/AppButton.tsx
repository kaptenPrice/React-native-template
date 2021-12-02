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
	titleStyle: titleStyle,
	onPress,
}: buttonPropTypes) => {
	return (
		<Pressable style={buttonStyle} onPress={onPress}>
			<Text style={titleStyle}>{title}</Text>
		</Pressable>
	);
};

export default AppButton;

interface buttonPropTypes extends PressableProps {
	title?: string;
	buttonStyle: StyleProp<ViewStyle>;
	titleStyle?: StyleProp<TextStyle>;
	onPress?: () => void;
}
