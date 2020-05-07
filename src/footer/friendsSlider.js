import React from 'react';
import Slider from "react-slick";
import SingleSlide from '../friends/singleSlide'

const FriendsSlider = (props) => {
    

    const settings = props.mobile ? mobileSettings : regularSettings

    let slideList =[];

    props.activeFriends.sort(props.comparer)
    
    props.activeFriends.forEach(element => {
        slideList.push(<SingleSlide key = {element.imagesRef} element={element} clickHandler={props.clickHandler}></SingleSlide>)
    });
    
    return (
            <Slider className="slick-row-10 active-profile-carousel slick-arrow-style" {...settings}>
                {slideList}
            </Slider>
    )
}
export default FriendsSlider

//this needs to be fixed cause it is sometimes displaying wrong amount of slides (underlying data is correct, just display issue)

const regularSettings = {
    speed: 800,
    slidesToShow: 7,
    adaptiveHeight: true,
    prevArrow: <button type="button" className="slick-prev"><i className="bi bi-arrow-left-rounded"></i></button>,
    nextArrow: <button type="button" className="slick-next"><i className="bi bi-arrow-right-rounded"></i></button>,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 10,
        }
    },
    {
        breakpoint: 992,
        settings: {
            slidesToShow: 8,
        }
    }]
}; 

const mobileSettings = {
    speed: 800,
    slidesToShow: 6,
    adaptiveHeight: true,
    prevArrow: <button type="button" className="slick-prev"><i className="bi bi-arrow-left-rounded"></i></button>,
    nextArrow: <button type="button" className="slick-next"><i className="bi bi-arrow-right-rounded"></i></button>,
    responsive: [{
        breakpoint: 480,
        settings: {
            slidesToShow: 4,
        }
    }]
}; 
