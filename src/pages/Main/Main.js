import React from 'react';
import Header from "../../components/Header";
import Input from "../../components/Input";
import Wishlist from "../../components/Wishlist";
import { ContentContainer, Label } from './../../styles/styles.js';

class Main extends React.Component{
    render(){
        return(
            <div>
                <Header
                    user={this.props.user}
                    linkToRight={"/friendslist"}
                    textRight={"Мои друзья"}
                    linkToLeft={"/mypage"}
                />
                <ContentContainer>
                    <Label>
                        <span>Вишлист</span>
                        <span className="ec ec-heart-eyes"></span>
                    </Label>
                    <div>
                        <Input searchPlaceholder={"Введите название товара"}/>
                    </div>
                    <Wishlist products={this.props.products}/>
                </ContentContainer>
            </div>
        )
    }
}

export default Main;
