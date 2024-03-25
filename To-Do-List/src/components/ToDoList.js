import { StyleSheet, Text, View } from "react-native";
export const ToDoList = () => {
    return (
        <View style={{ flexWrap: "wrap", alignContent: "center" }}>
            <View style={styles.list}>
                <Text style={styles.item}>Buy milk</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.item}>Buy eggs</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.item}>Buy veges</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.item}>Buy mango</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        backgroundColor: "lightgreen",
        borderRadius: 10,
        width: 380,
        height: 40,
        margin: 5,
        justifyContent: "center",
    },

    item: {
        fontSize: 15,
        padding: 10,
    },
});
