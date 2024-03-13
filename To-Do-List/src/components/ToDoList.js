import { StyleSheet, Text, View, Pressable} from 'react-native';
export default ToDoList = () => {

    return (
        <View style={{gap: 10}}>
            <View style={styles.list}><Text style={styles.item}>Buy milk</Text></View>
            <View style={styles.list}><Text style={styles.item}>Buy eggs</Text></View>
            <View style={styles.list}><Text style={styles.item}>Buy veges</Text></View>
            <View style={styles.list}><Text style={styles.item}>Buy mango</Text></View>
        </View>

    )

};

const styles = StyleSheet.create({
list: {
    backgroundColor: 'lightgreen',
    borderRadius: 10,
    padding: 10,
    bordergap: 10,
  },

  item: {
    fontSize: 15,
  },

});