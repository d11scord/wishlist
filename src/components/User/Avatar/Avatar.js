import React from 'react';
import './Avatar.css';

class Avatar extends React.Component{
    render() {
        return (
            <div className={"avatar"}>
                <img src={process.env.PUBLIC_URL + '/img/avatar.png'} alt="Avatar"/>
            </div>
        )
    }
}

export default Avatar;
