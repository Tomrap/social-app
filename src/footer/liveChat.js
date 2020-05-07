import React , { Component } from 'react';
import ChatMessage from '../messages/chatMessage'

import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'

class LiveChat extends Component {

    state = {
        show: false,
        clicked : false
    }

    open = () => {
        this.setState({
            show: true
        })
    }

    close = () => {
        this.setState({
            show: false,
            clicked: true
        })
    }

    static getDerivedStateFromProps(props, state) {
        if (props.show  && !state.clicked) {
          return {
            show: true
          };
        }
        return {
            show: false,
            clicked: false
        }
      }

    render() {
    return (
        <div className="footer-card position-relative">
        <div className="live-chat-inner">
            <div className="chat-text-field">   
                <textarea className="live-chat-field myOwnTextArea" placeholder="Text Message" onClick={this.open}></textarea>
                <button className="chat-message-send" type="submit" value="submit">
                    <img src="assets/images/icons/plane.png" alt=""/>
                </button>
            </div>
            <div className={this.state.show ? `chat-output-box show` : `chat-output-box`}>
                <div className="live-chat-title"> 
                    <div className="posted-author">
                        <h6 className="author"><a href="profile.html">{this.props.currentUser.name}</a></h6>
                        <span className="active-pro">{this.props.currentUser.active}</span>
                    </div>
                    <div className="live-chat-settings ml-auto">
                        <button className="chat-settings"><i className="flaticon-settings"></i></button>
                        <button className="close-btn" data-close="chat-output-box" onClick={this.close}><i className="flaticon-cross-out"></i></button>
                    </div>
                </div>
                <div className="message-list-inner">
                    <ul className="message-list custom-scroll">
                        <PerfectScrollbar>
                            <ChatMessage></ChatMessage>
                            <ChatMessage></ChatMessage>
                            <ChatMessage></ChatMessage>
                            <ChatMessage></ChatMessage>
                            <ChatMessage></ChatMessage>
                        </PerfectScrollbar>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
    }
}

export default LiveChat