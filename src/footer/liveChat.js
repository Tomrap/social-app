import React from 'react';
import ChatMessage from '../messages/chatMessage'
import SingleSlide from '../friends/singleSlide'

const LiveChat = (props) => {

    return (
        <div className="footer-card position-relative">
        <div className="live-chat-inner">
            <div className="chat-text-field">
                <textarea className="live-chat-field custom-scroll" placeholder="Text Message"></textarea>
                <button className="chat-message-send" type="submit" value="submit">
                    <img src="assets/images/icons/plane.png" alt=""/>
                </button>
            </div>
            <div className="chat-output-box">
                <div className="live-chat-title"> 
                    <SingleSlide></SingleSlide>
                    <div className="posted-author">
                        <h6 className="author"><a href="profile.html">Robart Marloyan</a></h6>
                        <span className="active-pro">active now</span>
                    </div>
                    <div className="live-chat-settings ml-auto">
                        <button className="chat-settings"><i className="flaticon-settings"></i></button>
                        <button className="close-btn" data-close="chat-output-box"><i className="flaticon-cross-out"></i></button>
                    </div>
                </div>
                <div className="message-list-inner">
                    <ul className="message-list custom-scroll">
                       <ChatMessage></ChatMessage>
                       <ChatMessage></ChatMessage>
                       <ChatMessage></ChatMessage>
                       <ChatMessage></ChatMessage>
                       <ChatMessage></ChatMessage>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default LiveChat