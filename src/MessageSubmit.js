import React from 'react';
import { Subject } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';

class MessageSubmit extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: '' };
        this.onSearch$ = new Subject();
    }

    componentDidMount() {
        this.subscription = this.onSearch$
            .pipe(
                tap(() => {
                    this.setTypingStatus(true);
                }),
                debounceTime(500)
            )
            .subscribe(() => {
                this.setTypingStatus(false);
            });
    }

    componentWillUnmount() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    setTypingStatus(typing) {
        this.props.onShowTypingIndicator(typing);
    }

    handleChange = event => {
        this.onSearch$.next(event.target.value);
        this.setState({ value: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.value) {
            const value = this.state.value;
            this.props.onMessageSend(value);
            this.setState({
                value: ''
            });
        }
    };

    render() {
        return (
            <form className='fxrow message-submit' onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    placeholder='Type a new message'
                    value={this.state.value}
                    onChange={this.handleChange}
                    className='fxgrow input'
                />
                <input type='submit' value='Submit' className='submit' />
            </form>
        );
    }
}

export default MessageSubmit;
