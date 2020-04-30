import React from 'react';
import Slider from "react-slick";
import SingleSlide from '../friends/singleSlide'

const FriendsSlider = (props) => {

    const settings = props.mobile ? mobileSettings : regularSettings
    
    let slideList =[];

    for (let index = 0; index < props.numberOfSlides; index++) {
        slideList.push(<SingleSlide></SingleSlide>)
    }

    return (
            <Slider className="slick-row-10 active-profile-carousel slick-arrow-style" {...settings}>
                {slideList}
            </Slider>
    )
}
export default FriendsSlider

const regularSettings = {
    speed: 800,
    slidesToShow: 10,
    adaptiveHeight: true,
    prevArrow: <button type="button" class="slick-prev"><i class="bi bi-arrow-left-rounded"></i></button>,
    nextArrow: <button type="button" class="slick-next"><i class="bi bi-arrow-right-rounded"></i></button>,
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
    prevArrow: <button type="button" class="slick-prev"><i class="bi bi-arrow-left-rounded"></i></button>,
    nextArrow: <button type="button" class="slick-next"><i class="bi bi-arrow-right-rounded"></i></button>,
    responsive: [{
        breakpoint: 480,
        settings: {
            slidesToShow: 4,
        }
    }]
}; 
