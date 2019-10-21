import React from 'react';
import Header from "../../components/Header";
import Wishlist from "./../../components/Wishlist/Wishlist.js";
import User from "../../components/User";

class FriendPage extends React.Component{
    render(){
        return(
            <div>
                <Header inHeader/>
                <User user={this.props.user}/>
                <Wishlist products={this.props.products}/>
            </div>
        )
    }
}

export default FriendPage;
