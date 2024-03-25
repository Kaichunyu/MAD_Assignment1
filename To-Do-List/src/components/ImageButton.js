import { StyleSheet, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const ImageButton = ({ buttonname, iconname, action }) => {
	return (
		<Ionicons.Button
			style={styles.icon}
			name={iconname}
			onPress={action}
			color={"black"}
			size={20}
		>
			<Text style={styles.text}>{buttonname}</Text>
		</Ionicons.Button>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 17,
		fontWeight: "bold",
		color: "black",
	},

	icon: {
		backgroundColor: "lightgreen",
		padding: 10,
	},
});
