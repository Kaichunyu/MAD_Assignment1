import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const ToDoList = ({ data, deleteTask, completeTask }) => {
	return (
		<View style={{ alignContent: "center" }}>
			<FlatList
				data={data}
				renderItem={({ item }) => (
					<View style={styles.list}>
						<Pressable
							style={({ pressed }) => [
								{
									opacity: pressed ? 0.5 : 1.0,
									flexDirection: "row",
									justifyContent: "space-between",
								},
							]}
							onPress={() => {
								console.log("Clicked");
							}}
						>
							<Text style={styles.item}>{item.title}</Text>
							<Ionicons style={styles.arrowicon} name="caret-down" />
						</Pressable>
						<Text>{item.description}</Text>
						<View
							style={{ flexDirection: "row", justifyContent: "space-around" }}
						>
							{item.finished == false && <Pressable
								style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
								onPress={() => { completeTask(item.id) }}
							>
								<Ionicons
									name="cloud-done"
									style={{ padding: 10, fontSize: 30, color: "green" }}
								></Ionicons>
							</Pressable>}
							<Pressable
								style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
								onPress={() => {deleteTask(item.id)}}
							>
								<Ionicons
									name="trash"
									style={{ padding: 10, fontSize: 30, color: "red" }}
								></Ionicons>
							</Pressable>
						</View>
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
		margin: 5,
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
