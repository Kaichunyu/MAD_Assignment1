import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable} from 'react-native';
import ToDoList from './src/components/ToDoList';
import AddNewButton from './src/components/AddNewButton';

export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>My Todo List</Text>
      </View>

      <View style={styles.middle}>
        <ToDoList/>
      </View>

      <View style={styles.bottom}>
        <AddNewButton/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    marginTop: 50,
    marginBottom: 50,
    marginHorizontal: 10,
  },

  top: {
    flex: 1,
    borderBottomWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  middle: {
    flex: 14, 
    padding: 10,

  },

  bottom: {
    flex: 1,
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

});
