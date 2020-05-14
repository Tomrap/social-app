import React, { useRef, useContext } from 'react';
import { FirebaseContext } from '../firebase';

const SendMessage = (props) => {

    const textAreaRef = useRef(null);
    const firebase = useContext(FirebaseContext);

    async function addNewMessage() {
        const message = textAreaRef.current.value
        textAreaRef.current.value = ""
        const messageObject = {
            date : new Date(),
            message: message,
            userRef: props.loggedInUser.userRef
        }
        firebase.getDb().collection("messages").add(messageObject).then(async (docRef)=>{            
            //TODO - now assume that each user has corresponding document in conversations table
            let conversationResult = await props.loggedInUser.conversationsRef.get();
            let conversaionsMap = conversationResult.data()
            //TODO - now assume that each conversation exists and has corresponding document in chat table
            let chatResult = await conversaionsMap.chatsMap[props.chatCompanion].get()
            let chatList = chatResult.data()
            let messageList = chatList.messageList
            messageList.push(docRef) 
            conversaionsMap.chatsMap[props.chatCompanion].set({messageList: messageList})  
        })
    }

        return (
            <div className="chat-text-field">   
                <textarea ref = {textAreaRef} className="live-chat-field myOwnTextArea" placeholder="Text Message"></textarea>
                <button className="chat-message-send" type="submit" value="submit" onClick={addNewMessage}>
                    <img src="assets/images/icons/plane.png" alt=""/>
                </button>
            </div>
            )
}
export default SendMessage