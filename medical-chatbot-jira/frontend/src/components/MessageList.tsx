import React from 'react';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
}

interface MessageListProps {
    messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
    return (
        <div className="message-list">
            {messages.map((message) => (
                <div key={message.id} className={`message ${message.sender}`}>
                    <p>{message.text}</p>
                </div>
            ))}
        </div>
    );
};

export default MessageList;