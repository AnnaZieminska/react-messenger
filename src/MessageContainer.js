import React from 'react';
import './App.css';
import MessageSubmit from './MessageSubmit';
import MessageWindow from './MessageWindow';
import { MessageContainerType } from './MessengerTypes';

class MessageContainer extends React.Component {
    handleMessageSend = message => {
        const createdMessage = {
            message: message,
            user: this.props.user,
            time: Date.now()
        };
        this.props.onMessageSend(createdMessage);
    };

    handleShowTypingIndicator = typing => {
        const userIsTyping = {
            user: this.props.user,
            isTyping: typing
        };
        this.props.onShowTypingIndicator(userIsTyping);
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
                <MessageSubmit
                    onMessageSend={this.handleMessageSend}
                    onShowTypingIndicator={this.handleShowTypingIndicator}
                />
            </div>
        );
    }
}

MessageContainer.propTypes = MessageContainerType.isRequired;

export default MessageContainer;
