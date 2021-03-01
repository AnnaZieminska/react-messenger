import PropTypes from 'prop-types';
import React from 'react';
import MessageText from './MessageText';
import { MessageType } from './MessengerTypes';

class MessageGroup extends React.Component {
    render() {
        const messages = this.props.messages.map(message => {
            return (
                <MessageText
                    key={message.time}
                    isMyMessage={this.props.isMyMessage}
                    slot={message.message}
                ></MessageText>
            );
        });

        return <div>{messages}</div>;
    }
}

MessageGroup.propTypes = {
    messages: PropTypes.arrayOf(MessageType),
    isMyMessage: PropTypes.bool
};

export default MessageGroup;
