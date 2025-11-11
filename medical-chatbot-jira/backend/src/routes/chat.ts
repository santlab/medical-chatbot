import { Router } from 'express';
import { getChatResponse, createJiraTicket } from '../controllers/chatController';

const router = Router();

// Route to handle chat interactions
router.post('/chat', getChatResponse);

// Route to create a Jira ticket
router.post('/jira/ticket', createJiraTicket);

export default router;