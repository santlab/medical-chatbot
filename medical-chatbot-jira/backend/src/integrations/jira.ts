import axios from 'axios';

const JIRA_BASE_URL = process.env.JIRA_BASE_URL;
const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN;
const JIRA_EMAIL = process.env.JIRA_EMAIL;

export const createJiraTicket = async (ticketData) => {
    try {
        const response = await axios.post(`${JIRA_BASE_URL}/rest/api/2/issue`, ticketData, {
            auth: {
                username: JIRA_EMAIL,
                password: JIRA_API_TOKEN,
            },
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(`Failed to create Jira ticket: ${error.response?.data?.message || error.message}`);
    }
};

export const getJiraTicket = async (ticketId) => {
    try {
        const response = await axios.get(`${JIRA_BASE_URL}/rest/api/2/issue/${ticketId}`, {
            auth: {
                username: JIRA_EMAIL,
                password: JIRA_API_TOKEN,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(`Failed to retrieve Jira ticket: ${error.response?.data?.message || error.message}`);
    }
};