import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Title } from "../components/Title";
import { ImageButton } from "../components/ImageButton";
import { ToDoList } from "../components/ToDoList";

export const Home = () => {
	const navigation = useNavigation();

	const gotoAddNewToDoHandler = () => {
		navigation.navigate("Add New Todo");
	};

	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<Title title="My ToDo List" />
			</View>

			<View style={styles.middle}>
				<ToDoList />
			</View>

			<View style={styles.bottom}>
				<ImageButton
					iconname="add-circle"
					buttonname="Add New ToDo"
					action={gotoAddNewToDoHandler}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		flexDirection: "column",
		marginVertical: 30,
		marginHorizontal: 10,
	},

	top: {
		height: "8%",
		borderBottomWidth: 2,
		alignItems: "center",
		justifyContent: "center",
	},

	middle: {
		height: "82%",
		padding: 10,
	},

	bottom: {
		height: "10%",
		borderTopWidth: 1,
		alignItems: "center",
		justifyContent: "flex-start",
		padding: 10,
	},
});
