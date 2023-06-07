import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { IMessage, IMessageProps } from '../Models';

const Message: React.FC<IMessageProps> = ({ message }) => {
    return (
        <View style={styles.message}>
            <View>
                <Text>{message.sender}</Text>
            </View>
            <View>
                <Text>{message.text}</Text>
            </View>
            <View>
                <Text>{message.date.toLocaleString()}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    message: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});

export default Message;
