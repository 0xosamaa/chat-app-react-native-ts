import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import socket from '../socket';

const MessageForm = () => {
    const [messageText, setMessageText] = useState('');

    const handleSend = () => {
        socket.emit('message', messageText);
        setMessageText('');
    };

    const handleInput = (text: string) => {
        setMessageText(text);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                onChangeText={handleInput}
                value={messageText}
            />
            <TouchableOpacity style={styles.button} onPress={handleSend}>
                <Text>Send</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
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
