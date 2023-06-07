import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { IMessage } from '../Models';
import Message from './Message';

const MessageList: React.FC = () => {
    const [messages, setMessages] = useState<IMessage[]>([]);

    useEffect(() => {
        const socket = io('ws://localhost:8080');
        socket.on('message', (text) => {
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    id: prevMessages.length + 1,
                    sender: 'osama',
                    text,
                    date: new Date(),
                },
            ]);
        });
    }, []);

    return (
        <View>
            {messages && messages.length > 0 ? (
                messages.map((message: IMessage) => {
                    return (
                        <Message message={message} key={message.id}></Message>
                    );
                })
            ) : (
                <></>
            )}
        </View>
    );
};

export default MessageList;
