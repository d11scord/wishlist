import React from 'react';
import Header from "../../components/Header";
import Wishlist from "../../components/Wishlist";
import User from "../../components/User";

class FriendPage extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <User avatarWidth="150px" user={this.props.user}/>
                <Wishlist products={this.props.products}/>
            </div>
        )
    }
}

export default FriendPage;