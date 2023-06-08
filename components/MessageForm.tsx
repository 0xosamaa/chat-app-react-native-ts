import React, { useRef, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import socket from '../socket';

const MessageForm = ({sender}) => {
    const [messageText, setMessageText] = useState('');
    const textInputRef = useRef<TextInput>(null);

    const handleSend = () => {
        textInputRef.current?.focus();

        if (messageText.length == 0) return;

        console.log({sender, messageText});
        
        socket.emit('message', {sender, messageText});
        setMessageText('');
    };

    const handleInput = (text: string) => {
        setMessageText(text);
    };

    return (
        <View style={styles.container}>
            <TextInput
                ref={textInputRef}
                style={styles.textInput}
                onChangeText={handleInput}
                value={messageText}
            />
            <TouchableOpacity style={styles.button} onPress={handleSend}>
                <Text>
                    <Icon name="ios-send" size={20} color="#fff" />
                </Text>
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
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        width: '80%',
        borderRadius: 100,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
    },
    button: {
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        borderColor: 'gray',
        borderRadius: 100,
        textAlign: 'center',
        backgroundColor: '#4CA587',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
    },
});

export default MessageForm;
