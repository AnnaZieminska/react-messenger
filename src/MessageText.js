import PropTypes from 'prop-types';
import React from 'react';

class MessageText extends React.Component {
    render() {
        return (
            <div
                className={`fxflex ${
                    this.props.isMyMessage ? 'fxend' : 'fxstart'
                }`}
            >
                <span
                    className={`message-box ${
                        this.props.isMyMessage ? 'color' : 'gray'
                    }`}
                >
                    {this.props.slot}
                </span>
            </div>
        );
    }
}

MessageText.propTypes = {
    isMyMessage: PropTypes.bool,
    slot: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default MessageText;
