import React from 'react';
import Header from "../../components/Header";
import Wishlist from "./../../components/Wishlist/Wishlist.js";
import User from "../../components/User";
import './FriendPage.css'

class FriendPage extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <User friend={this.props.friend}/>
                <Wishlist products={this.props.products}/>
            </div>
        )
    }
}

export default FriendPage;