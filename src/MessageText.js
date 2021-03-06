import React from 'react';
import { MessageTextType } from './MessengerTypes';

function MessageText(props) {
    return (
        <div className={`fxflex ${props.isMyMessage ? 'fxend' : 'fxstart'}`}>
            <span
                className={`message-box ${
                    props.isMyMessage
                        ? 'message-box--color'
                        : 'message-box--gray'
                }`}
            >
                {props.slot}
            </span>
        </div>
    );
}

MessageText.propTypes = MessageTextType;

export default MessageText;
