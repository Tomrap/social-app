import React from 'react';
import Slider from "react-slick";
import SingleSlide from '../friends/singleSlide'

const FriendsSlider = (props) => {
    

    const settings = props.mobile ? mobileSettings : regularSettings

    let slideList =[];

    props.activeFriends.sort((a,b) => {
        if(a.firstName>b.firstName) {
            return 1;
        }
        if(a.firstName<b.firstName) {
            return -1;
        }
        return 0;
    })
    
    props.activeFriends.forEach(element => {
        slideList.push(<SingleSlide key = {element.imagesRef} photoRef={element.imagesRef}></SingleSlide>)
    });
    
    return (
            <Slider className="slick-row-10 active-profile-carousel slick-arrow-style" {...settings}>
                {slideList}
            </Slider>
    )
}
export default FriendsSlider

const regularSettings = {
    speed: 800,
    slidesToShow: 6,
    adaptiveHeight: true,
    prevArrow: <button type="button" className="slick-prev"><i className="bi bi-arrow-left-rounded"></i></button>,
    nextArrow: <button type="button" className="slick-next"><i className="bi bi-arrow-right-rounded"></i></button>,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 5,
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
