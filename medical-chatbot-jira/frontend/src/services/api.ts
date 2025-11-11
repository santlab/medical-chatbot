import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

export const sendMessage = async (message) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/chat/send`, { message });
        return response.data;
    } catch (error) {
        throw new Error('Error sending message: ' + error.message);
    }
};

export const getTroubleshootOptions = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/chat/troubleshoot-options`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching troubleshoot options: ' + error.message);
    }
};

export const createJiraTicket = async (ticketData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/jira/tickets`, ticketData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating Jira ticket: ' + error.message);
    }
};