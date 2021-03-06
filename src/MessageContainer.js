import React from 'react';
import './App.css';
import MessageSubmitForm from './MessageSubmitForm';
import MessageWindow from './MessageWindow';
import { MessageContainerType } from './MessengerTypes';

class MessageContainer extends React.Component {
    handleMessageSubmit = message => {
        const createdMessage = {
            message: message,
            user: this.props.user,
            time: Date.now()
        };
        this.props.onMessageSubmit(createdMessage);
    };

    handleShowTypingIndicator = typing => {
        const userIsTyping = {
            user: this.props.user,
            isTyping: typing
        };
        this.props.onTypingChange(userIsTyping);
    };

    render() {
        return (
            <div className='fxcol fxgrow message-container'>
                <div className='fxgrow overflow'>
                    <MessageWindow
                        user={this.props.user}
                        messagesGroup={this.props.messagesGroup}
                        indicator={this.props.indicator}
                    />
                </div>
                <MessageSubmitForm
                    onMessageSubmit={this.handleMessageSubmit}
                    onTypingChange={this.handleShowTypingIndicator}
                />
            </div>
        );
    }
}

MessageContainer.propTypes = MessageContainerType.isRequired;

export default MessageContainer;
