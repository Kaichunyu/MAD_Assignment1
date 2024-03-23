import { StyleSheet, Text, Pressable } from "react-native";

export const TButton = ({ name, action }) => {

    const getButStyle = ({ pressed }) =>
    pressed ? [styles.pressed, styles.button] : [styles.button];

    return (
        <Pressable style={getButStyle} onPress={action}>
            <Text style={styles.text}>
                {name}
            </Text>
        </Pressable>
    );

};


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    
    pressed: {
        opacity: 0.5,
    },

    text: {
        fontSize: 20,
        fontWeight: '400',
        color: '#2196F3',
    },
        
})