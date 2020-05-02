import React, { Component } from 'react';
import FavouriteElement from './favouriteElement'
import ElementsCreator from './elementsCreator'

class FavouriteSection extends Component {

    createFavElement(photosCollection, index) {
        let url = photosCollection[index][1]
        let name = photosCollection[index][0];
        return <FavouriteElement key={url} name={name} src={url} ></FavouriteElement>
    }

    render() {

    return  (
        <div className="faborite-books">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="content-box">
                        <h5 className="content-title">{this.props.name}</h5>
                        <ElementsCreator name={this.props.name} refe={this.props.refe} createElement={this.createFavElement}></ElementsCreator>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    }
}

export default FavouriteSection;