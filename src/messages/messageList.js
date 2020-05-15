import ChatMessage from './chatMessage'

import PerfectScrollbar from 'react-perfect-scrollbar'

import React, { useState, useEffect, useRef } from 'react';

const MessageList = (props) => {

    // const numberOfMessages = 5;


    const [messageList, setMessageList] = useState([]);
    // const [indexes, setIndexes] = useState({first: 0, last: numberOfMessages})
    // const [finished, setFinished] = useState(false);

    async function fetchData() { 

        // if(props.indexes.first == 0) {
        //     setMessageList([])
        // }
        let promisesList = []
        let resultsToDisplay = props.arrayOfResults.slice(props.indexes.first, props.indexes.last)
        resultsToDisplay.forEach(element => {
            promisesList.push(element.get())
        });

        let arrOfResults = await Promise.all(promisesList);

        let currentMessageList = []
        arrOfResults.slice().reverse().forEach(element => {
            let elementId = element.id
            let elementData = element.data()
            let date = new Date(1970, 0, 1)
            date.setSeconds(elementData.date.seconds)

            let message = <ChatMessage key = {elementId} myKey = {elementId} me={props.chatCompanion == elementData.userRef} 
            message = {elementData.message} time={date.toISOString().substr(11, 8)}></ChatMessage>

            //sometimes there are some async issues which should be fixed but for now dumb check here:
            if (messageList.filter(e => e.props.myKey === elementId).length == 0) {
                currentMessageList.push(message)
            }

        });
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
        setMessageList(messageList.concat(currentMessageList))
    }

    useEffect(() => {

            //check if 
            // if(prevPropsRef.current[]

            // prevPropsRef.current = props.resultsToDisplay;
            // if(props.newMessage == undefined) {
                fetchData()
            // } else {
            //     console.log(props.newMessage)
            // }
            // return () => {
            //     setSlideList([])
            //   };
              
      }, [props.chatCompanion, props.indexes, props.arrayOfResults]);

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
export default MessageList