import React from 'react';
import styled from "styled-components";
import api from "../../api";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Wishlist from "../../components/Wishlist";
import { ContentContainer, Label } from './../../styles/styles.js';
import Pending from "../../components/Pending";

const Content = styled.div`
  padding: 0em 0em 1.5em;
`;

const LabelContainer = styled(Label)`
  text-align: center;
`;

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          suggestions: [],
          isLoading: false,
        }
    };

    render(){
        const { suggestions, isLoading } = this.state;
        if (isLoading) {
            return <Pending/>;
        }
        return(
            <Content>
                <Header
                    user={this.props.user}
                    linkToRight={"/friendslist"}
                    textRight={"Мои друзья"}
                    linkToLeft={"/mypage"}
                />
                <ContentContainer>
                    <LabelContainer>
                        <span>Вишлист</span>
                        <span className="ec ec-heart-eyes"></span>
                    </LabelContainer>
                    <Input searchPlaceholder={"Введите название товара"}/>
                    {/*{suggestions.map((sugg, idx) => <p key={idx}> {sugg} </p>)}*/}
                    <Wishlist isMine products={this.props.products} handleMyFavorite={this.props.handleMyFavorite}/>
                </ContentContainer>
            </Content>
        )
    }
}

export default Main;
