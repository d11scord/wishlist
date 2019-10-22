import React from 'react';
import styled from "styled-components";
import ActionsBar from "./ActionsBar/ActionsBar";

const WishItemContainer = styled.div`
    width = 33.333%;
    padding: 30pt;
    text-align: left;
    word-break: break-all;
    white-space: normal;
    line-break: normal;
`;

const ProductImg = styled.img`
    width: 12em;
    margin: 0;
    padding: 0;
`;

const Span = styled.span`
    display: block;
`;

const Description = styled(Span)`
    word-break: keep-all;
    width: auto;
    color: #929292;
    white-space: normal;
`;

class WishItem extends React.Component{
    render() {
        return(
            <WishItemContainer>
                <ProductImg
                    src={process.env.PUBLIC_URL + this.props.product.img}
                    alt={this.props.product.name}
                />
                <Span>{this.props.product.title}</Span>
                <Span>{this.props.product.price}</Span>
                <Description>{this.props.product.description}</Description>
                <ActionsBar className="actionBar"/>
            </WishItemContainer>
        )
    }
}

export default WishItem;