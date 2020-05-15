import React from 'react';

const ChatMessage = (props) => {

    let message = props.message.startsWith("http") ? <img src={props.message}></img> : <p>{props.message}</p>

    return (
        <li className={props.me ? "text-author" : "text-friends"}>
            {message}
            <div className="message-time">{props.time}</div>
        </li>
    )
}

export default ChatMessage