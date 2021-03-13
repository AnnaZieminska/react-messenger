import PropTypes from 'prop-types';

export const IndicatorType = PropTypes.shape({
    user: PropTypes.string,
    isTyping: PropTypes.bool
});

export const MessageType = PropTypes.shape({
    message: PropTypes.string,
    user: PropTypes.string,
    time: PropTypes.number
});

export const MessagesGroupType = PropTypes.shape({
    group: PropTypes.string,
    messages: PropTypes.arrayOf(MessageType)
});

export const MessageContainerType = PropTypes.shape({
    user: PropTypes.string,
    messagesGroup: PropTypes.arrayOf(MessagesGroupType),
    indicator: IndicatorType
});

export const MessageGroupType = {
    messages: PropTypes.arrayOf(MessageType),
    isMyMessage: PropTypes.bool
};

export const MessageTextType = {
    isMyMessage: PropTypes.bool,
    slot: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};
