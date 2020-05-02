import React, { Component } from 'react';

class FavouriteSection extends Component {

    render() {

    return  (
        <div className="faborite-books">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="content-box">
                        <h5 className="content-title">{this.props.name}</h5>
                        <div className="content-body">
                            <div className="row favorite-item-carousel">
                                <div className="col">
                                    <figure className="favorite-item">
                                        <a href="#">
                                            <img src="assets/images/books/book-1.jpg" alt=""/>
                                        </a>
                                    </figure>
                                </div>
                                <div className="col">
                                    <figure className="favorite-item">
                                        <a href="#">
                                            <img src="assets/images/books/book-2.jpg" alt=""/>
                                        </a>
                                    </figure>
                                </div>
                                <div className="col">
                                    <figure className="favorite-item">
                                        <a href="#">
                                            <img src="assets/images/books/book-3.jpg" alt=""/>
                                        </a>
                                    </figure>
                                </div>
                                <div className="col">
                                    <figure className="favorite-item">
                                        <a href="#">
                                            <img src="assets/images/books/book-4.jpg" alt=""/>
                                        </a>
                                    </figure>
                                </div>
                                <div className="col">
                                    <figure className="favorite-item">
                                        <a href="#">
                                            <img src="assets/images/books/book-5.jpg" alt=""/>
                                        </a>
                                    </figure>
                                </div>
                                <div className="col">
                                    <figure className="favorite-item">
                                        <a href="#">
                                            <img src="assets/images/books/book-6.jpg" alt=""/>
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="load-more text-center">
                                        <button className="load-more-btn">load more</button>
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

export default FavouriteSection;