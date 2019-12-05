import React, {Fragment} from 'react';
import Header from "../../components/Header";
import Wishlist from "../../components/Wishlist";
import User from "../../components/User";
import api from "../../api";

class MyPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }

    //"5dbd409de7b2e26b9ad803db"
    componentDidMount() {
        api(`/api/wishlist/get`, 'GET', {id: window.user_id})
            .then(data_products => {
                console.log(data_products.response.wishlist);

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
    }

    render(){
        return(
            <Fragment>
                <Header
                    isHideLeft
                    user={this.props.user}
                    textLeft={"Вернуться к поиску"}
                    textRight={"Мои друзья"}
                    linkToLeft={"/"}
                    linkToRight={"/friendslist"}
                />
                <User
                    wantText={"Хочу"}
                    text={"Поделиться"}
                    avatarWidth="150px"
                    user={this.props.user}
                />
                <Wishlist
                    isMine
                    products={this.state.products}
                />
            </Fragment>
        )
    }
}

export default MyPage;
