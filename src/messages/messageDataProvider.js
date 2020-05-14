import MessageList from './messageList'
import PerfectScrollbar from 'react-perfect-scrollbar'
import MessageScrollbar from './messageScrollbar'

import React, { useState, useEffect } from 'react';

const MessageDataProvider = (props) => {

  // const numberOfMessages = 3;

    const [arrayOfResults, setArrayOfResults] = useState([])
    // const [indexes, setIndexes] = useState({first: 0, last: numberOfMessages})

    useEffect(() => {
        async function setUpData() {
        let conversationResult = await props.converstionsRef.get();
        let conversaionsMap = conversationResult.data()
        let chatResult = await conversaionsMap.chatsMap[props.chatCompanion].get()
        let chatList = chatResult.data()

        // let promisesList = []
        // chatList.messageList.forEach(element => {
        //     promisesList.push(element.get())
        // });

        // let arrOfResults = await Promise.all(promisesList);
        // setIndexes({first: 0, last: numberOfMessages})
        setArrayOfResults(chatList.messageList)

    }
    setUpData()
    },[props.converstionsRef,props.chatCompanion])

          let toDisplay  = arrayOfResults.length>0 
            ? <MessageScrollbar arrayOfResults = {arrayOfResults} chatCompanion={props.chatCompanion}></MessageScrollbar>
            : <div>Loading</div>  

            return (
              <React.Fragment>{toDisplay}</React.Fragment>
            )
}

//can be used to not rerender component in case chatCompanion stays the same
// function areEqual(prevProps, nextProps) {
//   if(prevProps.chatCompanion == nextProps.chatCompanion) {
//     return true
//   }
//   return false
// }

// export default React.memo(MessageDataProvider, areEqual)
export default MessageDataProvider