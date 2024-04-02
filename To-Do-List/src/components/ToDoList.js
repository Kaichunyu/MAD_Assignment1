import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const ToDoList = ({ data }) => {
	return (
		<View style={{ alignContent: "center" }}>
			<FlatList
				data={data}
				renderItem={({ item }) => (
					<View style={styles.list}>
						<Pressable
							style={ ({pressed}) => [{opacity: pressed? 0.5:1.0, flexDirection: "row", justifyContent: "space-between"}]}
							onPress={() => { console.log("Clicked") }}
						>
							<Text style={styles.item}>{item.title}</Text>
							<Ionicons style={styles.arrowicon} name="caret-down" />
						</Pressable>
					</View>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	list: {
		backgroundColor: "lightblue",
		borderRadius: 10,
		margin: 5
	},

	item: {
		fontSize: 15,
		padding: 10,
	},

	arrowicon: {
		fontSize: 20,
		padding: 10,
		color: "brown",
	},

});
