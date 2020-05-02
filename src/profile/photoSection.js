import React, { Component } from 'react';
import Photo from './photo'
import { LightgalleryProvider } from "react-lightgallery";

class PhotoSection extends Component {

    elementsToDisplay = 1

    state = {
        photosCollection: {},
        smallPhotos: [],
        buttonDescription: 'load more'
    }

    createPhoto(photosCollection, index, smallPhotos) {
        let url = photosCollection[index][1].small;
        let realUrl = photosCollection[index][1].big;
        let name = photosCollection[index][0];
        smallPhotos.push(<Photo key={url} name={name} smallSrc={url} realUrl={realUrl}></Photo>);
    }

    componentDidMount() { 
        this.props.photosRef.get().then((result)=> {
            let photosCollection = Object.entries(result.data());
            photosCollection.sort((a,b) => {
                if(a[0]>b[0]) {
                    return 1;
                }
                if(b[0]>a[0]) {
                    return -1;
                }
                return 0;
              });
            let smallPhotos = [];
            for (let index = 0; index < this.elementsToDisplay; index++) {
                this.createPhoto(photosCollection, index, smallPhotos);
            }
            this.setState({
                photosCollection : photosCollection,
                smallPhotos : smallPhotos
            })
        })
    }

    handler = () => {
        if(this.state.buttonDescription == 'load less') {
            let smallPhotos = [];
            let newLastIndex
            const lastIndex = this.state.photosCollection.length;
            for (let index = 0; index < this.elementsToDisplay; index++) {
                if(lastIndex%this.elementsToDisplay == index) {
                    if(index == 0) {
                        newLastIndex = lastIndex - this.elementsToDisplay;
                    } else {
                        newLastIndex = lastIndex - index;
                    }
                }                
            }
            for (let index = 0; index < newLastIndex; index++) {
                this.createPhoto(this.state.photosCollection, index, smallPhotos);
            }
            this.setState({
                buttonDescription: "load more",
                smallPhotos: smallPhotos
            })
        } else {
            let buttonDescription = this.state.buttonDescription;
            let smallPhotos = [...this.state.smallPhotos];
            for (let index = smallPhotos.length; index < smallPhotos.length + this.elementsToDisplay; index++) {
                if(index>=this.state.photosCollection.length) {
                    buttonDescription = "load less"
                    break
                }
                this.createPhoto(this.state.photosCollection, index, smallPhotos);
            }
            this.setState({
                buttonDescription: buttonDescription,
                smallPhotos: smallPhotos
            })
        }
    }

    render() {

    return  (
        <div className="photo-section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="content-box">
                        <h5 className="content-title">photos</h5>
                        <div className="content-body">
                            <div className="row mt--30">
                                <LightgalleryProvider>
                                    {this.state.smallPhotos}
                                </LightgalleryProvider>    
                                <div className="col-12">
                                    <div className="load-more text-center">
                                        <button className="load-more-btn" onClick={this.handler}>{this.state.buttonDescription}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
}
export default PhotoSection;