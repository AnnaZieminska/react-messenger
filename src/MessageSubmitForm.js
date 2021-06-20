import React, { useState } from 'react';

function MessageSubmitForm(props) {
    const [value, setValue] = useState(['']);
    const [typingTimer, setTypingTimer] = useState(null);

    const setTypingStatus = typing => {
        props.onTypingChange(typing);
    };

    const handleMessageChange = event => {
        setTypingStatus(true);
        setValue(event.target.value);

        clearTimeout(typingTimer);
        if (event.target.value) {
            setTypingTimer(setTimeout(() => setTypingStatus(false), 500));
        }
    };

    const handleMessageSubmit = event => {
        event.preventDefault();

        if (value) {
            props.onMessageSubmit(value);
            setValue('');
        }
    };

    return (
        <form className='fxrow message-submit' onSubmit={handleMessageSubmit}>
            <input
                type='text'
                placeholder='Type a new message'
                value={value}
                onChange={handleMessageChange}
                className='fxgrow message-submit__input message-submit__input--text'
            />
            <input
                type='submit'
                value='Submit'
                className='message-submit__input message-submit__input--submit'
            />
        </form>
    );
}

export default MessageSubmitForm;
