import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import socket from '../socket';
import { IMessage } from '../Models';
import Message from './Message';

const MessageList: React.FC = () => {
    const [messages, setMessages] = useState<IMessage[]>([]);

    useEffect(() => {
        socket.on('message', (text) => {
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    sender: 'osama',
                    text,
                    date: new Date(),
                },
            ]);
        });
    }, []);

    const renderItem = ({ item }: { item: IMessage }) => {
        return <Message message={item} />;
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={messages}
                renderItem={renderItem}
                keyExtractor={(item) => (item.date.toString())}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
});

export default MessageList;
