import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import React from 'react';

const MessageForm = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} />
            <TouchableOpacity style={styles.button}>
                <Text>Send</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '40vw',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    textInput: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderColor: 'gray',
        borderWidth: 1,
    },
    button: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderColor: 'gray',
        borderWidth: 1,
    },
});
export default MessageForm;
