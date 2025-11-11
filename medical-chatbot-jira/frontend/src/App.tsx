import React from 'react';
import ChatWindow from './components/ChatWindow';
import './styles/theme.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Medical Chatbot</h1>
      <ChatWindow />
    </div>
  );
};

export default App;