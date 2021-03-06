import React , { Component } from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';
import MessageDataProvider from './messageDataProvider'
import SendMessage from './sendMessage'

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
            {this.state.show ?
                <div className="live-chat-inner">
                        <SendMessage loggedInUser={this.props.loggedInUser} chatCompanion={this.props.currentUser.userId}></SendMessage>
                        <div className="chat-output-box show">
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
                                    {/* providing random key will always remount component instead of rerendering which means it will clean up all states etc */}
                                    <MessageDataProvider key={Math.random()} converstionsRef={this.props.loggedInUser.conversationsRef} 
                                    chatCompanion={this.props.currentUser.userId}></MessageDataProvider> 
                                </ul>
                            </div>
                    </div>
                </div>
            : <div></div>        
            }
    </div>
    )
    }
}

export default LiveChat