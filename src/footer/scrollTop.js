import React, { useState, useEffect } from 'react';
import $ from 'jquery'

const ScrollTop = (props) => {

    const [classNames, setClassNames] = React.useState(`scroll-top not-visible`);

    const show = () => {
        setClassNames(`scroll-top`)
    }

    const close = () => {
        setClassNames(`scroll-top not-visible`)
    }

    useEffect(() => {
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                show()
            } else {
                close()
            }
        });
      });

    return (
        <div className={classNames} onClick={()=>{
            $('html,body').animate({
                scrollTop: 0
            }, 1000);
        }}>
        <   i className="bi bi-finger-index"></i>
        </div>
    )
}

export default ScrollTop