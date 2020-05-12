
import PerfectScrollbar from 'react-perfect-scrollbar'
import ChatMessage from './chatMessage'

import React, { useState, useEffect } from 'react';

const MessageList = (props) => {

    const [slidelist, setSlideList] = useState([]);

    useEffect(() => {
        async function fetchData() { 
            let conversationResult = await props.converstionsRef.get();
            let conversaionsMap = conversationResult.data()
            let chatResult = await conversaionsMap.chatsMap[props.chatCompanion].get()
            let chatList = chatResult.data()
    
    
            let promisesList = []
            chatList.messageList.forEach(element => {
                promisesList.push(element.get())
            });
    
            let arrOfResults = await Promise.all(promisesList);
    
            let messageList = []
            arrOfResults.forEach(element => {
                let elementData = element.data()
                let date = new Date(1970, 0, 1)
                date.setSeconds(elementData.date.seconds)
                messageList.push(<ChatMessage key = {props.chatCompanion} me={props.chatCompanion == elementData.userRef} 
                    message = {elementData.message} time={date.toISOString().substr(11, 8)}></ChatMessage>)
            });
            setSlideList(messageList)
        }
        fetchData()
        return () => {
            setSlideList([])
          };
      }, [props.chatCompanion]);

        return (
                <PerfectScrollbar>
                    <ul>
                       {slidelist}
                    </ul>
                </PerfectScrollbar>          
            )
    

}
export default MessageList