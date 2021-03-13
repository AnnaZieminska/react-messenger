import React from 'react';
import MessageText from './MessageText';
import { MessageGroupType } from './MessengerTypes';

function MessageGroup(props) {
    const messages = props.messages.map(message => (
        <MessageText
            key={message.time}
            isMyMessage={props.isMyMessage}
            slot={message.message}
        ></MessageText>
    ));

    return <div>{messages}</div>;
}

MessageGroup.propTypes = MessageGroupType;

export default MessageGroup;
