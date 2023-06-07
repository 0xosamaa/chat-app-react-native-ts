interface IMessage {
    text: string;
    sender: string;
    date: Date;
}
interface IMessageList {
    messages: IMessage[];
}

interface IMessageProps {
    message: IMessage;
}

interface IMessageListProps {
    messages: IMessageList;
}

export { IMessage, IMessageList, IMessageListProps, IMessageProps };
