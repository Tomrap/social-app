import React from 'react';
import Header from '../header/header'
import MobileHeader from '../header/mobileHeader'
import Footer from '../footer/footer'
import ScrollTop from '../footer/scrollTop'

const Main = (props) => {

            return  (
            <body>
            <Header user={props.user}></Header>
            <MobileHeader></MobileHeader>
            <props.content user={props.user}></props.content>
            {/* UserWrapper */}
            <ScrollTop></ScrollTop>
            <Footer user={props.user}></Footer>
            </body>
            )
     
}
export default Main;    