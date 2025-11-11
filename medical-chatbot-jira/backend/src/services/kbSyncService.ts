import axios from 'axios';
import { KnowledgeBaseEntry } from '../types/index';

class KbSyncService {
    private knowledgeBaseUrl: string;

    constructor(knowledgeBaseUrl: string) {
        this.knowledgeBaseUrl = knowledgeBaseUrl;
    }

    public async fetchKnowledgeBaseEntries(): Promise<KnowledgeBaseEntry[]> {
        try {
            const response = await axios.get(`${this.knowledgeBaseUrl}/entries`);
            return response.data;
        } catch (error) {
            console.error('Error fetching knowledge base entries:', error);
            throw new Error('Could not fetch knowledge base entries');
        }
    }

    public async syncWithJira(ticketId: string): Promise<void> {
        try {
            const response = await axios.post(`${this.knowledgeBaseUrl}/sync`, { ticketId });
            if (response.status !== 200) {
                throw new Error('Failed to sync with Jira');
            }
        } catch (error) {
            console.error('Error syncing with Jira:', error);
            throw new Error('Could not sync with Jira');
        }
    }
}

export default KbSyncService;