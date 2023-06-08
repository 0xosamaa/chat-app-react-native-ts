import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import socket from '../socket';
import { IMessage } from '../Models';
import Message from './Message';

const MessageList: React.FC = ({sender}) => {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const flatListRef = useRef<FlatList<IMessage>>(null);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    sender: message.sender,
                    text: message.messageText,
                    date: new Date(),
                },
            ]);
        });
    }, []);

    const renderItem = ({ item }: { item: IMessage }) => {
        return <Message message={item} sender={sender}/>;
    };

    useEffect(() => {
        (() => {
            if (messages.length > 0) {
                flatListRef.current?.scrollToEnd({ animated: true });
            }
        })();
    }, [messages]);

    return (
        <View style={styles.container}>
            <FlatList
                data={messages}
                renderItem={renderItem}
                keyExtractor={(item) =>
                    item.text + item.date.getUTCMilliseconds().toString()
                }
                ref={flatListRef}
                style={styles.messages}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxHeight: '100%',
    },
    messages: {
        width: '100%',
    },
});

export default MessageList;
