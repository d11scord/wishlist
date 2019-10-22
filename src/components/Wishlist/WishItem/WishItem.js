import React from 'react';
import styled from "styled-components";
import ActionsBar from "./ActionsBar/ActionsBar";

const WishItemContainer = styled.div`
  width = 33.333%;
  padding: 20pt 30pt;
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
  // padding-top: 0.5em;
  padding-bottom: 4.5pt;
`;

const NameSpan = styled(Span)`
  font-size: 16px;
`;

const PriceSpan = styled(Span)`
  font-size: 12px;
`;

const Description = styled(Span)`
  font-size: 10px;
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
                <NameSpan>{this.props.product.title}</NameSpan>
                <PriceSpan>{this.props.product.price}</PriceSpan>
                <Description>{this.props.product.description}</Description>
                <ActionsBar isMine={this.props.isMine} text={this.props.text} className="actionBar"/>
            </WishItemContainer>
        )
    }
}

export default WishItem;
