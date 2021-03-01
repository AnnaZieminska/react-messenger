import React from 'react';

class TypingIndicator extends React.Component {
    render() {
        return (
            <div className='typing-indicator fxrow'>
                <div className='typing-circle circle-1'></div>
                <div className='typing-circle circle-2'></div>
                <div className='typing-circle circle-3'></div>
            </div>
        );
    }
}

export default TypingIndicator;
