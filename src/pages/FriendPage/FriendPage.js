import React from 'react';
import Header from "../../components/Header";
import Wishlist from "../../components/Wishlist";
import User from "../../components/User";

class FriendPage extends React.Component{
    render(){
        return(
            <div>
                <Header
                    isFriendPage
                    user={this.props.user}
                    textRight={"Мои друзья"}
                    linkToLeft={"/mypage"}
                    linkToRight={"/friendslist"}
                />
                <User
                    wantText={"Хочет"}
                    text={"Поделиться"}
                    avatarWidth="150px"
                    user={this.props.friend}
                />
                <Wishlist
                    text={"Подарю"}
                    products={this.props.products}
                />
            </div>
        )
    }
}

export default FriendPage;
