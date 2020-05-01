import React from 'react';

const AboutSection = (props) => {

    return  (
        <div className={props.classNames} id={props.id}>
        <div className="work-zone">
            <div className="author-desc-title d-flex">
                <h6 className="author"><a href="profile.html">Mili Raoulin</a></h6>
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
            <p>{props.content}</p>
        </div>
    </div>
    )
}

export default AboutSection;