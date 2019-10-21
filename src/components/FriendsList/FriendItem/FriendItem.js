import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import User from "../../User";
import DefaultBtn from './../../Wishlist/WishItem/ActionsBar/DefaultBtn/DefaultBtn.js';
import './FriendItem.css';


class FriendItem extends React.Component {
    render(){
        return(
            <div>
                <User inSearch={this.props.inSearch} user={this.props.user}/>
            </div>
        )
    }
}

export default FriendItem;
