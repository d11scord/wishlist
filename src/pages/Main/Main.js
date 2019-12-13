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
    constructor( props ) {
        super( props );

        this.state = {
            query: '',
            products: [],
            loading: false,
            message: '',
            suggestions: [],
        };

    }

    fetchSearchResults = async (query) => {
        try {
            let myFavorites = await api(`/api/wishlist/get?id=${window.user_id}&uid=${window.user_id}`, 'GET', {id: window.user_id});
            myFavorites = myFavorites.response.wishlist.map(f => f.id);
            console.log(myFavorites);

            const data_products = await api(`/api/products/suggest?query=${query}`);
            this.setState({
                suggestions: data_products.response.suggestions.completions.map((sugg) => sugg.value),
            });

            const data = await api(`/api/products/search?query=${query}&lat=${window.geo_data.lat}&long=${window.geo_data.long}`);
                if (data.response.response.items.length) {
                    console.log(data);

                    const products = [];
                    const currency = data.response.response.context.currency.name;

                    for (let product of data.response.response.items) {
                        if (product.photo !== undefined) {
                            const isFavorite = myFavorites.includes(product.id);

                            products.push(
                                {
                                    id: product.id,
                                    img: product.photo.url,
                                    title: product.name,
                                    price: `${product.price.avg}`,
                                    description: product.description,

                                    isFavorite: isFavorite,
                                }
                            )
                        }
                    }

                    this.setState({
                        products: products,
                        loading: false
                    })
                }
            }
        catch (error) {
            debugger;
            this.setState({
                loading: false,
                message: 'Failed to fetch the data. Please check network'
            })
        }
    };

    handleOnInputChange = async (query) => {
        if (!query) {
            this.setState({ query: '', products: [], message: '' });
        } else {
            this.setState({ query, loading: true, message: '' });
            await this.fetchSearchResults( query );
        }
    };

    componentDidMount = async () => {
        await this.fetchSearchResults('iphone');
    };

    handleFavorite = id => {
        console.log('ZHopa')
        const favoritedProducts = this.state.products.map(product => {
            if (product.id === id) product.isFavorite = !product.isFavorite;
            return product;
            });
        this.setState({
            products: favoritedProducts
        });
    };

    renderSearchResults = () => {
        const { products } = this.state;
        if (products.length) {
            return <Wishlist products={this.state.products} handleFavorite={this.handleFavorite} />
        }
    };

    render(){
        const { query, loading, message, } = this.state;
        // if (loading) {
        //     return <Pending/>;
        // }
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
                        <span className="ec ec-heart-eyes"/>
                    </Label>
                    <Input
                        suggestions={ this.state.suggestions }
                        query={ query }
                        onUserInput={ this.handleOnInputChange }
                        searchPlaceholder={"Введите название товара"}
                    />

                    {/*	Error Message*/}
                    { message && <p className="message">{ message }</p> }

                    {/*	Result*/}
                    { this.renderSearchResults() }

                </Fragment>
            </Content>
        )
    }
}

export default Main;
