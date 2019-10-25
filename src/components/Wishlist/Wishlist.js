import React from 'react';
import styled from "styled-components";
import WishItem from './WishItem/WishItem.js';
import EmptyResponse from "../EmptyResponse";

const WishlistContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

class Wishlist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            myFavorites: [],
        };
    }

    componentDidMount() {
        const results = this.props.products.map(product => {
            product.isFavorite = false;
                return product;
            });
            this.setState({
                myFavorites: results
            });
    }

    handleMyFavorite = id => {
        const myFavoriteItems = this.state.myFavorites.map(wishItem => {
            if (wishItem.id === id) wishItem.isFavorite = !wishItem.isFavorite;
            console.log(wishItem.isFavorite);
            return wishItem;
        });
        this.setState({
            myFavorites: myFavoriteItems
        });
        console.log(myFavoriteItems)
    };

    render() {
        if (this.props.products.length) {
            const items = this.state.myFavorites;
            const wishList = items.map((product) =>
                <WishItem
                    isMine={this.props.isMine}
                    text={this.props.text}
                    product={product}
                    key={product.id}
                    handleMyFavorite={this.handleMyFavorite}
                />
            );
            return (
                <WishlistContainer>
                    {wishList}
                </WishlistContainer>
            );
        }else{
            return (
                <EmptyResponse text={"Кажется, товаров не найдено"}/>
            );
        }
    }
}

export default Wishlist;
