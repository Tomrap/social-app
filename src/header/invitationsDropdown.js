import React , { useContext } from 'react';

const InvitationsDropdown = (props) => {
        
    const [classNames, setClassNames] = React.useState(`frnd-request-list`);

    const toggleClass = () => {
        if(classNames == `frnd-request-list show`) {
            setClassNames(`frnd-request-list`)
        } else {
            setClassNames(`frnd-request-list show`)
        }
    }

    return (
        <li>
        <a className="msg-trigger-btn" onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            toggleClass();
        }}>Invitations</a>
        <ul className={classNames} id='frnd-request-list-regular'>
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
    )
}
export default InvitationsDropdown