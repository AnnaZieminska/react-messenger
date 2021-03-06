import React from 'react';

class MessageSubmitForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: '', typingTimer: null };
    }

    setTypingStatus(typing) {
        this.props.onTypingChange(typing);
    }

    handleMessageChange = event => {
        this.setTypingStatus(true);
        this.setState({ value: event.target.value });

        clearTimeout(this.state.typingTimer);
        if (event.target.value) {
            this.setState({
                typingTimer: setTimeout(() => this.setTypingStatus(false), 500)
            });
        }
    };

    handleMessageSubmit = event => {
        event.preventDefault();

        if (this.state.value) {
            this.props.onMessageSubmit(this.state.value);
            this.setState({
                value: ''
            });
        }
    };

    render() {
        return (
            <form
                className='fxrow message-submit'
                onSubmit={this.handleMessageSubmit}
            >
                <input
                    type='text'
                    placeholder='Type a new message'
                    value={this.state.value}
                    onChange={this.handleMessageChange}
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
}

export default MessageSubmitForm;
