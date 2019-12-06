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

    componentDidMount() {
        this.setState({ isLoading: true });
        const id = this.props.match.params.id;

        connect.sendPromise("VKWebAppCallAPIMethod", {
            "method": "users.get",
            "request_id": "5",
            "params": {
                "user_ids": id,
                "fields": ["photo_200"],
                "v": "5.103",
                "access_token": window.access_token,
            }
        }).then(friend => {
            const frd = friend.response[0];
            this.setState({
                friend: {
                    id: frd.id,
                    img: frd.photo_200,
                    name: `${frd.first_name} ${frd.last_name}`
                },
                isLoading: false,
            });

            //5dbd409de7b2e26b9ad803db
            api(`/api/wishlist/get?id=5dbd409de7b2e26b9ad803db&uid=5dbd409de7b2e26b9ad803db`, 'GET', {id: '5dbd409de7b2e26b9ad803db'})
                .then(data_products => {
                    console.log(data_products);

                    const products = [];
                    for (let product of data_products.response.wishlist) {
                        products.push(
                            {
                                id: product.id,
                                img: product.photo,
                                title: product.name,
                                price: product.price,
                            }
                        )
                    }

                    this.setState({
                        products: products,
                    })
                });
        })
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
                    text={"Подарю"}
                    products={this.state.products}
                />
            </Fragment>
        )
    }
}

export default withRouter(FriendPage);
