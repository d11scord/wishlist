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

    fetchSearchResults = ( query ) => {
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

                this.getSuggestions(query);

                this.setState({
                    products: products,
                    loading: false
                })
            }).catch( error => {
            if ( error ) {
                this.setState({
                    loading: false,
                    message: 'Failed to fetch the data. Please check network'
                })
            }
        } );
    };

    getSuggestions = (query) => {
        api(`/api/products/suggest?query=${query}`)
            .then(data => {
                console.log(data);
                this.setState({
                    query: data.response.suggestions.input.value,
                    suggestions: data.response.suggestions.completions.map((sugg) => sugg.value),
                })
            })
    };

    handleOnInputChange = ( query ) => {
        if ( ! query ) {
            this.setState( { query, products: [], message: '', totalPages: 0, totalResults: 0 } );
        } else {
            this.setState( { query, loading: true, message: '' }, () => {
                this.fetchSearchResults( query );
            } );
        }
    };

    componentWillMount = () => {
        console.log(window.geo_data);
        this.fetchSearchResults('', 'iphone');
    };

    renderSearchResults = () => {
        const { products } = this.state;
        if (products.length) {
            return <Wishlist isMine products={this.state.products} handleMyFavorite={this.props.handleMyFavorite}/>
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
                        <span className="ec ec-heart-eyes"></span>
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
