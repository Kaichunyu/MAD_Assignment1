import { StyleSheet, Text, View } from "react-native";

export const Title = ({ title }) => {
	return (
		<View style={styles.title}>
			<Text style={styles.name}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		alignItems: "center",
		justifyContent: "center",
	},

	name: {
		fontSize: 20,
		fontWeight: "bold",
	},
});
