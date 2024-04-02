import AsyncStorage from "@react-native-async-storage/async-storage";
const key = "to-do-list";
const dummyData = {
	task: [
		{ id: 1, title: "Buy Mango", description: "2 pieces", finished: false },
		{ id: 2, title: "Buy Milk", description: "200ml", finished: false },
		{ id: 3, title: "Buy Veges", description: "Bok Choy", finished: false },
		{ id: 4, title: "Buy Coke", description: "200ml", finished: false },
	],
};

export async function loadData() {
	try {
		str = await AsyncStorage.getItem(key);
		if (str != null) {
			const myData = JSON.parse(str);
			return myData;
		}
		return dummyData;
	} catch (e) {
		console.log(`fail to read data with key ${key}.`, e);
		return dummyData;
	}
}

export async function saveData(myData) {
	const str = JSON.stringify(myData);
	try {
		await AsyncStorage.setItem(key, str);
	} catch (e) {
		console.log("fail to save data.");
	}
}
