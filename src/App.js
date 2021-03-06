import React from 'react';
import './App.css';
import MessageContainer from './MessageContainer';

class App extends React.Component {
    state = {
        user: '',
        messagesGroup: [],
        indicator: {
            user: '',
            isTypinng: false
        }
    };

    handleMessageSubmit = message => {
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
    }

    handleTypingChange = indicator => {
        this.setState({ indicator: indicator });
    };

    render() {
        return (
            <div className='fxrow full-height'>
                <MessageContainer
                    user={'User 1'}
                    messagesGroup={this.state.messagesGroup}
                    indicator={this.state.indicator}
                    onMessageSubmit={this.handleMessageSubmit}
                    onTypingChange={this.handleTypingChange}
                />
                <MessageContainer
                    user={'User 2'}
                    messagesGroup={this.state.messagesGroup}
                    indicator={this.state.indicator}
                    onMessageSubmit={this.handleMessageSubmit}
                    onTypingChange={this.handleTypingChange}
                />
            </div>
        );
    }
}

export default App;
