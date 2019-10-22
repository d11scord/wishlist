import React from 'react';
import Header from "../../components/Header";
import User from "../../components/User";
import Wishlist from "../../components/Wishlist";

class MyPage extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <User user={this.props.user}/>
                <Wishlist products={this.props.products}/>
            </div>
        )
    }
}

export default MyPage;