import React from 'react';
const FavouriteElement = (props) => {

    return  (

    <div className="col-sm-6 col-md-4">
        <div className="photo-group">
            <div className="gallery-toggle">
                    <img src={props.src} alt={props.name}/>
            </div>
        </div>
    </div>
    )
}

export default FavouriteElement;