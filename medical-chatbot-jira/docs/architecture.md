# Architecture of the Medical Chatbot with Jira Integration

## Overview
The Medical Chatbot is designed to assist users in troubleshooting common medical-related issues through an interactive chat interface. It integrates with Jira Service Management to allow users to create support tickets directly from the chat. The application is structured into a frontend and backend, with a focus on a user-friendly experience and efficient problem resolution.

## Architecture Components

### Frontend
- **Framework**: React
- **Main Components**:
  - **ChatWindow**: Displays the chat interface for user interactions.
  - **MessageList**: Renders the list of messages exchanged in the chat.
  - **MessageInput**: Allows users to type and send messages.
  - **TroubleshootOptions**: Provides users with various troubleshooting options.
- **Styling**: The application uses a green color palette, inspired by medical themes, to create a calming and professional user interface.
- **State Management**: Custom hooks (e.g., `useChat`) manage chat state and interactions with the backend.

### Backend
- **Framework**: Node.js with Express
- **Main Components**:
  - **Chat Routes**: Handle chat-related API requests.
  - **Chat Controller**: Manages chat interactions and responses.
  - **Jira Controller**: Facilitates interactions with Jira for ticket creation.
  - **Integrations**: Connects with Jira API and the knowledge base for retrieving troubleshooting information.
- **Services**: Includes a service for synchronizing the knowledge base to ensure up-to-date information is available for users.

### Database
- **Jira Service Management**: Used for ticket management and tracking user issues.
- **Knowledge Base**: Provides a repository of common problems and solutions to assist users in troubleshooting.

## User Interaction Flow
1. **User Initiates Chat**: The user opens the chat interface and types a query or selects a troubleshooting option.
2. **Response Generation**: The chatbot processes the input, retrieves relevant information from the knowledge base, and provides an answer.
3. **Ticket Creation**: If the issue cannot be resolved through the chatbot, the user has the option to create a Jira ticket directly from the chat interface.
4. **Follow-Up**: Users can receive updates on their tickets and continue to interact with the chatbot for further assistance.

## Deployment
- The application is containerized using Docker, with separate Dockerfiles for the frontend and backend.
- A `docker-compose.yml` file orchestrates the deployment of the application, ensuring all services run smoothly together.

## Conclusion
The Medical Chatbot with Jira integration aims to streamline the troubleshooting process for users while providing a seamless experience through its interactive chat interface. The architecture is designed to be scalable and maintainable, ensuring that users receive timely and accurate assistance.