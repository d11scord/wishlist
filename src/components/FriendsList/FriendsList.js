import React from 'react';
import FriendItem from './FriendItem/FriendItem.js';


class FriendsList extends React.Component {
    render(){
        const friends = this.props.friends;
        const friendsList = friends.map((friend, idx) =>
            <FriendItem friend={friend} key={idx}/>
        );
        return (
            <div>
                {friendsList}
            </div>
        );
    }
}

export default FriendsList;
