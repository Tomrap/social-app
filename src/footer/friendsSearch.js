import React , { useContext } from 'react';
import SearchElement from '../friends/searchElement'

const FriendsSearch = (props) => {

    const [classNames, setClassNames] = React.useState(`friend-search-list`);

    const open = () => {
        setClassNames(`friend-search-list show`)
    }

    const close = () => {
        setClassNames(`friend-search-list`)
    }

    let slideList =[];

    for (let index = 0; index < 6; index++) {
        slideList.push(<SearchElement></SearchElement>)
    }

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
                    <ul>
                        {slideList}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FriendsSearch