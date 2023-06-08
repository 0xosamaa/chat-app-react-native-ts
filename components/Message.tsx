import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { IMessageProps } from '../Models';

const Message: React.FC<IMessageProps> = ({ message, sender }) => {
    return (
        <View
            style={{
                ...styles.message,
                alignSelf:
                    message.sender === sender ? 'flex-end' : 'flex-start',
                backgroundColor: message.sender === sender ? '#EBFEDE' : '#fff',
            }}
        >
            <View style={styles.senderContainer}>
                <Text style={styles.sender}>{message.sender}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{message.text}</Text>
                <Text style={styles.date}>
                    {message.date.toLocaleTimeString()}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    message: {
        maxWidth: '100%',
        backgroundColor: '#fff',
        alignSelf: 'flex-start',
        borderRadius: 16,
        padding: 5,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
    },
    senderContainer: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 20,
        paddingRight: 20,
    },
    textContainer: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 20,
        paddingRight: 20,
    },
    sender: { fontSize: 12, fontWeight: 'bold' },
    text: {
        width: '100%',
    },
    date: {
        width: '100%',
        alignSelf: 'flex-end',
        fontSize: 12,
    },
});

export default Message;
