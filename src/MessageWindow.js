import React from 'react';
import MessageGroup from './MessageGroup';
import MessageText from './MessageText';
import { MessageContainerType } from './MessengerTypes';
import TypingIndicator from './TypingIndicator';

class MessageWindow extends React.Component {
    render() {
        let groups = this.props.messagesGroup.map((group, index) => {
            const isMyMessage = group.group === this.props.user;
            return (
                <div className='fxcol' key={index + 1}>
                    <span className='user-name'>
                        {!isMyMessage ? group.group : ''}{' '}
                    </span>

                    <MessageGroup
                        messages={group.messages}
                        isMyMessage={isMyMessage}
                    ></MessageGroup>
                </div>
            );
        });

        if (
            this.props.indicator.isTyping &&
            this.props.indicator.user !== this.props.user
        ) {
            const indicator = (
                <MessageText key={0} slot={<TypingIndicator />}></MessageText>
            );
            groups = groups.concat([indicator]);
        }

        return <div>{groups}</div>;
    }
}

MessageWindow.propTypes = MessageContainerType.isRequired;

export default MessageWindow;
