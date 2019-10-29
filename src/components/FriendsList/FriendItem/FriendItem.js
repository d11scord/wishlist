import React from 'react';
import User from "../../User";
import './FriendItem.css';

class FriendItem extends React.Component {
    render(){
        return(
            <User text={this.props.text} inSearch user={this.props.user}/>
        )
    }
}

export default FriendItem;
