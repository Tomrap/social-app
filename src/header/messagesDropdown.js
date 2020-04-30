import React , { useContext } from 'react';
import Message from '../messages/message'
import {SlideDown} from 'react-slidedown'
import './dropdown.css';
import 'react-slidedown/lib/slidedown.css'

//TODO slidedown animation not working

const MessagesDropdown = (props) => {

    const [open, setOpen] = React.useState(false);

    const handler = (event) => {
        event.stopPropagation();
        event.preventDefault();
        open ? setOpen(false) : setOpen(true)
    };

    return (
        <li className="msg-trigger"><a className="msg-trigger-btn" onClick={handler}>Messages</a>
        <SlideDown className={'dropdown-slidedown'}>
        {open ? 
            <div className="message-dropdown">
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
        :  <div></div>}
        </SlideDown>
    </li>
    )
}
export default MessagesDropdown