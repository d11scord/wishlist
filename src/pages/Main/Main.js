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
            products: [],
        }
    };

    getQuery = (query) => {
        api(`/api/products/search?query=${query}&lat=${window.geo_data.lat}&long=${window.geo_data.long}`)
        .then(data_products => {
            console.log(data_products);

            const products = [];
            const currency = data_products.response.response.context.currency.name;

            for (let product of data_products.response.response.items) {
                products.push(
                    {
                        id: product.id,
                        img: product.photo.url,
                        title: product.name,
                        price: `${product.price.avg} ${currency}`,
                        description: product.description,
                    }
                )
            }

            this.setState({
                products: products,
            })
        });
    }

    componentWillMount = () => {
        console.log(window.geo_data);
        this.getQuery('iphone');
    };

    handleUserInput = (inputText) => {
        console.log(inputText);
        this.setState({
            query: inputText,
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                this.getInfo();
            } else if (!this.state.query) {
                console.log('!this.state.query');
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
                        suggestions={this.state.suggestions}
                        query={this.state.query}
                        onUserInput={this.handleUserInput}
                        searchPlaceholder={"Введите название товара"}/>
                    <Wishlist isMine products={this.state.products} handleMyFavorite={this.props.handleMyFavorite}/>
                </Fragment>
            </Content>
        )
    }
}

export default Main;
