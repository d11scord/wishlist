import React from 'react';
import styled from "styled-components";
import DefaultBtn from "./DefaultBtn";
import DeleteBtn from "./DeleteBtn";
import GiftBtn from "./GiftBtn";
import api from "../../../../api";

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.5em;
`;

class ActionsBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFavorite: false
        };
    };

    addFavorite = () => {
        this.setState({ isFavorite: true });
        console.log('add fav');

        api(`/api/wishlist/add`, 'POST', {
            id: this.props.product.id,
            price: this.props.product.price,
            name: this.props.product.title,
            photo: this.props.product.img,
            uid:'5dc13efce7b2e26b9bd804c2',
        }).then(data_products => {
               console.log(data_products)
        });
    };

    deleteFavorite = () => {
        this.setState({ isFavorite: false });
        console.log('del fav');

        api(`/api/wishlist/delete`, 'POST', {id: this.props.product.id, uid:'5dc13efce7b2e26b9bd804c2'})
            .then(data_products => {
               console.log(data_products)
            });
    };


    render() {
        let favBtn;
        const { isFavorite } = this.state;

        if (isFavorite || this.props.isMine) {
            favBtn = <DeleteBtn
                isMine={this.props.isMine}
                text={this.props.text}
                product={this.props.product}
                onClick={this.deleteFavorite}
            />
        } else {
            favBtn = <DefaultBtn
                isMine={this.props.isMine}
                text={this.props.text}
                product={this.props.product}
                onClick={this.addFavorite}
            />
        }
        return (
            <ActionBar>
                {favBtn}
            </ActionBar>
        )
    }
}

export default ActionsBar;
