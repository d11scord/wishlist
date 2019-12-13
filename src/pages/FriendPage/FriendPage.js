import React, {Fragment} from 'react';
import connect from "@vkontakte/vk-connect";
import { withRouter } from "react-router-dom";
import Header from "../../components/Header";
import Wishlist from "../../components/Wishlist";
import User from "../../components/User";
import Pending from "../../components/Pending";
import api from "../../api";

class FriendPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: {},
            products: [],
            isLoading: false,
        };
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true });

        const friend = this.props.location.friend;

        this.setState({
            friend: {
                id: friend.id,
                img: friend.img,
                name: friend.name,

                _id: friend._id,
            },
            isLoading: false,
        });

        const friend_wishlist = await api(
            `/api/wishlist/get?id=${friend._id}&uid=${friend._id}`,
            'GET',
            { id: `${friend._id}` }
        );
        console.log(friend_wishlist);

        const products = [];
        for (let product of friend_wishlist.response.wishlist) {
            products.push(
                {
                    id: product.id,
                    img: product.photo,
                    title: product.name,
                    price: product.price,

                    booked_by: product.booked_by || false,
                }
            )
        }

        this.setState({
            products: products,
        });

        console.log(this.state.products);
    }

    refreshFriend = (id, booked_by) => {
        console.log('joasdasdsad');
        console.log(booked_by);
        const favoritedProducts = this.state.products.map(product => {
                if (product.id === id && product.booked_by === booked_by) product.booked_by = false;
                if (product.id === id && booked_by === false) product.booked_by = window.user_id;
                return product;
            });
        this.setState({
            products: favoritedProducts
        });
    }

    render() {
        const { isLoading } = this.state;
        if (isLoading) {
            return <Pending/>;
        }
        return (
            <Fragment>
                <Header
                    isFriendPage
                    user={this.props.user}
                    textRight={"Мои друзья"}
                    linkToLeft={"/mypage"}
                    linkToRight={"/friendslist"}
                />
                <User
                    wantText={"Хочет"}
                    text={"Поделиться"}
                    avatarWidth="150px"
                    user={this.state.friend}
                />
                <Wishlist
                    isFriend
                    text={"Подарю"}
                    products={this.state.products}
                    friendId={this.state.friend._id}

                    refreshFriend={this.refreshFriend}
                />
            </Fragment>
        )
    }
}

export default withRouter(FriendPage);
