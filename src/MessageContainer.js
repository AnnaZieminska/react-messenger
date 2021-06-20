import React from 'react';
import './App.css';
import MessageSubmitForm from './MessageSubmitForm';
import MessageWindow from './MessageWindow';
import { MessageContainerType } from './MessengerTypes';

function MessageContainer(props) {
    const handleMessageSubmit = message => {
        const createdMessage = {
            message: message,
            user: props.user,
            time: Date.now()
        };
        props.onMessageSubmit(createdMessage);
    };

    const handleShowTypingIndicator = typing => {
        const userIsTyping = {
            user: props.user,
            isTyping: typing
        };
        props.onTypingChange(userIsTyping);
    };

    return (
        <div className='fxcol fxgrow message-container'>
            <div className='fxgrow overflow'>
                <MessageWindow
                    user={props.user}
                    messagesGroup={props.messagesGroup}
                    indicator={props.indicator}
                />
            </div>
            <MessageSubmitForm
                onMessageSubmit={handleMessageSubmit}
                onTypingChange={handleShowTypingIndicator}
            />
        </div>
    );
}

MessageContainer.propTypes = MessageContainerType.isRequired;

export default MessageContainer;
