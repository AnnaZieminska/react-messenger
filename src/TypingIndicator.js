import React from 'react';

function TypingIndicator() {
    return (
        <div className='typing-indicator fxrow'>
            <div className='typing-indicator__circle typing-indicator__circle--circle-1'></div>
            <div className='typing-indicator__circle typing-indicator__circle--circle-2'></div>
            <div className='typing-indicator__circle typing-indicator__circle--circle-3'></div>
        </div>
    );
}

export default TypingIndicator;
