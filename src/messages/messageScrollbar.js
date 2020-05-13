import MessageList from './messageList'
import PerfectScrollbar from 'react-perfect-scrollbar'

import React, { useState, useEffect, useRef } from 'react';

const MessageScrollbar = (props) => {

  const numberOfMessages = 3;
  const scrollBarRef = useRef(null);

    // const [arrayOfResults, setArrayOfResults] = useState([])
    const [indexes, setIndexes] = useState({first: 0, last: 0})

    function increaseIndexes() {
    
       if((indexes.last + numberOfMessages) <= props.arrayOfResults.length) {
           console.log({first: indexes.first + numberOfMessages, last: indexes.last + numberOfMessages})
        setIndexes({first: indexes.first + numberOfMessages, last: indexes.last + numberOfMessages})
       } else {
           let numberOfRemiaingMessages = props.arrayOfResults.length - indexes.last
           if(numberOfRemiaingMessages>0) {
            console.log({first: indexes.first + numberOfRemiaingMessages + 1, last: indexes.last + numberOfRemiaingMessages})
            setIndexes({first: indexes.first + numberOfRemiaingMessages + 1, last: indexes.last + numberOfRemiaingMessages})
           }
       }
    }

    useEffect(() => {
        setIndexes({first: 0, last: Math.min(props.arrayOfResults.length, numberOfMessages)})
    },[props.arrayOfResults])
        


    return ( <PerfectScrollbar 
        ref = {scrollBarRef}
onYReachEnd={() => {
    
//   setTimeout(() => {
    increaseIndexes()
    // scrollBarRef.current.updateScroll()

//    this.setState({
//         lastIndex: this.state.lastIndex + this.numberOfMessages
//    })
//   }, 100)
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