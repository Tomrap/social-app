import MessageList from './messageList'
import PerfectScrollbar from 'react-perfect-scrollbar'

import React, { useState, useEffect, useRef } from 'react';

const MessageScrollbar = (props) => {

  const numberOfMessages = 3;
  const scrollBarRef = useRef(null);

    // const [arrayOfResults, setArrayOfResults] = useState([])
    const [indexes, setIndexes] = useState({first: 0, last: 0})

    function increaseIndexes() {
    
       if((Math.abs(indexes.first) + numberOfMessages) <= props.arrayOfResults.length) {
        //    console.log({first: indexes.first + numberOfMessages, last: indexes.last + numberOfMessages})
        setIndexes({first: indexes.first - numberOfMessages, last: indexes.first})
       } else {
           let numberOfRemiaingMessages = props.arrayOfResults.length - Math.abs(indexes.first)
           if(numberOfRemiaingMessages>0) {
            // console.log({first: indexes.first + numberOfRemiaingMessages + 1, last: indexes.last + numberOfRemiaingMessages})
            setIndexes({first: indexes.first - numberOfRemiaingMessages, last: indexes.first })
           }
       }
    }

    useEffect(() => {
        setIndexes({first: -Math.min(props.arrayOfResults.length, numberOfMessages), last: props.arrayOfResults.length})
    },[props.arrayOfResults])
        


    return ( <PerfectScrollbar 
        ref = {scrollBarRef}
onYReachEnd={() => {
    
  setTimeout(() => {
    increaseIndexes()
    // scrollBarRef.current.updateScroll()

//    this.setState({
//         lastIndex: this.state.lastIndex + this.numberOfMessages
//    })
  }, 500)
}
// this._scrollBarRef.updateScroll()
}
> 
<ul> 
<MessageList resultsToDisplay= {props.arrayOfResults.slice(indexes.first, indexes.last)} chatCompanion={props.chatCompanion}></MessageList>
            </ul>    
</PerfectScrollbar>

    )
}
export default MessageScrollbar