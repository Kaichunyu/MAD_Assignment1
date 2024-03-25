import { StyleSheet, View, Text, TextInput } from "react-native";

export const InputBox = ({ multipleline }) => {
	return (
		<View style={{ padding: 5 }}>
			<TextInput style={styles.box} multiline={multipleline} />
		</View>
	);
};

const styles = StyleSheet.create({
	box: {
		minHeight: 40,
		borderWidth: 1,
		borderRadius: 5,
		padding: 10,
	},
});
