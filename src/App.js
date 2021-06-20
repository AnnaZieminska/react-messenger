import React, { useState } from 'react';
import './App.css';
import MessageContainer from './MessageContainer';

function App() {
    const [messagesGroup, setMessagesGroup] = useState([]);
    const [indicator, setIndicator] = useState({
        user: '',
        isTypinng: false
    });

    const groupMessages = (messagesGroup, message) => {
        if (messagesGroup.length === 0) {
            const groupedMessage = {
                group: message.user,
                messages: [message]
            };
            return messagesGroup.concat([groupedMessage]);
        }

        const lastMessage = messagesGroup[messagesGroup.length - 1];
        if (lastMessage.group === message.user) {
            lastMessage.messages.push(message);
            return messagesGroup;
        }

        const groupedMessage = {
            group: message.user,
            messages: [message]
        };

        return messagesGroup.concat([groupedMessage]);
    };

    const handleMessageSubmit = message => {
        setMessagesGroup(groupMessages(messagesGroup, message));
        setIndicator({
            user: '',
            isTypinng: false
        });
    };

    const handleTypingChange = indicator => {
        setIndicator(indicator);
    };

    return (
        <div className='fxrow full-height'>
            <MessageContainer
                user={'User 1'}
                messagesGroup={messagesGroup}
                indicator={indicator}
                onMessageSubmit={handleMessageSubmit}
                onTypingChange={handleTypingChange}
            />
            <MessageContainer
                user={'User 2'}
                messagesGroup={messagesGroup}
                indicator={indicator}
                onMessageSubmit={handleMessageSubmit}
                onTypingChange={handleTypingChange}
            />
        </div>
    );
}

export default App;
