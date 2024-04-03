import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const ToDoList = ({ data, deleteTask, completeTask, expandTask }) => {
	return (
		<FlatList
			data={data}
			renderItem={({ item }) => (
				<View style={styles.list}>
					<Pressable
						style={({ pressed }) => [
							styles.titleButton,
							{
								opacity: pressed ? 0.5 : 1.0,
							},
						]}
						onPress={() => {
							expandTask(item.id);
						}}
					>
						<Text style={styles.titleText}>{item.title}</Text>
						<Ionicons
							style={styles.arrowicon}
							name={item.isExpanded == false ? "caret-down" : "caret-up"}
						/>
					</Pressable>
					{item.isExpanded == true && (
						<View>
							<Text style={styles.description}>{item.description}</Text>

							<View style={styles.controlPanel}>
								{item.finished == false && (
									<Pressable
										style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
										onPress={() => {
											completeTask(item.id);
										}}
									>
										<Ionicons
											name="cloud-done"
											style={styles.finishedIcon}
										></Ionicons>
									</Pressable>
								)}
								<Pressable
									style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
									onPress={() => {
										deleteTask(item.id);
									}}
								>
									<Ionicons name="trash" style={styles.deleteIcon}></Ionicons>
								</Pressable>
							</View>
						</View>
					)}
				</View>
			)}
			keyExtractor={(item) => item.id}
		/>
	);
};

const styles = StyleSheet.create({
	list: {
		backgroundColor: "lightblue",
		borderRadius: 10,
		margin: 5,
	},
	titleButton: {
		flexDirection: "row",
		justifyContent: "space-between",
	},

	titleText: {
		fontSize: 15,
		padding: 10,
	},

	arrowicon: {
		fontSize: 20,
		padding: 10,
		color: "brown",
	},

	description: {
		fontSize: 15,
		padding: 10,
	},
	controlPanel: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	finishedIcon: {
		padding: 10,
		fontSize: 30,
		color: "green",
	},
	deleteIcon: {
		padding: 10,
		fontSize: 30,
		color: "red",
	},
});
