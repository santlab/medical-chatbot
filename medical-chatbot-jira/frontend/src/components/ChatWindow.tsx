import React, { useEffect } from 'react';
import './ChatWindow.css';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import TroubleshootOptions from './TroubleshootOptions';
import useChat from '../hooks/useChat';

const ChatWindow: React.FC = () => {
    const { messages, sendMessage, fetchMessages } = useChat();

    useEffect(() => {
        fetchMessages();
    }, [fetchMessages]);

    return (
        <div className="chat-window">
            <div className="chat-header">
                <h2>Medical Chatbot</h2>
            </div>
            <MessageList messages={messages} />
            <TroubleshootOptions />
            <MessageInput onSend={sendMessage} />
        </div>
    );
};

export default ChatWindow;