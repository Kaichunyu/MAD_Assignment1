import { StyleSheet, Text, View } from "react-native";

export const SubTitle = ({ name }) => {
	return (
		<View style={styles.subtitle}>
			<Text style={styles.name}>{name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	subtitle: {
		padding: 5,
	},
	name: {
		fontSize: 20,
		fontWeight: "bold",
	},
});
