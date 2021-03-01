import React from 'react';
import './App.css';
import MessageContainer from './MessageContainer';

class Messenger extends React.Component {
    constructor() {
        super();
        this.state = {
            user: '',
            messagesGroup: [],
            indicator: {
                user: '',
                isTypinng: false
            }
        };
    }

    handleMessageSend = message => {
        this.setState({
            messagesGroup: this.groupMessages(
                this.state.messagesGroup,
                message
            ),
            indicator: {
                user: '',
                isTypinng: false
            }
        });
    };

    groupMessages(messagesGroup, message) {
        if (messagesGroup.length === 0) {
            const groupedMessage = {
                group: message.user,
                messages: [].concat([message])
            };
            return messagesGroup.concat([groupedMessage]);
        } else {
            const lastMessage = messagesGroup[messagesGroup.length - 1];
            if (lastMessage.group === message.user) {
                lastMessage.messages.push(message);
                return messagesGroup;
            } else {
                const groupedMessage = {
                    group: message.user,
                    messages: [].concat([message])
                };
                return messagesGroup.concat([groupedMessage]);
            }
        }
    }

    handleShowTypingIndicator = indicator => {
        this.setState({ indicator: indicator });
    };

    render() {
        return (
            <div className='fxrow full-height'>
                <MessageContainer
                    user={'User 1'}
                    messagesGroup={this.state.messagesGroup}
                    indicator={this.state.indicator}
                    onMessageSend={this.handleMessageSend}
                    onShowTypingIndicator={this.handleShowTypingIndicator}
                />
                <MessageContainer
                    user={'User 2'}
                    messagesGroup={this.state.messagesGroup}
                    indicator={this.state.indicator}
                    onMessageSend={this.handleMessageSend}
                    onShowTypingIndicator={this.handleShowTypingIndicator}
                />
            </div>
        );
    }
}

export default Messenger;
