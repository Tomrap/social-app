import React, { Component } from 'react';
import Photo from './photo'
import ElementsCreator from './elementsCreator'

class PhotoSection extends Component {

    createPhoto(photosCollection, index) {
        let url =  photosCollection[index][1].small;
        let realUrl = photosCollection[index][1].big;
        let name = photosCollection[index][0];
        return <Photo key={url} name={name} smallSrc={url} realUrl={realUrl}></Photo>
    }

    render() {

    return  (
        <div className="photo-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="content-box">
                            <h5 className="content-title">photos</h5>
                            <ElementsCreator name="photos" refe={this.props.photosRef} createElement={this.createPhoto} 
                                promisesResolver={(a,b)=>{b(a)}} numberOfElements={3}></ElementsCreator>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}
export default PhotoSection;