import React from 'react';
import Header from "../../components/Header";
import Input from "../../components/Input";
import Wishlist from "../../components/Wishlist";
import { ContentContainer, Label } from './../../styles/styles.js';
import styled from "styled-components";
import connect from "@vkontakte/vk-connect";
import api from "../../api";

const Content = styled.div`
  padding: 0em 0em 1.5em;
`;

class Main extends React.Component{
    state = {
      suggestions: [],
    };

    componentDidMount() {
        api('/api/products/suggest?query=iphone').then(result => {
            console.log(result);
            this.setState(
                this.suggestions = result
            );
        })
    }

    render(){
        return(
            <Content>
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
                    <Input searchPlaceholder={"Введите название товара"}/>
                    {this.state.suggestions}
                    <Wishlist isMine products={this.props.products} handleMyFavorite={this.props.handleMyFavorite}/>
                </ContentContainer>
            </Content>
        )
    }
}

export default Main;
