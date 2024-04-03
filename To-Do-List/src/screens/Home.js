import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Title } from "../components/Title";
import { ImageButton } from "../components/ImageButton";
import { ToDoList } from "../components/ToDoList";
import { loadData, saveData } from "../models/data";
import { useState, useEffect } from "react";

export const Home = () => {
	const navigation = useNavigation();

	const gotoAddNewToDoHandler = () => {
		navigation.navigate("Add New Todo");
	};

	const [tasks, setTasks] = useState([]);
	useEffect(() => {
		const firstLoad = async () => {
			const data = await loadData();
			setTasks(data.tasks);
		};
		firstLoad();
	}, []);
	useEffect(() => {
		saveData({ tasks });
	}, [tasks]);

	const deleteTask = (id) => {
		setTasks((ts) => ts.filter((t) => t.id != id));
	};

	const completeTask = (id) => {
		setTasks((ts) => {
			const nts = ts.map((t) => {
				const nt = { ...t };
				if (t.id === id) nt.finished = true;
				return nt;
			});
			return nts;
		});
	};
	const expandTask = (id) => {
		setTasks((ts) => {
			const nts = ts.map((t) => {
				const nt = { ...t };
				if (t.id === id) {
					nt.isExpanded = !nt.isExpanded;
				}
				return nt;
			});
			return nts;
		});
	};

	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<Title title="My ToDo List" />
			</View>

			<View style={styles.middle}>
				<ToDoList
					data={tasks}
					deleteTask={deleteTask}
					completeTask={completeTask}
					expandTask={expandTask}
				/>
				<Text>{console.log(tasks)}</Text>
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
