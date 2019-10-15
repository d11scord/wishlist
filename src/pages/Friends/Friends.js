import React from 'react';
import FriendsList from './../../components/FriendsList/FriendsList.js';
import Header from "../../components/Header";
import DefaultBtn from './../../components/Wishlist/WishItem/ActionsBar/DefaultBtn/DefaultBtn.js';
import './Friends.css';


class Friends extends React.Component {
    render(){
        return(
            <div className="friends">
                <Header />
                <div className="content-container">
                    <div className="label">
                        <span>Мои друзья</span>
                        <span style={{fontSize: 1 + 'em'}} role="img" aria-label="smiling face with heart-eyes">&#128540;</span>
                    </div>
                    <FriendsList friends={this.props.friends}/>
                    <DefaultBtn/>
                </div>
            </div>
        )
    }
}

export default Friends;