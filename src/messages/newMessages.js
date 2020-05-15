import ChatMessage from './chatMessage'

import PerfectScrollbar from 'react-perfect-scrollbar'

import React, { useState, useEffect } from 'react';

const NewMessages = (props) => {

    // const numberOfMessages = 5;

    const [messageList, setMessageList] = useState([]);
    // const [indexes, setIndexes] = useState({first: 0, last: numberOfMessages})
    // const [finished, setFinished] = useState(false);

    async function fetchData() { 

        // if(props.indexes.first == 0) {
        //     setMessageList([])
        // }

        if(props.newMessage != undefined) {
            const newMessage = await props.newMessage.get()
            let elementId = newMessage.id
            let elementData = newMessage.data()
            let date = new Date(1970, 0, 1)
            date.setSeconds(elementData.date.seconds)
            let messageListCopy = messageList.slice()
            messageListCopy.unshift(<ChatMessage key = {elementId} me={props.chatCompanion == elementData.userRef} 
                message = {elementData.message} time={date.toISOString().substr(11, 8)}></ChatMessage>)
    
            setMessageList(messageListCopy)
        }


        // let promisesList = []
        // props.resultsToDisplay.forEach(element => {
        //     promisesList.push(element.get())
        // });

        // let arrOfResults = await Promise.all(promisesList);

        // let currentMessageList = []
        // arrOfResults.slice().reverse().forEach(element => {
        //     let elementId = element.id
        //     let elementData = element.data()
        //     let date = new Date(1970, 0, 1)
        //     date.setSeconds(elementData.date.seconds)
        //     currentMessageList.push(<ChatMessage key = {elementId} me={props.chatCompanion == elementData.userRef} 
        //         message = {elementData.message} time={date.toISOString().substr(11, 8)}></ChatMessage>)
        // });
        // for (let index = props.indexes.first; index < props.indexes.last; index++) {
        //     // if(index>props.arrayOfResults.length) {
        //     //     // setFinished(true)
        //     //     break
        //     // }
        //     // let element = props.arrayOfResults[index]
        //     // if(element == undefined) {
        //     //     break;
        //     // }
        //     let elementData = element.data()
        //     let date = new Date(1970, 0, 1)
        //     date.setSeconds(elementData.date.seconds)
        //     currentMessageList.push(<ChatMessage key = {props.chatCompanion} me={props.chatCompanion == elementData.userRef} 
        //         message = {elementData.message} time={date.toISOString().substr(11, 8)}></ChatMessage>)
        // }
        // setMessageList(messageList.concat(currentMessageList))
    }

    useEffect(() => {

            // if(props.newMessage == undefined) {
                fetchData()
            // } else {
            //     console.log(props.newMessage)
            // }
            // return () => {
            //     setSlideList([])
            //   };
              
      }, [props.chatCompanion, props.newMessage]);

    //   useEffect(() => { 

    //     console.log(props.newMessage)
          
    //  }, [props.newMessage]);

        return (
        //     <PerfectScrollbar 

        //     onYReachEnd={() => {
                
        //       setTimeout(() => {
        //         setIndexes({first: indexes.first + numberOfMessages, last: indexes.last + numberOfMessages})
        //     //    this.setState({
        //     //         lastIndex: this.state.lastIndex + this.numberOfMessages
        //     //    })
        //       }, 2000)}
        //     // this._scrollBarRef.updateScroll()
        //    }
        //     > 
        //     <ul> 
        <React.Fragment>
                        {messageList}
                        </React.Fragment>
        //             </ul>    
        //    </PerfectScrollbar>   
            )
}
export default NewMessages