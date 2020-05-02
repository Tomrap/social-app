import React, { Component } from 'react';
import { LightgalleryProvider } from "react-lightgallery";

class ElementsCreator extends Component {

    elementsToDisplay = this.props.numberOfElements

    state = {
        databaseCollection: {},
        currentElements: [],
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
            let databaseCollection = Object.entries(result1);
            databaseCollection.sort(this.comparer)
            let currentElements = [];
            for (let index = 0; index < this.elementsToDisplay; index++) {
                currentElements.push(this.props.createElement(databaseCollection, index))
            }
            this.props.promisesResolver(currentElements, (list) => {this.setState({
                databaseCollection : databaseCollection,
                currentElements : list
            })})
        })
    }

    handler = () => {
        if(this.state.buttonDescription == 'load less') {
            let currentElements = [];
            let newLastIndex
            const lastIndex = this.state.databaseCollection.length;
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
                currentElements.push(this.props.createElement(this.state.databaseCollection, index))
            }
            this.props.promisesResolver(currentElements, (list) => {this.setState({
                buttonDescription: "load more",
                currentElements: list
            })})
        } else {
            let buttonDescription = this.state.buttonDescription;
            let currentElementsCopy = [...this.state.currentElements];
            let currentElements = [];
            const length = currentElementsCopy.length;
            for (let index = length; index < length + this.elementsToDisplay; index++) {
                if(index>=this.state.databaseCollection.length) {
                    buttonDescription = "load less"
                    break
                }
                currentElements.push(this.props.createElement(this.state.databaseCollection, index))
            }
            this.props.promisesResolver(currentElements, (list) => {this.setState({
                buttonDescription: buttonDescription,
                currentElements: currentElementsCopy.concat(list)
            })})
        }
    }

    render() {

    const loadMoreButton = 
        <div className="col-12">
            <div className="load-more text-center">
                <button className="load-more-btn"onClick={this.handler}>{this.state.buttonDescription}</button>
            </div>
        </div>  

    if(this.props.name == "friends") {
        return (
        <div className="content-box">
            <h5 className="content-title">friends</h5>
            <div className="content-body">
                <div className="row mt--20">
                    {this.state.currentElements}
                    {loadMoreButton}
                </div>
            </div>
        </div>
        )
    } else {
        const list = this.props.name == "photos" ? 
            <LightgalleryProvider>
                {this.state.currentElements}
            </LightgalleryProvider>
        :  this.state.currentElements 

        return  (
            <div className="content-body">
                <div className="row favorite-item-carousel">
                    {list}
                </div>
                <div className="row">
                    {loadMoreButton}
                </div>
            </div>
            )
        }
    }
}

export default ElementsCreator;