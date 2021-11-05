import { TextInput, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { useAppTheme } from '../providers/ThemeProvider';


const CreatePostScreen = ({
	navigation,
	route,
}: NativeStackScreenProps<any, any>) => {
	const { appTheme } = useAppTheme();
	const styles = makeStyle(appTheme);
	const [postText, setPostText] = useState<string>();

	return (
		<>
			<TextInput
				multiline
				placeholder="What's on your mind?"
				style={styles.TextInput}
				value={postText}
				onChangeText={setPostText}
			/>
			{/* <Button
				title="Done"
				onPress={() => {
					navigation.navigate({
						name: 'Home',
						params: { post: postText },
						merge: true,
					});
				}}
			/> */}
		</>
	);
};

export default CreatePostScreen;
const makeStyle = (colors: any) =>
	StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: '#fff',
			alignItems: 'center',
			justifyContent: 'center',
		},
		TextInput: {
			margin: 50,
			height: 200,
			padding: 10,
			backgroundColor: 'white',
		},
	});
