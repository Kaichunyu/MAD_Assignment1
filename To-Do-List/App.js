import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable} from 'react-native';

export default function App() {
  const getButStyle = ({ pressed }) =>
    pressed ? [styles.pressed, styles.button] : [styles.button];
  return (
    <View style={styles.container}>
      <View style={styles.topboard}>
        <Text style={styles.title}>My Todo List</Text>
      </View>



      <View style={styles.middleboard}>
        <View style={styles.list}><Text style={styles.item}>Buy milk</Text></View>
        <View style={styles.list}><Text style={styles.item}>Buy eggs</Text></View>
        <View style={styles.list}><Text style={styles.item}>Buy veges</Text></View>
        <View style={styles.list}><Text style={styles.item}>Buy mango</Text></View>
      </View>



      <View style={styles.bottomboard}>
        <Pressable
          style={getButStyle}
          onPress={() => {
            console.log('pressed')
          }}
        >
          <Text style={styles.button}>Add New Todo</Text>
        </Pressable>
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

  topboard: {
    flex: 1,
    borderBottomWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  middleboard: {
    flex: 14, 
    gap: 10, 
    padding: 10,

  },

  bottomboard: {
    flex: 1,
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  list: {
    backgroundColor: 'lightgreen',
    borderRadius: 10,
    padding: 10,
  },

  item: {
    fontSize: 15,
  },

  button: {
    fontSize: 20,
    fontWeight: '400',
    color: '#2196F3',

  },

  pressed: {
    opacity: 0.5,
  }
});
