# UI Design Specifications for Medical Chatbot

## Overview
The Medical Chatbot is designed to assist users with troubleshooting common problems and answering questions related to medical services. The user interface (UI) is crafted to be intuitive and user-friendly, with a color scheme that reflects a medical theme, primarily using shades of green.

## Color Palette
- **Primary Color:** #4CAF50 (Green)
- **Secondary Color:** #A5D6A7 (Light Green)
- **Background Color:** #F1F8E9 (Lightest Green)
- **Text Color:** #212121 (Dark Gray)

## Layout
The chatbot interface consists of the following main components:
1. **Chat Window:** This is the primary area where users interact with the chatbot. It displays messages exchanged between the user and the bot.
2. **Message Input:** Located at the bottom of the chat window, this component allows users to type and send their messages.
3. **Troubleshoot Options:** A section that provides users with predefined troubleshooting options for common issues.

## Typography
- **Font Family:** Arial, sans-serif
- **Font Sizes:**
  - Headings: 18px
  - Body Text: 14px
  - Input Text: 16px

## Component Design
### Chat Window
- **Background Color:** #FFFFFF (White)
- **Border:** 1px solid #A5D6A7
- **Padding:** 10px
- **Border Radius:** 5px

### Message List
- **Message Bubble Color (User):** #E1F5FE (Light Blue)
- **Message Bubble Color (Bot):** #C8E6C9 (Light Green)
- **Margin:** 5px
- **Padding:** 8px
- **Border Radius:** 15px

### Message Input
- **Background Color:** #F1F8E9
- **Border:** 1px solid #4CAF50
- **Padding:** 10px
- **Border Radius:** 5px

### Troubleshoot Options
- **Background Color:** #E8F5E9
- **Padding:** 10px
- **Border Radius:** 5px
- **Button Style:** 
  - Background Color: #4CAF50
  - Color: #FFFFFF
  - Padding: 8px 12px
  - Border: none
  - Border Radius: 5px
  - Cursor: pointer

## Accessibility
- Ensure all text has sufficient contrast against the background colors.
- Use ARIA roles and properties to enhance screen reader compatibility.
- Provide keyboard navigation support for all interactive elements.

## Responsiveness
The UI should be responsive and adapt to various screen sizes, ensuring usability on both desktop and mobile devices. The chat window should resize appropriately, and components should stack vertically on smaller screens.

## Integration with Jira
The chatbot will include an option for users to create a ticket in Jira Service Management directly from the chat interface. This feature should be clearly indicated and easily accessible within the chat window.

## Conclusion
The design of the Medical Chatbot aims to provide a seamless and supportive user experience, with a focus on clarity, accessibility, and responsiveness. The green color scheme not only aligns with medical themes but also promotes a sense of calm and trust.