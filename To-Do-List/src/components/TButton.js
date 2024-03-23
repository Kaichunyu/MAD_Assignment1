import { StyleSheet, Text, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export const TButton = ({ buttonname, iconname, action }) => {

    return (
        <Ionicons.Button style={styles.icon} name={iconname} onPress={action}>
            <Text style={styles.text}>
                {buttonname}
            </Text>
        </Ionicons.Button>
    );

};


const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },

    icon: {
        backgroundColor: 'lightgreen',
        padding: 10,

    },
        
})