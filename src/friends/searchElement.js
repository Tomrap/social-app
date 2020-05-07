import React from 'react';
import ProfileThumb from './profileThumb'

const SearchElement = (props) => {

    return (
        <li className="d-flex align-items-center profile-active">
        
            {/* <ProfileThumb></ProfileThumb> */}
        
            <div className="posted-author">
                <h6 className="author">Jon Wilime</h6>
                <p>Many desktop publishing</p>
            </div>
        </li>
    )
}

export default SearchElement