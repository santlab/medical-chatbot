import { useState, useEffect } from 'react';
import { fetchChatResponse, createJiraTicket } from '../services/api';

const useChat = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const response = await fetchChatResponse(message);
            setMessages((prevMessages) => [...prevMessages, { text: message, sender: 'user' }]);
            setMessages((prevMessages) => [...prevMessages, { text: response, sender: 'bot' }]);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleCreateTicket = async (ticketData) => {
        setLoading(true);
        try {
            const ticketResponse = await createJiraTicket(ticketData);
            setMessages((prevMessages) => [...prevMessages, { text: `Ticket created: ${ticketResponse.id}`, sender: 'bot' }]);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (error) {
            setMessages((prevMessages) => [...prevMessages, { text: `Error: ${error}`, sender: 'bot' }]);
            setError(null);
        }
    }, [error]);

    return {
        messages,
        loading,
        sendMessage,
        handleCreateTicket,
    };
};

export default useChat;