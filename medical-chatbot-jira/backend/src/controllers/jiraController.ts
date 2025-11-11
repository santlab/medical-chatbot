import { Request, Response } from 'express';
import { createJiraTicket } from '../integrations/jira';
import { getKnowledgeBaseAnswer } from '../integrations/knowledgeBase';

export class JiraController {
    // Method to create a Jira ticket
    public async createTicket(req: Request, res: Response): Promise<void> {
        try {
            const ticketData = req.body;
            const ticket = await createJiraTicket(ticketData);
            res.status(201).json(ticket);
        } catch (error) {
            res.status(500).json({ message: 'Error creating ticket', error });
        }
    }

    // Method to get answers from the knowledge base
    public async getKnowledgeBaseAnswer(req: Request, res: Response): Promise<void> {
        try {
            const question = req.query.question as string;
            const answer = await getKnowledgeBaseAnswer(question);
            res.status(200).json(answer);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching knowledge base answer', error });
        }
    }
}