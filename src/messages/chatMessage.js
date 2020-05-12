import React from 'react';

const ChatMessage = (props) => {

    return (
        <li className={props.me ? "text-author" : "text-friends"}>
            <p>{props.message}</p>
            <div className="message-time">{props.time}</div>
        </li>
    )
}

export default ChatMessage