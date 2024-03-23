import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Title } from '../components/Title';
import { TButton } from '../components/TButton';
import { ToDoList } from '../components/ToDoList';

export const Home = () => {
    const navigation = useNavigation();

    const gotoAddNewToDoHandler = () => {
        navigation.navigate("AddNewTodo")
    }
  
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Title title = "My ToDo List"/>
            </View>

            <View style={styles.middle}>
                <ToDoList/>
            </View>

            <View style={styles.bottom}>
                <TButton name="Add New ToDo" action={ gotoAddNewToDoHandler} />
            </View> 
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    marginVertical: 30,
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
    flex: 1.5,
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});