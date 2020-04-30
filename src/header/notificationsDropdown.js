import React , { useContext } from 'react';
import Notification from '../notifications/notification'
import {SlideDown} from 'react-slidedown'

const NotificationsDropdown = (props) => {

    const [open, setOpen] = React.useState(false);

    const handler = (event) => {
        event.stopPropagation();
        event.preventDefault();
        open ? setOpen(false) : setOpen(true)
    };
    
    return (
        <li className="notification-trigger"><a className="msg-trigger-btn" onClick={handler}>notification</a>
         <SlideDown className={'dropdown-slidedown'}>
         {open ? 
            <div className="message-dropdown">
                <div className="dropdown-title">
                    <p className="recent-msg">Notification</p>
                    <button>
                        <i className="flaticon-settings"></i>
                    </button>
                </div>
                <ul className="dropdown-msg-list">
                    <Notification></Notification>
                    <Notification></Notification>
                    <Notification></Notification>
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
export default NotificationsDropdown