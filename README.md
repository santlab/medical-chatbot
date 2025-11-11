# Medical Chatbot with Jira Integration

This project is a medical-themed chatbot designed to assist users with troubleshooting common problems and answering frequently asked questions. The chatbot integrates with Jira Service Management to allow users to create support tickets directly from the chat interface.

## Project Structure

The project is organized into the following main directories:

- **frontend**: Contains the React application for the chatbot interface.
  - **public**: Static files, including the main HTML file.
  - **src**: Source code for the React application, including components, hooks, services, and styles.
  
- **backend**: Contains the Node.js application that handles API requests and integrates with Jira.
  - **src**: Source code for the backend application, including server setup, routes, controllers, and integrations.
  
- **infra**: Contains infrastructure-related files, including Docker configurations and Nginx setup.
  
- **docs**: Documentation files covering architecture, Jira integration, and UI design.
  
- **scripts**: Utility scripts for tasks such as synchronizing the knowledge base.

## Features

- Interactive chat interface for user support.
- Troubleshooting options for common issues.
- Integration with Jira Service Management for ticket creation.
- Knowledge base integration for answering user queries.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd medical-chatbot-jira
   ```

2. **Set up the backend**:
   - Navigate to the `backend` directory and install dependencies:
     ```
     cd backend
     npm install
     ```
   - Configure environment variables by copying `.env.example` to `.env` and updating the values as needed.

3. **Set up the frontend**:
   - Navigate to the `frontend` directory and install dependencies:
     ```
     cd frontend
     npm install
     ```

4. **Run the application**:
   - Start the backend server:
     ```
     cd backend
     npm start
     ```
   - Start the frontend application:
     ```
     cd frontend
     npm start
     ```

5. **Access the chatbot**:
   - Open your web browser and navigate to `http://localhost:3000` to interact with the chatbot.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
