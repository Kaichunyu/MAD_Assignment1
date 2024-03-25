import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Title } from "../components/Title";
import { SubTitle } from "../components/SubTitle";
import { ImageButton } from "../components/ImageButton";
import { InputBox } from "../components/InputBox";

export const AddNewTodo = () => {
	const navigation = useNavigation();

	const gobackHomeHandler = () => {
		navigation.navigate("Home");
	};

	const saveHandler = () => {
		console.log("Saved");
	};
	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<Title title="Add New Todo" />
			</View>

			<View style={styles.middle}>
				<SubTitle name="Title" />
				<InputBox multipleline={false} />
				<SubTitle name="Description" />
				<InputBox multipleline={true} />
			</View>

			<View style={styles.bottom}>
				<ImageButton
					iconname="backspace"
					buttonname="Cancel"
					action={gobackHomeHandler}
				/>
				<ImageButton
					iconname="save"
					buttonname="Save"
					action={saveHandler}
				/>
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
