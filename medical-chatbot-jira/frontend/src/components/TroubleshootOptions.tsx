import React from 'react';

const TroubleshootOptions: React.FC = () => {
    const options = [
        { id: 1, label: 'Network Issues', description: 'Troubleshoot network connectivity problems.' },
        { id: 2, label: 'Login Problems', description: 'Resolve issues related to logging in.' },
        { id: 3, label: 'Software Bugs', description: 'Identify and report software bugs.' },
        { id: 4, label: 'Hardware Issues', description: 'Get help with hardware-related problems.' },
        { id: 5, label: 'General Questions', description: 'Ask general questions about the service.' },
    ];

    const handleOptionClick = (option: { id: number; label: string }) => {
        // Logic to handle option click, e.g., fetch troubleshooting steps or create a ticket
        console.log(`Selected option: ${option.label}`);
    };

    return (
        <div className="troubleshoot-options">
            <h2>Troubleshooting Options</h2>
            <ul>
                {options.map(option => (
                    <li key={option.id} onClick={() => handleOptionClick(option)}>
                        <h3>{option.label}</h3>
                        <p>{option.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TroubleshootOptions;