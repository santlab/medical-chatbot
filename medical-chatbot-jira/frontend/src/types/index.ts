export interface ChatMessage {
    id: string;
    sender: 'user' | 'bot';
    content: string;
    timestamp: Date;
}

export interface TroubleshootOption {
    id: string;
    title: string;
    description: string;
    action: () => void;
}

export interface JiraTicket {
    id: string;
    summary: string;
    description: string;
    status: 'open' | 'in-progress' | 'closed';
}

export interface KnowledgeBaseArticle {
    id: string;
    title: string;
    content: string;
    relatedTickets: JiraTicket[];
}