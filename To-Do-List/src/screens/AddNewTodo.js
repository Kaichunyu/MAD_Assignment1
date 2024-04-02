import { StyleSheet, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Title } from "../components/Title";
import { SubTitle } from "../components/SubTitle";
import { ImageButton } from "../components/ImageButton";
import { InputBox } from "../components/InputBox";
import { loadData, saveData } from "../models/data";
import { ToDoList } from "../components/ToDoList";

export const AddNewTodo = () => {
	const navigation = useNavigation();

	const gobackHomeHandler = () => {
		navigation.navigate("Home");
	};

	const [text, setText] = useState("");
	const [text1, setText1] = useState("");
	const [tasks, setTasks] = useState([]);
	useEffect(() => {
		const firstLoad = async () => {
			const data = await loadData()
			setTasks(data.tasks)
		}
		firstLoad()
	}, [])
	useEffect(() => {
		saveData({tasks})
	}, [tasks])
					
	const saveHandler = () => {
		if (text !== "" & text1 !== "") {
			const title = text;
			const description = text1;
			const maxid = tasks.reduce((a, t) => a < t.id ? t.id : a, 0);
			console.log("maxid: ", maxid)
			setTasks(task => [...tasks, {id: maxid + 1, title: title, description: description, finished: false }])
			setText(null)
			setText1(null)

			Alert.alert("Todo Added Successfully.")
		} else {
			Alert.alert("Title and Description must not be empty.")
		}
	}
		
	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<Title title="Add New Todo" />
			</View>

			<View style={styles.middle}>
				<SubTitle name="Title" />
				<InputBox multipleline={false} value={text} onchangetext={setText} />
				<SubTitle name="Description" />
				<InputBox multipleline={true} value={text1} onchangetext={setText1} />
				{/* <ToDoList data={tasks} /> */}
			</View>

			<View style={styles.bottom}>
				<ImageButton
					iconname="backspace"
					buttonname="Back"
					action={gobackHomeHandler}
				/>
				<ImageButton iconname="save" buttonname="Save" action={saveHandler} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		padding: 15,
	},

	top: {
		height: "8%",
		borderBottomWidth: 2,
		alignItems: "center",
		justifyContent: "center",
	},

	middle: {
		height: "74%",
		justifyContent: "flex-start",
		margin: 10,
	},

	bottom: {
		height: "18%",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "flex-start",
	},
});
