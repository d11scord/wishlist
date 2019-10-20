import React from 'react';
import styled from "styled-components";
import WishItem from './WishItem/WishItem.js';

const WishlistContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

class Wishlist extends React.Component{
    render() {
        const items = this.props.products;
        const wishList = items.map((product, idx) =>
            <WishItem product={product} key={idx}/>
        );
        return (
            <WishlistContainer>
                {wishList}
            </WishlistContainer>
        );
    }
}

export default Wishlist;
