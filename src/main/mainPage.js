import React, { Component } from 'react';
import Slider from "react-slick";

class MainPage extends Component {

    render() {
        var settings1 = {
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

        var settings2 = {
            speed: 800,
            slidesToShow: 6,
            adaptiveHeight: true,
            arrows: false,
            responsive: [{
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                }
            }]
        };   

        return  (
            <body>
            <header>
            <div className="header-top sticky bg-white d-none d-lg-block">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
    
                            <div className="header-top-navigation">
                                <nav>
                                    <ul>
                                        <li className="active"><a href="index.html">home</a></li>
                                        <li className="msg-trigger"><a className="msg-trigger-btn" href="#a">message</a>
                                            <div className="message-dropdown" id="a">
                                                <div className="dropdown-title">
                                                    <p className="recent-msg">recent message</p>
                                                    <div className="message-btn-group">
                                                        <button>New group</button>
                                                        <button>New Message</button>
                                                    </div>
                                                </div>
                                                <ul className="dropdown-msg-list">
                                                    <li className="msg-list-item d-flex justify-content-between">
                                                      
                                                        <div className="profile-thumb">
                                                            <figure className="profile-thumb-middle">
                                                                <img src="assets/images/profile/profile-small-3.jpg" alt="profile picture"/>
                                                            </figure>
                                                        </div>
                                                     
    
                                                     
                                                        <div className="msg-content">
                                                            <h6 className="author"><a href="profile.html">Mili Raoulin</a></h6>
                                                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default</p>
                                                        </div>
                                                
                                                        <div className="msg-time">
                                                            <p>25 Apr 2019</p>
                                                        </div>
                                                    
                                                    </li>
                                                    <li className="msg-list-item d-flex justify-content-between">
                                                       
                                                        <div className="profile-thumb">
                                                            <figure className="profile-thumb-middle">
                                                                <img src="assets/images/profile/profile-small-4.jpg" alt="profile picture"/>
                                                            </figure>
                                                        </div>
                                                      
                                                        <div className="msg-content">
                                                            <h6 className="author"><a href="profile.html">Jhon Doe</a></h6>
                                                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default</p>
                                                        </div>
                                                     
                                                        <div className="msg-time">
                                                            <p>15 May 2019</p>
                                                        </div>
                                                       
                                                    </li>
                                                    <li className="msg-list-item d-flex justify-content-between">
                                                      
                                                        <div className="profile-thumb">
                                                            <figure className="profile-thumb-middle">
                                                                <img src="assets/images/profile/profile-small-5.jpg" alt="profile picture"/>
                                                            </figure>
                                                        </div>
                                                      
                                                        <div className="msg-content">
                                                            <h6 className="author"><a href="profile.html">Jon Wileyam</a></h6>
                                                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default</p>
                                                        </div>
                             
                                                        <div className="msg-time">
                                                            <p>20 Jun 2019</p>
                                                        </div>
                                                       
                                                    </li>
                                                </ul>
                                                <div className="msg-dropdown-footer">
                                                    <button>See all in messenger</button>
                                                    <button>Mark All as Read</button>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="notification-trigger"><a className="msg-trigger-btn" href="#b">notification</a>
                                            <div className="message-dropdown" id="b">
                                                <div className="dropdown-title">
                                                    <p className="recent-msg">Notification</p>
                                                    <button>
                                                        <i className="flaticon-settings"></i>
                                                    </button>
                                                </div>
                                                <ul className="dropdown-msg-list">
                                                    <li className="msg-list-item d-flex justify-content-between">
                                                       
                                                        <div className="profile-thumb">
                                                            <figure className="profile-thumb-middle">
                                                                <img src="assets/images/profile/profile-small-3.jpg" alt="profile picture"/>
                                                            </figure>
                                                        </div>
                                                       
                                                        <div className="msg-content notification-content">
                                                            <a href="profile.html">Robert Faul</a>,
                                                            <a href="profile.html">william jhon</a>
                                                            <p>and 35 other people reacted to your photo</p>
                                                        </div>
                                                   
                                                        <div className="msg-time">
                                                            <p>25 Apr 2019</p>
                                                        </div>
                                                     
                                                    </li>
                                                    <li className="msg-list-item d-flex justify-content-between">
                                                       
                                                        <div className="profile-thumb">
                                                            <figure className="profile-thumb-middle">
                                                                <img src="assets/images/profile/profile-small-4.jpg" alt="profile picture"/>
                                                            </figure>
                                                        </div>
                                                      
                                                        <div className="msg-content notification-content">
                                                            <a href="profile.html">Robert mushkil</a>,
                                                            <a href="profile.html">Terry jhon</a>
                                                            <p>and 20 other people reacted to your photo</p>
                                                        </div>
                                                     
                                                        <div className="msg-time">
                                                            <p>20 May 2019</p>
                                                        </div>
                                                      
                                                    </li>
                                                    <li className="msg-list-item d-flex justify-content-between">
                                                        
                                                        <div className="profile-thumb">
                                                            <figure className="profile-thumb-middle">
                                                                <img src="assets/images/profile/profile-small-6.jpg" alt="profile picture"/>
                                                            </figure>
                                                        </div>
                                                        
                                                        <div className="msg-content notification-content">
                                                            <a href="profile.html">Horijon Mbala</a>,
                                                            <a href="profile.html">Bashu jhon</a>
                                                            <p>and 55 other people reacted to your post</p>
                                                        </div>
                                                       
                                                        <div className="msg-time">
                                                            <p>15 Jan 2019</p>
                                                        </div>
                                                       
                                                    </li>
                                                </ul>
                                                <div className="msg-dropdown-footer">
                                                    <button>See all in messenger</button>
                                                    <button>Mark All as Read</button>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                           
                        </div>
    
                        <div className="col-md-2">
                          
                            <div className="brand-logo text-center">
                                <a href="index.html">
                                    <img src="assets/images/logo/logo.png" alt="brand logo"/>
                                </a>
                            </div>
                            
                        </div>
    
                        <div className="col-md-5">
                            <div className="header-top-right d-flex align-items-center justify-content-end">
                               
                                <div className="header-top-search">
                                    <form className="top-search-box">
                                        <input type="text" placeholder="Search" className="top-search-field"/>
                                        <button className="top-search-btn"><i className="flaticon-search"></i></button>
                                    </form>
                                </div>
                            
                                <div className="profile-setting-box">
                                    <div className="profile-thumb-small">
                                        <a href="javascript:void(0)" className="profile-triger">
                                            <figure>
                                                <img src="assets/images/profile/profile-small-1.jpg" alt="profile picture"/>
                                            </figure>
                                        </a>
                                        <div className="profile-dropdown">
                                            <div className="profile-head">
                                                <h5 className="name"><a href="#">Madison Howard</a></h5>
                                                <a className="mail" href="#">mailnam@mail.com</a>
                                            </div>
                                            <div className="profile-body">
                                                <ul>
                                                    <li><a href="profile.html"><i className="flaticon-user"></i>Profile</a></li>
                                                    <li><a href="#"><i className="flaticon-message"></i>Inbox</a></li>
                                                    <li><a href="#"><i className="flaticon-document"></i>Activity</a></li>
                                                </ul>
                                                <ul>
                                                    <li><a href="#"><i className="flaticon-settings"></i>Setting</a></li>
                                                    <li><a href="signup.html"><i className="flaticon-unlock"></i>Sing out</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
      
        <header>
            <div className="mobile-header-wrapper sticky d-block d-lg-none">
                <div className="mobile-header position-relative ">
                    <div className="mobile-logo">
                        <a href="index.html">
                            <img src="assets/images/logo/logo-white.png" alt="logo"/>
                        </a>
                    </div>
                    <div className="mobile-menu w-100">
                        <ul>
                            <li>
                                <button className="notification request-trigger"><i className="flaticon-users"></i>
                                    <span>03</span>
                                </button>
                                <ul className="frnd-request-list">
                                    <li>
                                        <div className="frnd-request-member">
                                            <figure className="request-thumb">
                                                <a href="profile.html">
                                                    <img src="assets/images/profile/profile-midle-1.jpg" alt="proflie author"/>
                                                </a>
                                            </figure>
                                            <div className="frnd-content">
                                                <h6 className="author"><a href="profile.html">merry watson</a></h6>
                                                <p className="author-subtitle">Works at HasTech</p>
                                                <div className="request-btn-inner">
                                                    <button className="frnd-btn">confirm</button>
                                                    <button className="frnd-btn delete">delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="frnd-request-member">
                                            <figure className="request-thumb">
                                                <a href="profile.html">
                                                    <img src="assets/images/profile/profile-midle-2.jpg" alt="proflie author"/>
                                                </a>
                                            </figure>
                                            <div className="frnd-content">
                                                <h6 className="author"><a href="profile.html">merry watson</a></h6>
                                                <p className="author-subtitle">Works at HasTech</p>
                                                <div className="request-btn-inner">
                                                    <button className="frnd-btn">confirm</button>
                                                    <button className="frnd-btn delete">delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="frnd-request-member">
                                            <figure className="request-thumb">
                                                <a href="profile.html">
                                                    <img src="assets/images/profile/profile-midle-3.jpg" alt="proflie author"/>
                                                </a>
                                            </figure>
                                            <div className="frnd-content">
                                                <h6 className="author"><a href="profile.html">merry watson</a></h6>
                                                <p className="author-subtitle">Works at HasTech</p>
                                                <div className="request-btn-inner">
                                                    <button className="frnd-btn">confirm</button>
                                                    <button className="frnd-btn delete">delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <button className="notification"><i className="flaticon-notification"></i>
                                    <span>03</span>
                                </button>
                            </li>
                            <li>
                                <button className="chat-trigger notification"><i className="flaticon-chats"></i>
                                    <span>04</span>
                                </button>
                                <div className="mobile-chat-box">
                                    <div className="live-chat-title">
                                       
                                        <div className="profile-thumb">
                                            <a href="profile.html">
                                                <figure className="profile-thumb-small profile-active">
                                                    <img src="assets/images/profile/profile-small-15.jpg" alt="profile picture"/>
                                                </figure>
                                            </a>
                                        </div>
                                       
                                        <div className="posted-author">
                                            <h6 className="author"><a href="profile.html">Robart Marloyan</a></h6>
                                            <span className="active-pro">active now</span>
                                        </div>
                                        <div className="live-chat-settings ml-auto">
                                            <button className="chat-settings"><img src="assets/images/icons/settings.png" alt=""/></button>
                                            <button className="close-btn"><img src="assets/images/icons/close.png" alt=""/></button>
                                        </div>
                                    </div>
                                    <div className="message-list-inner">
                                        <ul className="message-list custom-scroll">
                                            <li className="text-friends">
                                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                                                <div className="message-time">10 minute ago</div>
                                            </li>
                                            <li className="text-author">
                                                <p>Many desktop publishing packages and web page editors</p>
                                                <div className="message-time">5 minute ago</div>
                                            </li>
                                            <li className="text-friends">
                                                <p>packages and web page editors </p>
                                                <div className="message-time">2 minute ago</div>
                                            </li>
                                            <li className="text-friends">
                                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                                                <div className="message-time">10 minute ago</div>
                                            </li>
                                            <li className="text-author">
                                                <p>Many desktop publishing packages and web page editors</p>
                                                <div className="message-time">5 minute ago</div>
                                            </li>
                                            <li className="text-friends">
                                                <p>packages and web page editors </p>
                                                <div className="message-time">2 minute ago</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="chat-text-field mob-text-box">
                                        <textarea className="live-chat-field custom-scroll" placeholder="Text Message"></textarea>
                                        <button className="chat-message-send" type="submit" value="submit">
                                            <img src="assets/images/icons/plane.png" alt=""/>
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="search-trigger">
                                    <i className="search-icon flaticon-search"></i>
                                    <i className="close-icon flaticon-cross-out"></i>
                                </button>
                                <div className="mob-search-box">
                                    <form className="mob-search-inner">
                                        <input type="text" placeholder="Search Here" className="mob-search-field"/>
                                        <button className="mob-search-btn"><i className="flaticon-search"></i></button>
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-header-profile">
                       
                        <div className="profile-thumb profile-setting-box">
                            <a href="javascript:void(0)" className="profile-triger">
                                <figure className="profile-thumb-middle">
                                    <img src="assets/images/profile/profile-small-1.jpg" alt="profile picture"/>
                                </figure>
                            </a>
                            <div className="profile-dropdown text-left">
                                <div className="profile-head">
                                    <h5 className="name"><a href="#">Madison Howard</a></h5>
                                    <a className="mail" href="#">mailnam@mail.com</a>
                                </div>
                                <div className="profile-body">
                                    <ul>
                                        <li><a href="profile.html"><i className="flaticon-user"></i>Profile</a></li>
                                        <li><a href="#"><i className="flaticon-message"></i>Inbox</a></li>
                                        <li><a href="#"><i className="flaticon-document"></i>Activity</a></li>
                                    </ul>
                                    <ul>
                                        <li><a href="#"><i className="flaticon-settings"></i>Setting</a></li>
                                        <li><a href="signup.html"><i className="flaticon-unlock"></i>Sing out</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
            
                    </div>
                </div>
            </div>
        </header>
        <main>
            <div className="main-wrapper pt-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 order-2 order-lg-1">
                            <aside className="widget-area">
                              
                                <div className="card card-profile widget-item p-0">
                                    <div className="profile-banner">
                                        <figure className="profile-banner-small">
                                            <a href="profile.html">
                                                <img src="assets/images/banner/banner-small.jpg" alt=""/>
                                            </a>
                                            <a href="profile.html" className="profile-thumb-2">
                                                <img src="assets/images/profile/profile-midle-1.jpg" alt=""/>
                                            </a>
                                        </figure>
                                        <div className="profile-desc text-center">
                                            <h6 className="author"><a href="profile.html">Dimbel Lebmid</a></h6>
                                            <p>Any one can join with but Social network us if you want Any one can join with us if you want</p>
                                        </div>
                                    </div>
                                </div>
          
                                <div className="card widget-item">
                                    <h4 className="widget-title">page you may like</h4>
                                    <div className="widget-body">
                                        <ul className="like-page-list-wrapper">
                                            <li className="unorder-list">
                                              
                                                <div className="profile-thumb">
                                                    <a href="#">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-33.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                            
    
                                                <div className="unorder-list-info">
                                                    <h3 className="list-title"><a href="#">Travel The World</a></h3>
                                                    <p className="list-subtitle"><a href="#">adventure</a></p>
                                                </div>
                                                <button className="like-button active">
                                                    <img className="heart" src="assets/images/icons/heart.png" alt=""/>
                                                    <img className="heart-color" src="assets/images/icons/heart-color.png" alt=""/>
                                                </button>
                                            </li>
                                            <li className="unorder-list">
                                         
                                                <div className="profile-thumb">
                                                    <a href="#">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-30.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                              
    
                                                <div className="unorder-list-info">
                                                    <h3 className="list-title"><a href="#">Foodcort Nirala</a></h3>
                                                    <p className="list-subtitle"><a href="#">food</a></p>
                                                </div>
                                                <button className="like-button">
                                                    <img className="heart" src="assets/images/icons/heart.png" alt=""/>
                                                    <img className="heart-color" src="assets/images/icons/heart-color.png" alt=""/>
                                                </button>
                                            </li>
                                            <li className="unorder-list">
                                               
                                                <div className="profile-thumb">
                                                    <a href="#">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-5.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                             
                                                <div className="unorder-list-info">
                                                    <h3 className="list-title"><a href="#">Rolin Theitar</a></h3>
                                                    <p className="list-subtitle"><a href="#">drama</a></p>
                                                </div>
                                                <button className="like-button">
                                                    <img className="heart" src="assets/images/icons/heart.png" alt=""/>
                                                    <img className="heart-color" src="assets/images/icons/heart-color.png" alt=""/>
                                                </button>
                                            </li>
                                            <li className="unorder-list">
                                              
                                                <div className="profile-thumb">
                                                    <a href="#">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-29.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                             
    
                                                <div className="unorder-list-info">
                                                    <h3 className="list-title"><a href="#">Active Mind</a></h3>
                                                    <p className="list-subtitle"><a href="#">fitness</a></p>
                                                </div>
                                                <button className="like-button">
                                                    <img className="heart" src="assets/images/icons/heart.png" alt=""/>
                                                    <img className="heart-color" src="assets/images/icons/heart-color.png" alt=""/>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card widget-item">
                                    <h4 className="widget-title">latest top news</h4>
                                    <div className="widget-body">
                                        <ul className="like-page-list-wrapper">
                                            <li className="unorder-list">
                                              
                                                <div className="profile-thumb">
                                                    <a href="#">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-28.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                               
    
                                                <div className="unorder-list-info">
                                                    <h3 className="list-title"><a href="#">Any one can join with us if you want</a></h3>
                                                    <p className="list-subtitle">2 min ago</p>
                                                </div>
                                            </li>
                                            <li className="unorder-list">
                                               
                                                <div className="profile-thumb">
                                                    <a href="#">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-31.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                              
    
                                                <div className="unorder-list-info">
                                                    <h3 className="list-title"><a href="#">Any one can join with us if you want</a></h3>
                                                    <p className="list-subtitle">20 min ago</p>
                                                </div>
                                            </li>
                                            <li className="unorder-list">
                                            
                                                <div className="profile-thumb">
                                                    <a href="#">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-27.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                            
    
                                                <div className="unorder-list-info">
                                                    <h3 className="list-title"><a href="#">Any one can join with us if you want</a></h3>
                                                    <p className="list-subtitle">30 min ago</p>
                                                </div>
                                            </li>
                                            <li className="unorder-list">
                                          
                                                <div className="profile-thumb">
                                                    <a href="#">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-34.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                            
    
                                                <div className="unorder-list-info">
                                                    <h3 className="list-title"><a href="#">Any one can join with us if you want</a></h3>
                                                    <p className="list-subtitle">40 min ago</p>
                                                </div>
                                            </li>
                                            <li className="unorder-list">
                                               
                                                <div className="profile-thumb">
                                                    <a href="#">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-32.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                             
    
                                                <div className="unorder-list-info">
                                                    <h3 className="list-title"><a href="#">Any one can join with us if you want</a></h3>
                                                    <p className="list-subtitle">39 min ago</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                         
                            </aside>
                        </div>
    
                        <div className="col-lg-6 order-1 order-lg-2">
                         
                            <div className="card card-small">
                                <div className="share-box-inner">
                     
                                    <div className="profile-thumb">
                                        <a href="#">
                                            <figure className="profile-thumb-middle">
                                                <img src="assets/images/profile/profile-small-37.jpg" alt="profile picture"/>
                                            </figure>
                                        </a>
                                    </div>
                                 
     
                                    <div className="share-content-box w-100">
                                        <form className="share-text-box">
                                            <textarea name="share" className="share-text-field" aria-disabled="true" placeholder="Say Something" data-toggle="modal" data-target="#textbox" id="email"></textarea>
                                            <button className="btn-share" type="submit">share</button>
                                        </form>
                                    </div>
          
                                    <div className="modal fade" id="textbox" aria-labelledby="textbox">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">Share Your Mood</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body custom-scroll">
                                                    <textarea name="share" className="share-field-big custom-scroll" placeholder="Say Something"></textarea>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="post-share-btn" data-dismiss="modal">cancel</button>
                                                    <button type="button" className="post-share-btn">post</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                       
                                </div>
                            </div>
           
                            <div className="card">
                              
                                <div className="post-title d-flex align-items-center">
                              
                                    <div className="profile-thumb">
                                        <a href="#">
                                            <figure className="profile-thumb-middle">
                                                <img src="assets/images/profile/profile-small-1.jpg" alt="profile picture"/>
                                            </figure>
                                        </a>
                                    </div>
                                  
    
                                    <div className="posted-author">
                                        <h6 className="author"><a href="profile.html">merry watson</a></h6>
                                        <span className="post-time">20 min ago</span>
                                    </div>
    
                                    <div className="post-settings-bar">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <div className="post-settings arrow-shape">
                                            <ul>
                                                <li><button>copy link to adda</button></li>
                                                <li><button>edit post</button></li>
                                                <li><button>embed adda</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                              
                                <div className="post-content">
                                    <p className="post-desc">
                                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                        default model text, and a search for 'lorem ipsum' will uncover many web sites still
                                        in their infancy.
                                    </p>
                                    <div className="post-thumb-gallery">
                                        <figure className="post-thumb img-popup">
                                            <a href="assets/images/post/post-large-1.jpg">
                                                <img src="assets/images/post/post-1.jpg" alt="post image"/>
                                            </a>
                                        </figure>
                                    </div>
                                    <div className="post-meta">
                                        <button className="post-meta-like">
                                            <i className="bi bi-heart-beat"></i>
                                            <span>You and 201 people like this</span>
                                            <strong>201</strong>
                                        </button>
                                        <ul className="comment-share-meta">
                                            <li>
                                                <button className="post-comment">
                                                    <i className="bi bi-chat-bubble"></i>
                                                    <span>41</span>
                                                </button>
                                            </li>
                                            <li>
                                                <button className="post-share">
                                                    <i className="bi bi-share"></i>
                                                    <span>07</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="card">
                      
                                <div className="post-title d-flex align-items-center">
                                 
                                    <div className="profile-thumb">
                                        <a href="#">
                                            <figure className="profile-thumb-middle">
                                                <img src="assets/images/profile/profile-small-9.jpg" alt="profile picture"/>
                                            </figure>
                                        </a>
                                    </div>
                                 
    
                                    <div className="posted-author">
                                        <h6 className="author"><a href="profile.html">Jon Wileyam</a></h6>
                                        <span className="post-time">15 min ago</span>
                                    </div>
    
                                    <div className="post-settings-bar">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <div className="post-settings arrow-shape">
                                            <ul>
                                                <li><button>copy link to adda</button></li>
                                                <li><button>edit post</button></li>
                                                <li><button>embed adda</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                              
                                <div className="post-content">
                                    <p className="post-desc pb-0">
                                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                        default model text, and a search for
                                    </p>
                                    <div className="post-meta">
                                        <button className="post-meta-like">
                                            <i className="bi bi-heart-beat"></i>
                                            <span>You and 206 people like this</span>
                                            <strong>206</strong>
                                        </button>
                                        <ul className="comment-share-meta">
                                            <li>
                                                <button className="post-comment">
                                                    <i className="bi bi-chat-bubble"></i>
                                                    <span>41</span>
                                                </button>
                                            </li>
                                            <li>
                                                <button className="post-share">
                                                    <i className="bi bi-share"></i>
                                                    <span>07</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
        
                            <div className="card">
                               
                                <div className="post-title d-flex align-items-center">
                      
                                    <div className="profile-thumb">
                                        <a href="#">
                                            <figure className="profile-thumb-middle">
                                                <img src="assets/images/profile/profile-small-29.jpg" alt="profile picture"/>
                                            </figure>
                                        </a>
                                    </div>
                                   
    
                                    <div className="posted-author">
                                        <h6 className="author"><a href="profile.html">william henry</a></h6>
                                        <span className="post-time">35 min ago</span>
                                    </div>
    
                                    <div className="post-settings-bar">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <div className="post-settings arrow-shape">
                                            <ul>
                                                <li><button>copy link to adda</button></li>
                                                <li><button>edit post</button></li>
                                                <li><button>embed adda</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                              
                                <div className="post-content">
                                    <p className="post-desc">
                                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                        default model text, and a search for 'lorem ipsum' will uncover many web sites still
                                        in their infancy.
                                    </p>
                                    <div className="plyr__video-embed plyr-youtube">
                                        <iframe src="https://www.youtube.com/embed/WeA7edXsU40" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div className="post-meta">
                                        <button className="post-meta-like">
                                            <i className="bi bi-heart-beat"></i>
                                            <span>You and 112 people like this</span>
                                            <strong>112</strong>
                                        </button>
                                        <ul className="comment-share-meta">
                                            <li>
                                                <button className="post-comment">
                                                    <i className="bi bi-chat-bubble"></i>
                                                    <span>36</span>
                                                </button>
                                            </li>
                                            <li>
                                                <button className="post-share">
                                                    <i className="bi bi-share"></i>
                                                    <span>08</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
    
                            <div className="card">
                   
                                <div className="post-title d-flex align-items-center">
                                    
                                    <div className="profile-thumb">
                                        <a href="#">
                                            <figure className="profile-thumb-middle">
                                                <img src="assets/images/profile/profile-small-37.jpg" alt="profile picture"/>
                                            </figure>
                                        </a>
                                    </div>
                                
                                    <div className="posted-author">
                                        <h6 className="author"><a href="profile.html">Kate Palson</a></h6>
                                        <span className="post-time">35 min ago</span>
                                    </div>
    
                                    <div className="post-settings-bar">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <div className="post-settings arrow-shape">
                                            <ul>
                                                <li><button>copy link to adda</button></li>
                                                <li><button>edit post</button></li>
                                                <li><button>embed adda</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
              
                                <div className="post-content">
                                    <p className="post-desc">
                                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                        default model text, and a search for 'lorem ipsum' will uncover many web sites still
                                        in their infancy.
                                    </p>
                                    <div className="post-thumb-gallery img-gallery">
                                        <div className="row no-gutters">
                                            <div className="col-8">
                                                <figure className="post-thumb">
                                                    <a className="gallery-selector" href="assets/images/post/post-large-2.jpg">
                                                        <img src="assets/images/post/post-2.jpg" alt="post image"/>
                                                    </a>
                                                </figure>
                                            </div>
                                            <div className="col-4">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <figure className="post-thumb">
                                                            <a className="gallery-selector" href="assets/images/post/post-large-3.jpg">
                                                                <img src="assets/images/post/post-3.jpg" alt="post image"/>
                                                            </a>
                                                        </figure>
                                                    </div>
                                                    <div className="col-12">
                                                        <figure className="post-thumb">
                                                            <a className="gallery-selector" href="assets/images/post/post-large-4.jpg">
                                                                <img src="assets/images/post/post-4.jpg" alt="post image"/>
                                                            </a>
                                                        </figure>
                                                    </div>
                                                    <div className="col-12">
                                                        <figure className="post-thumb">
                                                            <a className="gallery-selector" href="assets/images/post/post-large-5.jpg">
                                                                <img src="assets/images/post/post-5.jpg" alt="post image"/>
                                                            </a>
                                                        </figure>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-meta">
                                        <button className="post-meta-like">
                                            <i className="bi bi-heart-beat"></i>
                                            <span>You and 70 people like this</span>
                                            <strong>70</strong>
                                        </button>
                                        <ul className="comment-share-meta">
                                            <li>
                                                <button className="post-comment">
                                                    <i className="bi bi-chat-bubble"></i>
                                                    <span>28</span>
                                                </button>
                                            </li>
                                            <li>
                                                <button className="post-share">
                                                    <i className="bi bi-share"></i>
                                                    <span>12</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                       
                            <div className="card">
                              
                                <div className="post-title d-flex align-items-center">
                                  
                                    <div className="profile-thumb">
                                        <a href="#">
                                            <figure className="profile-thumb-middle">
                                                <img src="assets/images/profile/profile-small-4.jpg" alt="profile picture"/>
                                            </figure>
                                        </a>
                                    </div>
                                
    
                                    <div className="posted-author">
                                        <h6 className="author"><a href="profile.html">Robart Faul</a></h6>
                                        <span className="post-time">40 min ago</span>
                                    </div>
    
                                    <div className="post-settings-bar">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <div className="post-settings arrow-shape">
                                            <ul>
                                                <li><button>copy link to adda</button></li>
                                                <li><button>edit post</button></li>
                                                <li><button>embed adda</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                           
                                <div className="post-content">
                                    <p className="post-desc pb-0">
                                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                        default model text, and a search for Many desktop publishing packages and web page
                                        editors now use Lorem Ipsum as their default model text, and a search for Many
                                        desktop publishing duskam azer.
                                    </p>
                                    <div className="post-meta">
                                        <button className="post-meta-like">
                                            <i className="bi bi-heart-beat"></i>
                                            <span>You and 250 people like this</span>
                                            <strong>250</strong>
                                        </button>
                                        <ul className="comment-share-meta">
                                            <li>
                                                <button className="post-comment">
                                                    <i className="bi bi-chat-bubble"></i>
                                                    <span>80</span>
                                                </button>
                                            </li>
                                            <li>
                                                <button className="post-share">
                                                    <i className="bi bi-share"></i>
                                                    <span>10</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                       
                            <div className="card">
                               
                                <div className="post-title d-flex align-items-center">
                          
                                    <div className="profile-thumb">
                                        <a href="#">
                                            <figure className="profile-thumb-middle">
                                                <img src="assets/images/profile/profile-small-8.jpg" alt="profile picture"/>
                                            </figure>
                                        </a>
                                    </div>
                                  
    
                                    <div className="posted-author">
                                        <h6 className="author"><a href="profile.html">Halen Omaro</a></h6>
                                        <span className="post-time">45 min ago</span>
                                    </div>
    
                                    <div className="post-settings-bar">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <div className="post-settings arrow-shape">
                                            <ul>
                                                <li><button>copy link to adda</button></li>
                                                <li><button>edit post</button></li>
                                                <li><button>embed adda</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                           
                                <div className="post-content">
                                    <p className="post-desc">
                                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                        default model text, and a search for 'lorem ipsum' will uncover many web sites still
                                        in their infancy.
                                    </p>
                                    <div className="plyr__video-embed plyr-video">
                                        <iframe src="https://www.youtube.com/embed/odUtqDz4lEk" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <p className="post-desc post-desc-secondary">
                                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                        default model text, and a search for
                                    </p>
                                    <div className="post-meta">
                                        <button className="post-meta-like">
                                            <i className="bi bi-heart-beat"></i>
                                            <span>You and 160 people like this</span>
                                            <strong>160</strong>
                                        </button>
                                        <ul className="comment-share-meta">
                                            <li>
                                                <button className="post-comment">
                                                    <i className="bi bi-chat-bubble"></i>
                                                    <span>42</span>
                                                </button>
                                            </li>
                                            <li>
                                                <button className="post-share">
                                                    <i className="bi bi-share"></i>
                                                    <span>05</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="card">
                               
                                <div className="post-title d-flex align-items-center">
                           
                                    <div className="profile-thumb">
                                        <a href="#">
                                            <figure className="profile-thumb-middle">
                                                <img src="assets/images/profile/profile-small-2.jpg" alt="profile picture"/>
                                            </figure>
                                        </a>
                                    </div>
                                  
                                    <div className="posted-author">
                                        <h6 className="author"><a href="profile.html">Mili Raoulin</a></h6>
                                        <span className="post-time">50 min ago</span>
                                    </div>
    
                                    <div className="post-settings-bar">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <div className="post-settings arrow-shape">
                                            <ul>
                                                <li><button>copy link to adda</button></li>
                                                <li><button>edit post</button></li>
                                                <li><button>embed adda</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                              
                                <div className="post-content">
                                    <p className="post-desc">
                                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                        default model text, and a search for 'lorem ipsum' will uncover many web sites still
                                        in their infancy.
                                    </p>
                                    <div className="post-thumb-gallery img-gallery">
                                        <div className="row no-gutters">
                                            <div className="col-6">
                                                <figure className="post-thumb">
                                                    <a className="gallery-selector" href="assets/images/post/post-large-6.jpg">
                                                        <img src="assets/images/post/post-6.jpg" alt="post image"/>
                                                    </a>
                                                </figure>
                                            </div>
                                            <div className="col-6">
                                                <figure className="post-thumb">
                                                    <a className="gallery-selector" href="assets/images/post/post-large-7.jpg">
                                                        <img src="assets/images/post/post-7.jpg" alt="post image"/>
                                                    </a>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-meta">
                                        <button className="post-meta-like">
                                            <i className="bi bi-heart-beat"></i>
                                            <span>You and 30 people like this</span>
                                            <strong>30</strong>
                                        </button>
                                        <ul className="comment-share-meta">
                                            <li>
                                                <button className="post-comment">
                                                    <i className="bi bi-chat-bubble"></i>
                                                    <span>65</span>
                                                </button>
                                            </li>
                                            <li>
                                                <button className="post-share">
                                                    <i className="bi bi-share"></i>
                                                    <span>04</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="card">
                               
                                <div className="post-title d-flex align-items-center">
                                  
                                    <div className="profile-thumb">
                                        <a href="#">
                                            <figure className="profile-thumb-middle">
                                                <img src="assets/images/profile/profile-small-9.jpg" alt="profile picture"/>
                                            </figure>
                                        </a>
                                    </div>
                                  
    
                                    <div className="posted-author">
                                        <h6 className="author"><a href="profile.html">Jon Wileyam</a></h6>
                                        <span className="post-time">15 min ago</span>
                                    </div>
    
                                    <div className="post-settings-bar">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <div className="post-settings arrow-shape">
                                            <ul>
                                                <li><button>copy link to adda</button></li>
                                                <li><button>edit post</button></li>
                                                <li><button>embed adda</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                             
                                <div className="post-content">
                                    <p className="post-desc pb-0">
                                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                        default model text, and a search for
                                    </p>
                                    <div className="post-meta">
                                        <button className="post-meta-like">
                                            <i className="bi bi-heart-beat"></i>
                                            <span>You and 320 people like this</span>
                                            <strong>320</strong>
                                        </button>
                                        <ul className="comment-share-meta">
                                            <li>
                                                <button className="post-comment">
                                                    <i className="bi bi-chat-bubble"></i>
                                                    <span>41</span>
                                                </button>
                                            </li>
                                            <li>
                                                <button className="post-share">
                                                    <i className="bi bi-share"></i>
                                                    <span>07</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                          
    
                        </div>
    
                        <div className="col-lg-3 order-3">
                            <aside className="widget-area">
                              
                                <div className="card widget-item">
                                    <h4 className="widget-title">Recent Notifications</h4>
                                    <div className="widget-body">
                                        <ul className="like-page-list-wrapper">
                                            <li className="unorder-list">
                                              
                                                <div className="profile-thumb">
                                                    <a href="#">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-9.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                               
    
                                                <div className="unorder-list-info">
                                                    <h3 className="list-title"><a href="#">Any one can join with us if you want</a></h3>
                                                    <p className="list-subtitle">5 min ago</p>
                                                </div>
                                            </li>
                                            <li className="unorder-list">
                                             
                                                <div className="profile-thumb">
                                                    <a href="#">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-35.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                               
    
                                                <div className="unorder-list-info">
                                                    <h3 className="list-title"><a href="#">Any one can join with us if you want</a></h3>
                                                    <p className="list-subtitle">10 min ago</p>
                                                </div>
                                            </li>
                                            <li className="unorder-list">
                                               
                                                <div className="profile-thumb">
                                                    <a href="#">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-15.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                               
    
                                                <div className="unorder-list-info">
                                                    <h3 className="list-title"><a href="#">Any one can join with us if you want</a></h3>
                                                    <p className="list-subtitle">18 min ago</p>
                                                </div>
                                            </li>
                                            <li className="unorder-list">
                                                
                                                <div className="profile-thumb">
                                                    <a href="#">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-6.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                             
    
                                                <div className="unorder-list-info">
                                                    <h3 className="list-title"><a href="#">Any one can join with us if you want</a></h3>
                                                    <p className="list-subtitle">25 min ago</p>
                                                </div>
                                            </li>
                                            <li className="unorder-list">
                                              
                                                <div className="profile-thumb">
                                                    <a href="#">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-34.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                              
    
                                                <div className="unorder-list-info">
                                                    <h3 className="list-title"><a href="#">Any one can join with us if you want</a></h3>
                                                    <p className="list-subtitle">39 min ago</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                              
                                <div className="card widget-item">
                                    <h4 className="widget-title">Advertizement</h4>
                                    <div className="widget-body">
                                        <div className="add-thumb">
                                            <a href="#">
                                                <img src="assets/images/banner/advertise.jpg" alt="advertisement"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                             
                                <div className="card widget-item">
                                    <h4 className="widget-title">Friends Zone</h4>
                                    <div className="widget-body">
                                        <ul className="like-page-list-wrapper">
                                            <li className="unorder-list">
                                               
                                                <div className="profile-thumb">
                                                    <a href="#">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-33.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                            
    
                                                <div className="unorder-list-info">
                                                    <h3 className="list-title"><a href="#">Ammeya Jakson</a></h3>
                                                    <p className="list-subtitle"><a href="#">10 mutual</a></p>
                                                </div>
                                                <button className="like-button">
                                                    <img className="heart" src="assets/images/icons/heart.png" alt=""/>
                                                    <img className="heart-color" src="assets/images/icons/heart-color.png" alt=""/>
                                                </button>
                                            </li>
                                            <li className="unorder-list">
                                             
                                                <div className="profile-thumb">
                                                    <a href="#">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-30.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                              
    
                                                <div className="unorder-list-info">
                                                    <h3 className="list-title"><a href="#">Jashon Muri</a></h3>
                                                    <p className="list-subtitle"><a href="#">2 mutual</a></p>
                                                </div>
                                                <button className="like-button active">
                                                    <img className="heart" src="assets/images/icons/heart.png" alt=""/>
                                                    <img className="heart-color" src="assets/images/icons/heart-color.png" alt=""/>
                                                </button>
                                            </li>
                                            <li className="unorder-list">
                                             
                                                <div className="profile-thumb">
                                                    <a href="#">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-5.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                            
    
                                                <div className="unorder-list-info">
                                                    <h3 className="list-title"><a href="#">Rolin Theitar</a></h3>
                                                    <p className="list-subtitle"><a href="#">drama</a></p>
                                                </div>
                                                <button className="like-button">
                                                    <img className="heart" src="assets/images/icons/heart.png" alt=""/>
                                                    <img className="heart-color" src="assets/images/icons/heart-color.png" alt=""/>
                                                </button>
                                            </li>
                                            <li className="unorder-list">
                                            
                                                <div className="profile-thumb">
                                                    <a href="#">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-29.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                              
    
                                                <div className="unorder-list-info">
                                                    <h3 className="list-title"><a href="#">Active Mind</a></h3>
                                                    <p className="list-subtitle"><a href="#">fitness</a></p>
                                                </div>
                                                <button className="like-button">
                                                    <img className="heart" src="assets/images/icons/heart.png" alt=""/>
                                                    <img className="heart-color" src="assets/images/icons/heart-color.png" alt=""/>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                               
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    
        <div className="scroll-top not-visible">
            <i className="bi bi-finger-index"></i>
        </div>
       
        <footer className="d-none d-lg-block">
            <div className="footer-area reveal-footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-wrapper">
                                <div className="footer-card position-relative">
                                    <div className="friends-search">
                                        <form className="search-box">
                                            <input type="text" placeholder="Search Your Friends" className="search-field"/>
                                            <button className="search-btn"><i className="flaticon-search"></i></button>
                                        </form>
                                    </div>
                                    <div className="friend-search-list">
                                        <div className="frnd-search-title">
                                            <button className="frnd-search-icon"><i className="flaticon-settings"></i></button>
                                            <p>search friends</p>
                                            <button className="close-btn" data-close="friend-search-list"><i className="flaticon-cross-out"></i></button>
                                        </div>
                                        <div className="frnd-search-inner custom-scroll">
                                            <ul>
                                                <li className="d-flex align-items-center profile-active">
                                                   
                                                    <div className="profile-thumb active">
                                                        <a href="#">
                                                            <figure className="profile-thumb-small">
                                                                <img src="assets/images/profile/profile-small-1.jpg" alt="profile picture"/>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                
    
                                                    <div className="posted-author">
                                                        <h6 className="author">Jon Wilime</h6>
                                                        <p>Many desktop publishing</p>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-center profile-active">
                                                   
                                                    <div className="profile-thumb active">
                                                        <a href="#">
                                                            <figure className="profile-thumb-small">
                                                                <img src="assets/images/profile/profile-small-2.jpg" alt="profile picture"/>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
    
                                                    <div className="posted-author">
                                                        <h6 className="author"><a href="profile.html">Jon Wileyam</a></h6>
                                                        <button className="add-frnd">add friend</button>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-center profile-active">
                                                   
                                                    <div className="profile-thumb active">
                                                        <a href="#">
                                                            <figure className="profile-thumb-small">
                                                                <img src="assets/images/profile/profile-small-3.jpg" alt="profile picture"/>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                  
    
                                                    <div className="posted-author">
                                                        <h6 className="author"><a href="profile.html">Mili Raoulin</a></h6>
                                                        <button className="add-frnd">add friend</button>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-center profile-active">
                                                    
                                                    <div className="profile-thumb active">
                                                        <a href="#">
                                                            <figure className="profile-thumb-small">
                                                                <img src="assets/images/profile/profile-small-4.jpg" alt="profile picture"/>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
    
                                                    <div className="posted-author">
                                                        <h6 className="author"><a href="profile.html">Jon Wilime</a></h6>
                                                        <button className="add-frnd">10 mutual friends</button>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-center profile-active">
                                                  
                                                    <div className="profile-thumb active">
                                                        <a href="#">
                                                            <figure className="profile-thumb-small">
                                                                <img src="assets/images/profile/profile-small-5.jpg" alt="profile picture"/>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                   
    
                                                    <div className="posted-author">
                                                        <h6 className="author"><a href="profile.html">Robart faul</a></h6>
                                                        <button className="add-frnd">12 mutual friends</button>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-center profile-active">
                                                    
                                                    <div className="profile-thumb active">
                                                        <a href="#">
                                                            <figure className="profile-thumb-small">
                                                                <img src="assets/images/profile/profile-small-3.jpg" alt="profile picture"/>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
    
                                                    <div className="posted-author">
                                                        <h6 className="author"><a href="profile.html">Mili Raoulin</a></h6>
                                                        <button className="add-frnd">add friend</button>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-center profile-active">
                                                  
                                                    <div className="profile-thumb active">
                                                        <a href="#">
                                                            <figure className="profile-thumb-small">
                                                                <img src="assets/images/profile/profile-small-4.jpg" alt="profile picture"/>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                   
    
                                                    <div className="posted-author">
                                                        <h6 className="author"><a href="profile.html">Jon Wilime</a></h6>
                                                        <button className="add-frnd">10 mutual friends</button>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-center profile-active">
                                                  
                                                    <div className="profile-thumb active">
                                                        <a href="#">
                                                            <figure className="profile-thumb-small">
                                                                <img src="assets/images/profile/profile-small-5.jpg" alt="profile picture"/>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                  
    
                                                    <div className="posted-author">
                                                        <h6 className="author"><a href="profile.html">Robart faul</a></h6>
                                                        <button className="add-frnd">12 mutual friends</button>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card card-small mb-0 active-profile-wrapper">
                                    <div className="active-profiles-wrapper">
                                        <Slider className="slick-row-20 active-profile-carousel slick-arrow-style" {...settings1}>
                                            <div className="single-slide">
                                                <div className="profile-thumb active profile-active">
                                                    <a href="#">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-1.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                            </div>
             
                                            <div className="single-slide">
                                                <div className="profile-thumb active profile-active">
                                                    <a href="javascript:void(0)">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-1.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                            </div>
          
                                            <div className="single-slide">
                                                <div className="profile-thumb active profile-active">
                                                    <a href="javascript:void(0)">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-2.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                            </div>
                      
                                            <div className="single-slide">
                                                <div className="profile-thumb active profile-active">
                                                    <a href="javascript:void(0)">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-3.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                            </div>
                  
                                            <div className="single-slide">
                                                <div className="profile-thumb active profile-active">
                                                    <a href="javascript:void(0)">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-4.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                            </div>
       
                                            <div className="single-slide">
                                                <div className="profile-thumb active profile-active">
                                                    <a href="javascript:void(0)">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-1.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                            </div>
                         
                                            <div className="single-slide">
                                                <div className="profile-thumb active profile-active">
                                                    <a href="javascript:void(0)">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-5.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                            </div>
                       
                                            <div className="single-slide">
                                                <div className="profile-thumb active profile-active">
                                                    <a href="javascript:void(0)">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-6.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                            </div>
                       
                                            <div className="single-slide">
                                                <div className="profile-thumb active profile-active">
                                                    <a href="javascript:void(0)">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-7.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                            </div>
                 
                                            <div className="single-slide">
                                                <div className="profile-thumb active profile-active">
                                                    <a href="javascript:void(0)">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-8.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                            </div>
                          
                                            <div className="single-slide">
                                                <div className="profile-thumb active profile-active">
                                                    <a href="javascript:void(0)">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-9.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                            </div>
                          
                                            <div className="single-slide">
                                                <div className="profile-thumb active profile-active">
                                                    <a href="javascript:void(0)">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-10.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                            </div>
                      
                                            <div className="single-slide">
                                                <div className="profile-thumb active profile-active">
                                                    <a href="javascript:void(0)">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-11.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                                <div className="footer-card position-relative">
                                    <div className="live-chat-inner">
                                        <div className="chat-text-field">
                                            <textarea className="live-chat-field custom-scroll" placeholder="Text Message"></textarea>
                                            <button className="chat-message-send" type="submit" value="submit">
                                                <img src="assets/images/icons/plane.png" alt=""/>
                                            </button>
                                        </div>
                                        <div className="chat-output-box">
                                            <div className="live-chat-title">
                                              
                                                <div className="profile-thumb active">
                                                    <a href="#">
                                                        <figure className="profile-thumb-small">
                                                            <img src="assets/images/profile/profile-small-15.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                                
                                                <div className="posted-author">
                                                    <h6 className="author"><a href="profile.html">Robart Marloyan</a></h6>
                                                    <span className="active-pro">active now</span>
                                                </div>
                                                <div className="live-chat-settings ml-auto">
                                                    <button className="chat-settings"><i className="flaticon-settings"></i></button>
                                                    <button className="close-btn" data-close="chat-output-box"><i className="flaticon-cross-out"></i></button>
                                                </div>
                                            </div>
                                            <div className="message-list-inner">
                                                <ul className="message-list custom-scroll">
                                                    <li className="text-friends">
                                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                                                        <div className="message-time">10 minute ago</div>
                                                    </li>
                                                    <li className="text-author">
                                                        <p>Many desktop publishing packages and web page editors</p>
                                                        <div className="message-time">5 minute ago</div>
                                                    </li>
                                                    <li className="text-friends">
                                                        <p>packages and web page editors </p>
                                                        <div className="message-time">2 minute ago</div>
                                                    </li>
                                                    <li className="text-friends">
                                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                                                        <div className="message-time">10 minute ago</div>
                                                    </li>
                                                    <li className="text-author">
                                                        <p>Many desktop publishing packages and web page editors</p>
                                                        <div className="message-time">5 minute ago</div>
                                                    </li>
                                                    <li className="text-friends">
                                                        <p>packages and web page editors </p>
                                                        <div className="message-time">2 minute ago</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    
        <footer className="d-block d-lg-none">
            <div className="footer-area reveal-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mobile-footer-inner d-flex">
                                <div className="mobile-frnd-search">
                                    <button className="search-toggle-btn"><i className="flaticon-search"></i></button>
                                </div>
                                <div className="mob-frnd-search-inner">
                                    <form className="mob-frnd-search-box d-flex">
                                        <input type="text" placeholder="Search Your Friends" className="mob-frnd-search-field"/>
                                    </form>
                                </div>
                                <div className="card card-small mb-0 active-profile-mob-wrapper">
                                    <div className="active-profiles-mob-wrapper">
                                        <div className="active-profile-mobile">
                                        <Slider className="slick-row-10 active-profile-carousel slick-arrow-style" {...settings2}>
                                            <div className="single-slide">
                                                <div className="profile-thumb active profile-active">
                                                    <a href="#">
                                                        <figure className="profile-thumb-small profile-active">
                                                            <img src="assets/images/profile/profile-small-1.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                            </div>
                                          
                                            <div className="single-slide">
                                                <div className="profile-thumb active profile-active">
                                                    <a href="javascript:void(0)">
                                                        <figure className="profile-thumb-small profile-active">
                                                            <img src="assets/images/profile/profile-small-8.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                            </div>
                                        
                                            <div className="single-slide">
                                                <div className="profile-thumb active profile-active">
                                                    <a href="javascript:void(0)">
                                                        <figure className="profile-thumb-small profile-active">
                                                            <img src="assets/images/profile/profile-small-2.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                            </div>
                                          
                                            <div className="single-slide">
                                                <div className="profile-thumb active profile-active">
                                                    <a href="javascript:void(0)">
                                                        <figure className="profile-thumb-small profile-active">
                                                            <img src="assets/images/profile/profile-small-3.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                            </div>
                                            
                                            <div className="single-slide">
                                                <div className="profile-thumb active profile-active">
                                                    <a href="javascript:void(0)">
                                                        <figure className="profile-thumb-small profile-active">
                                                            <img src="assets/images/profile/profile-small-4.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                            </div>
                                            
                                            <div className="single-slide">
                                                <div className="profile-thumb active profile-active">
                                                    <a href="javascript:void(0)">
                                                        <figure className="profile-thumb-small profile-active">
                                                            <img src="assets/images/profile/profile-small-5.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                            </div>
                                            
    
                                            
                                            <div className="single-slide">
                                                <div className="profile-thumb active profile-active">
                                                    <a href="javascript:void(0)">
                                                        <figure className="profile-thumb-small profile-active">
                                                            <img src="assets/images/profile/profile-small-9.jpg" alt="profile picture"/>
                                                        </figure>
                                                    </a>
                                                </div>
                                            </div>
                                        </Slider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </body>
        )
    }
}

export default MainPage;