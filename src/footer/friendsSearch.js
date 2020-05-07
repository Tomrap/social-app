import React , { useContext } from 'react';
import SearchElement from '../friends/searchElement'
import PerfectScrollbar from 'react-perfect-scrollbar'

const FriendsSearch = (props) => {

    const [classNames, setClassNames] = React.useState(`friend-search-list`);

    const open = () => {
        setClassNames(`friend-search-list show`)
    }

    const close = () => {
        setClassNames(`friend-search-list`)
    }
    
    let slideList =[];

    props.activeFriends.sort(props.comparer)
    props.notActiveFriends.sort(props.comparer)
    
    props.activeFriends.forEach(element => {
        slideList.push(<SearchElement key = {element.userRef} element={element} clickHandler={props.clickHandler}></SearchElement>)
    });

    props.notActiveFriends.forEach(element => {
        slideList.push(<SearchElement key = {element.userRef} element={element} active={false} clickHandler={props.clickHandler}></SearchElement>)
    });
    
    return (
        <div className="footer-card position-relative">
            <div className="friends-search">
                <form className="search-box">
                    <input type="text" placeholder="Search Your Friends" className="search-field" onClick={open}/>
                    <button className="search-btn"><i className="flaticon-search"></i></button>
                </form>
            </div>
            <div className={classNames}>
                <div className="frnd-search-title">
                    <button className="frnd-search-icon"><i className="flaticon-settings"></i></button>
                    <p>search friends</p>
                    <button className="close-btn" onClick={close} ><i className="flaticon-cross-out"></i></button>
                </div>
                <div className="frnd-search-inner custom-scroll">
                <PerfectScrollbar>
                    <ul>
                           {slideList}
                    </ul>
                </PerfectScrollbar>
                </div>
            </div>
        </div>
    )
}

export default FriendsSearch