import { Request, Response } from 'express';
import { createTicket } from '../integrations/jira';
import { getKnowledgeBaseAnswer } from '../integrations/knowledgeBase';

class ChatController {
    async handleUserQuery(req: Request, res: Response) {
        const userQuery = req.body.query;

        // Check if the query is related to creating a ticket
        if (userQuery.toLowerCase().includes('create ticket')) {
            const ticketData = req.body.ticketData;
            const ticket = await createTicket(ticketData);
            return res.status(201).json({ message: 'Ticket created successfully', ticket });
        }

        // Otherwise, try to get an answer from the knowledge base
        const answer = await getKnowledgeBaseAnswer(userQuery);
        if (answer) {
            return res.status(200).json({ answer });
        } else {
            return res.status(404).json({ message: 'No answer found for your query.' });
        }
    }
}

export default new ChatController();