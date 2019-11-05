import React from 'react';
import Header from "../../components/Header";
import Input from "../../components/Input";
import Wishlist from "../../components/Wishlist";
import { ContentContainer, Label } from './../../styles/styles.js';
import styled from "styled-components";
import api from "../../api";

const Content = styled.div`
  padding: 0em 0em 1.5em;
`;

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          suggestions: [],
          isLoading: false,
        }
    };

    componentDidMount() {
        this.setState({ isLoading: true });
        api('/api/products/suggest?query=iphone').then(result => {
            console.log(result.response.suggestions.completions.map((sugg) => sugg.value));
            this.setState(
                { suggestions: result.response.suggestions.completions.map((sugg) => sugg.value),
                  isLoading: false }
            );
        })
    }

    render(){
        const { suggestions, isLoading } = this.state;
        if (isLoading) {
            return <p>Loading ...</p>;
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
                    <Label>
                        <span>Вишлист</span>
                        <span className="ec ec-heart-eyes"></span>
                    </Label>
                    <Input suggestions={suggestions} searchPlaceholder={"Введите название товара"}/>
                    {suggestions.map((sugg, idx) => <p key={idx}> {sugg} </p>)}
                    <Wishlist isMine products={this.props.products} handleMyFavorite={this.props.handleMyFavorite}/>
                </ContentContainer>
            </Content>
        )
    }
}

export default Main;
