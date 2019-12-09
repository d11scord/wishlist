import React, {Fragment} from 'react';
import api from "../../api";
import Header from "../../components/Header";
import Wishlist from "../../components/Wishlist";
import User from "../../components/User";

class MyPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        api(`/api/wishlist/get?id=${window.user_id}&uid=${window.user_id}`, 'GET', {id: window.user_id})
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
            <>
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
            </>
        )
    }
}

export default MyPage;
