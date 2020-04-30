import React from 'react';
import $ from 'jquery'; 
import Notification from '../notifications/notification'

const NotificationsDropdown = (props) => {

    return (
        <li className="notification-trigger"><a className="msg-trigger-btn" onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            $("#nofificationsId").slideToggle();
        }}>notification</a>
        <div className="message-dropdown" id="nofificationsId">
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
    </li>
    )
}
export default NotificationsDropdown