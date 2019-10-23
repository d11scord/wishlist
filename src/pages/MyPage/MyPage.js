import React from 'react';
import Header from "../../components/Header";
import Wishlist from "../../components/Wishlist";
import User from "../../components/User";

class MyPage extends React.Component{
    render(){
        return(
            <div>
                <Header
                    isMyPage
                    user={this.props.user}
                    textLeft={"Вернуться к поиску"}
                    textRight={"Мои друзья"}
                    linkToLeft={"/"}
                    linkToRight={"/friendslist"}
                />
                <User
                    wantText={"Хочу"}
                    text={"Поделиться"}
                    avatarWidth="150px"
                    user={this.props.user}
                />
                <Wishlist
                    isMine
                    text={"Не подарю :с"}
                    products={this.props.products}
                />
            </div>
        )
    }
}

export default MyPage;
