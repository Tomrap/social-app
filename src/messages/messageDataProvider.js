import MessageList from './messageList'
import PerfectScrollbar from 'react-perfect-scrollbar'
import MessageScrollbar from './messageScrollbar'
import { FirebaseContext } from '../firebase';

import React, { useState, useEffect, useRef } from 'react';

const MessageDataProvider = (props) => {

  // const firebase = useContext(FirebaseContext);

  // const numberOfMessages = 3;

    const [arrayOfResults, _setArrayOfResults] = useState([])
    const [newMessage, setNewMessage] = useState(undefined)
    // const [indexes, setIndexes] = useState({first: 0, last: numberOfMessages})

    // function getCurrentArrayOfResult()  {
    //   return arrayOfResults
    // }

    //event handler by default only have access to initial value of arrayOfResults using useState contrary to class component and using setState - https://medium.com/geographit/accessing-react-state-in-event-listeners-with-usestate-and-useref-hooks-8cceee73c559
    const myStateRef = React.useRef(arrayOfResults);

    const setArrayOfResults = messageList => {
      myStateRef.current = messageList;
      _setArrayOfResults(messageList);
    };

    function callback(snapshot) {
      if(myStateRef.current.length == 0) {
        setArrayOfResults(snapshot.data().messageList)
      } else {
        const messageList = snapshot.data().messageList
        setNewMessage(messageList[messageList.length-1])
      }
    }

    useEffect(() => {
        async function setUpData() {
        let conversationResult = await props.converstionsRef.get();
        let conversaionsMap = conversationResult.data()


  
        // let chatResult = await conversaionsMap.chatsMap[props.chatCompanion].get()
        // let chatList = chatResult.data()

        // let promisesList = []
        // chatList.messageList.forEach(element => {
        //     promisesList.push(element.get())
        // });

        // let arrOfResults = await Promise.all(promisesList);
        // setIndexes({first: 0, last: numberOfMessages})


        // setArrayOfResults(chatList.messageList)
          
  

        let unsubscribe = conversaionsMap.chatsMap[props.chatCompanion].onSnapshot((snapshot) => callback(snapshot))
        

        return () => {
          unsubscribe();
        }
    }
    setUpData()
    },[props.converstionsRef,props.chatCompanion])

          let toDisplay  = arrayOfResults.length>0 
            ? <MessageScrollbar newMessage = {newMessage} arrayOfResults = {arrayOfResults} chatCompanion={props.chatCompanion}></MessageScrollbar>
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