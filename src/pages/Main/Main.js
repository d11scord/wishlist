import React, {Fragment} from 'react';
import api from './../../api.js';
import styled from "styled-components";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Wishlist from "../../components/Wishlist";
import Pending from "../../components/Pending";
import { Label } from './../../styles/styles.js';

const Content = styled.div`
  padding: 0em 0em 1.5em;
`;

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            query: '',
            suggestions: [],
        }
    };

    handleUserInput = (inputText) => {
        console.log(inputText);
        this.setState({
            query: inputText,
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                this.getInfo()
            } else if (!this.state.query) {
            }
        })
    };

    getInfo = () => {
        api(`/api/products/suggest?query=${this.state.query}`)
            .then(data => {
                console.log(data);
                this.setState({
                    inputText: data.response.suggestions.input.value,
                    suggestions: data.response.suggestions.completions.map((sugg) => sugg.value),
                })
            })
    };

    // handleInputChange = () => {
    //     this.setState({
    //         query: this.search.value,
    //     }, () => {
    //         if (this.state.query && this.state.query.length > 1) {
    //             this.getInfo()
    //         } else if (!this.state.query) {
    //         }
    //     })
    // };

    render(){
        const { isLoading } = this.state;
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
                <Fragment>
                    <Label>
                        <span>Вишлист</span>
                        <span className="ec ec-heart-eyes"></span>
                    </Label>
                    <Input
                    //     suggestions={[
                    //     "Alligator",
                    //     "Bask",
                    //     "Crocodilian",
                    //     "Death Roll",
                    //     "Eggs",
                    //     "Jaws",
                    //     "Reptile",
                    //     "Solitary",
                    //     "Tail",
                    //     "Wetlands"
                    // ]}
                        suggestions={this.state.suggestions}
                        query={this.state.query}
                        onUserInput={this.handleUserInput}
                        searchPlaceholder={"Введите название товара"}/>
                    {/*{suggestions.map((sugg, idx) => <p key={idx}> {sugg} </p>)}*/}
                    <Wishlist isMine products={this.props.products} handleMyFavorite={this.props.handleMyFavorite}/>
                </Fragment>
            </Content>
        )
    }
}

export default Main;
