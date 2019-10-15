import React from 'react';
import DefaultBtn from './../../Wishlist/WishItem/ActionsBar/DefaultBtn/DefaultBtn.js';
import './FriendItem.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class FriendItem extends React.Component {
    render(){
        return(
            <div>
                <img
                    src={process.env.PUBLIC_URL + this.props.friend.img}
                    className="photo"
                    alt={this.props.friend.name}
                />
                <div className="searchProfile">
                    <p className="name">{this.props.friend.name}</p>
                    <DefaultBtn/>
                </div>
            </div>
        )
    }
}

export default FriendItem;
