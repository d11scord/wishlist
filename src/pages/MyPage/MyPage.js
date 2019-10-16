import React from 'react';
import './MyPage.css'
import Header from "../../components/Header";
import Wishlist from "./../../components/Wishlist/Wishlist.js";
import User from "../../components/User";

class MyPage extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <User me={this.props.me}/>
                <Wishlist products={this.props.products}/>
            </div>
        )
    }
}

export default MyPage;