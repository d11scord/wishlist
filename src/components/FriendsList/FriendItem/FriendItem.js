import React from 'react';
import DefaultBtn from './../../Wishlist/WishItem/ActionsBar/DefaultBtn/DefaultBtn.js';
import './FriendItem.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import User from "../../User";


class FriendItem extends React.Component {
    render(){
        return(
            <div className="row justify-content-center">
                <User user={this.props.user}/>
            </div>
        )
    }
}

export default FriendItem;
