import React from 'react';
import FriendItem from './FriendItem/FriendItem.js';
import EmptyResponse from "../EmptyResponse";
import DeleteBtn from "../Wishlist/WishItem/ActionsBar/DeleteBtn";

class FriendsList extends React.Component {
    render(){
        if (this.props.friends.length) {
            const friends = this.props.friends;
            const friendsList = friends.map((friend, idx) =>
                <FriendItem inSearch user={friend} key={idx}/>
            );
            return (
                <div>
                    {friendsList}
                    <DeleteBtn text={"Показать ещё"}/>
                </div>
            );
        } else {
            return (
                <EmptyResponse text={"Кажется, у тебя нет друзей"}/>
            );
        }
    }
}

export default FriendsList;
