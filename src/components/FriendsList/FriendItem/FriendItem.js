import React from 'react';
import User from "../../User";
import './FriendItem.css';

class FriendItem extends React.Component {
    render(){
        return(
            <User inSearch text={this.props.text} user={this.props.user}/>
        )
    }
}

export default FriendItem;
