import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable} from 'react-native';

export default function App() {
  const getButStyle = ({ pressed }) =>
    pressed ? [styles.pressed, styles.button] : [styles.button];
  return (
    <View style={styles.container}>
      <View style={[styles.title, {flex: 1}]}>
        <Text style={styles.title}>My Todo List</Text>
      </View>

      <View style={{flex: 14, gap: 10, padding: 10}}>
        <View style={styles.list}><Text style={styles.items}>Buy milk</Text></View>
        <View style={styles.list}><Text style={styles.items}>Buy eggs</Text></View>
        <View style={styles.list}><Text style={styles.items}>Buy veges</Text></View>
        <View style={styles.list}><Text style={styles.items}>Buy mango</Text></View>
      </View>

      <View style={[styles.button, {flex: 1, borderTopWidth: 1}]}>
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
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 50,
    marginBottom: 50,
    marginHorizontal: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,

  },

  list: {
    backgroundColor: 'lightblue',
    borderRadius: 10,
    padding: 10,
  },

  items: {
    fontSize: 15,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: '400',
    color: '#2196F3',

  },

  pressed: {
    opacity: 0.5,
  }
});