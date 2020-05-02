import React, { Component } from 'react';
import { LightgalleryProvider } from "react-lightgallery";

class ElementsCreator extends Component {

    elementsToDisplay = 3

    state = {
        photosCollection: {},
        smallPhotos: [],
        buttonDescription: 'load more'
    }

    
    comparer(a,b) {
        if(a[0]>b[0]) {
            return 1;
        }
        if(b[0]>a[0]) {
            return -1;
        }
        return 0;
    }

    componentDidMount() { 
        this.props.refe.get().then((result)=> {
            const result1 = result.data()
            let photosCollection = Object.entries(result1);
            photosCollection.sort(this.comparer)
            let smallPhotos = [];
            for (let index = 0; index < this.elementsToDisplay; index++) {
                smallPhotos.push(this.props.createElement(photosCollection, index))
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
                smallPhotos.push(this.props.createElement(this.state.photosCollection, index))
            }
            this.setState({
                buttonDescription: "load more",
                smallPhotos: smallPhotos
            })
        } else {
            let buttonDescription = this.state.buttonDescription;
            let smallPhotos = [...this.state.smallPhotos];
            const length = smallPhotos.length;
            for (let index = length; index < length + this.elementsToDisplay; index++) {
                if(index>=this.state.photosCollection.length) {
                    buttonDescription = "load less"
                    break
                }
                smallPhotos.push(this.props.createElement(this.state.photosCollection, index))
            }
            this.setState({
                buttonDescription: buttonDescription,
                smallPhotos: smallPhotos
            })
        }
    }

    render() {

    const list = this.props.name == "photos" ? 
        <LightgalleryProvider>
            {this.state.smallPhotos}
        </LightgalleryProvider>
    :  this.state.smallPhotos 

    return  (
        <div className="content-body">
            <div className="row favorite-item-carousel">
                {list}
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="load-more text-center">
                        <button className="load-more-btn"onClick={this.handler}>{this.state.buttonDescription}</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default ElementsCreator;