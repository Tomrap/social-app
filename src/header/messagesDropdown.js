import React from 'react';
import Message from '../messages/message'
import $ from 'jquery'; 


const MessagesDropdown = (props) => {

    const handler = (event) => {
        // event.stopPropagation();
        event.preventDefault();
        $("#messagesId").slideToggle(); 
    };

    return (
        <li className="msg-trigger"><a className="msg-trigger-btn" onClick={handler}>Messages</a>
        <div className="message-dropdown" id="messagesId">
            <div className="dropdown-title">
                <p className="recent-msg">recent message</p>
                <div className="message-btn-group">
                    <button>New group</button>
                    <button>New Message</button>
                </div>
            </div>
            <ul className="dropdown-msg-list">
               <Message></Message>
               <Message></Message>
               <Message></Message>
            </ul>
            <div className="msg-dropdown-footer">
                <button>See all in messenger</button>
                <button>Mark All as Read</button>
            </div>
        </div>
    </li>
    )
}
export default MessagesDropdown