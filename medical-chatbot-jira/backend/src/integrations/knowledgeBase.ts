import axios from 'axios';

const KNOWLEDGE_BASE_API_URL = process.env.KNOWLEDGE_BASE_API_URL || 'http://localhost:3000/api/knowledge-base';

export const fetchTroubleshootingOptions = async () => {
    try {
        const response = await axios.get(`${KNOWLEDGE_BASE_API_URL}/troubleshooting-options`);
        return response.data;
    } catch (error) {
        console.error('Error fetching troubleshooting options:', error);
        throw error;
    }
};

export const fetchFAQ = async (question: string) => {
    try {
        const response = await axios.get(`${KNOWLEDGE_BASE_API_URL}/faq`, { params: { question } });
        return response.data;
    } catch (error) {
        console.error('Error fetching FAQ:', error);
        throw error;
    }
};

export const createKnowledgeBaseTicket = async (ticketData: any) => {
    try {
        const response = await axios.post(`${KNOWLEDGE_BASE_API_URL}/tickets`, ticketData);
        return response.data;
    } catch (error) {
        console.error('Error creating ticket in knowledge base:', error);
        throw error;
    }
};