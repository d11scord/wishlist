import React from 'react';
import styled from "styled-components";
import WishItem from './WishItem/WishItem.js';
import EmptyResponse from "../EmptyResponse";

const WishlistContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

class Wishlist extends React.Component{
    render() {
        if (this.props.products.length) {
            const items = this.props.products;
            const wishList = items.map((product, idx) =>
                <WishItem product={product} key={idx}/>
            );
            return (
                <WishlistContainer>
                    {wishList}
                </WishlistContainer>
            );
        } else {
            return (
                <EmptyResponse text={"Кажется, товаров не найдено"}/>
            );
        }
    }
}

export default Wishlist;