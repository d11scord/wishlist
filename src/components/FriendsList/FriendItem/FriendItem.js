import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
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
