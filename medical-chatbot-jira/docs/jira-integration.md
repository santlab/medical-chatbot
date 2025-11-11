# Jira Integration Documentation

## Overview

This document outlines the integration of the medical chatbot with Jira Service Management. The integration allows users to create tickets directly from the chatbot interface and provides access to a knowledge base for troubleshooting common issues.

## Features

- **Ticket Creation**: Users can create Jira tickets directly from the chat interface.
- **Knowledge Base Access**: The chatbot can answer user queries based on the integrated knowledge base.
- **Troubleshooting Options**: Users are provided with various troubleshooting options to resolve common issues.

## Integration Details

### 1. Setting Up Jira Integration

To integrate with Jira Service Management, ensure that the following configurations are set in your environment:

- **Jira API URL**: The base URL for your Jira instance.
- **API Token**: A valid API token for authentication.
- **Project Key**: The key of the Jira project where tickets will be created.

### 2. API Endpoints

The following API endpoints are used for Jira integration:

- **Create Ticket**: 
  - **Endpoint**: `POST /api/jira/tickets`
  - **Request Body**:
    ```json
    {
      "summary": "Issue summary",
      "description": "Detailed description of the issue",
      "projectKey": "PROJECT_KEY",
      "issueType": "Task"
    }
    ```

- **Fetch Knowledge Base Articles**:
  - **Endpoint**: `GET /api/kb/articles`
  - **Response**:
    ```json
    [
      {
        "id": "article_id",
        "title": "Article Title",
        "content": "Article content"
      }
    ]
    ```

### 3. Creating a Ticket

When a user requests to create a ticket, the chatbot will prompt for the necessary details (summary, description, etc.) and send a request to the Jira API. Upon successful creation, the user will receive a confirmation message along with the ticket ID.

### 4. Knowledge Base Queries

Users can ask questions related to common issues. The chatbot will query the knowledge base and provide relevant articles or solutions based on the user's input.

## Conclusion

The integration of the medical chatbot with Jira Service Management enhances user experience by providing seamless ticket creation and access to troubleshooting resources. Ensure that all configurations are correctly set up to enable smooth operation.