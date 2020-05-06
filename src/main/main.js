import React from 'react';
import Header from '../header/header'
import MobileHeader from '../header/mobileHeader'
import MobileFooter from '../footer/mobileFooter'
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
            <Footer></Footer>
            <MobileFooter></MobileFooter>
            </body>
            )
     
}
export default Main;    