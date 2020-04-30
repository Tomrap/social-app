import React from 'react';


const SearchBox = (props) => {

    return (
    <div className="header-top-search">
        <form className="top-search-box">
            <input type="text" placeholder="Search" className="top-search-field"/>
            <button className="top-search-btn"><i className="flaticon-search"></i></button>
        </form>
    </div>
    )
}
export default SearchBox