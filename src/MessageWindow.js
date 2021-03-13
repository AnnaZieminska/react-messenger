import React from 'react';
import MessageGroup from './MessageGroup';
import MessageText from './MessageText';
import { MessageContainerType } from './MessengerTypes';
import TypingIndicator from './TypingIndicator';

function MessageWindow(props) {
    const groups = props.messagesGroup.map((group, index) => {
        const isMyMessage = group.group === props.user;
        return (
            <div className='fxcol' key={index + 1}>
                {!isMyMessage && (
                    <span className='user-name'>{group.group}</span>
                )}

                <MessageGroup
                    messages={group.messages}
                    isMyMessage={isMyMessage}
                />
            </div>
        );
    });

    return (
        <div>
            {groups}
            {props.indicator.isTyping &&
                props.indicator.user !== props.user && (
                    <MessageText key={0} slot={<TypingIndicator />} />
                )}
        </div>
    );
}

MessageWindow.propTypes = MessageContainerType.isRequired;

export default MessageWindow;
