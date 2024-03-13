import { StyleSheet, Text, View, Pressable} from 'react-native';
export default AddNewButton = () => {
    const getButStyle = ({ pressed }) =>
    pressed ? [styles.pressed, styles.button] : [styles.button];

    return (
        <Pressable
          style={getButStyle}
          onPress={() => {
            console.log('pressed')
          }}
        >
          <Text style={styles.button}>Add New Todo</Text>
        </Pressable>

    )

};

const styles = StyleSheet.create({
button: {
    fontSize: 20,
    fontWeight: '400',
    color: '#2196F3',

  },

  pressed: {
    opacity: 0.5,
  }
})