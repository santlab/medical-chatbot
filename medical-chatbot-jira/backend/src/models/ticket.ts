export interface Ticket {
    id: string;
    summary: string;
    description: string;
    status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
    createdAt: Date;
    updatedAt: Date;
    reporter: string;
    assignee?: string;
}