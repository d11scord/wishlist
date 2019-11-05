import React from 'react';
import Header from "../../components/Header";
import Wishlist from "../../components/Wishlist";
import User from "../../components/User";
import connect from "@vkontakte/vk-connect";
import {useParams
} from "react-router-dom";

class FriendPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: {id: 3, name: "jopa"},
        };
    }

    componentDidMount() {
        let { id } = useParams();
        connect.sendPromise("VKWebAppGetAuthToken", {"app_id": 7159872, "scope": "friends"}).then(data => {
            connect.sendPromise("VKWebAppCallAPIMethod", {
                "method": "users.get",
                "request_id": "0",
                "params": {
                    "user_ids": { id },
                    "v": "5.103",
                    "access_token": data.access_token,
                }
            }).then(friend => {
                console.log(friend);
                this.setState({
                    friend: friend,
                });
            })
        });
    }

    render() {
        console.log(this.props.friend);
        return (
            <div>
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
                    user={this.props.friend}
                />
                <Wishlist
                    text={"Подарю"}
                    products={this.props.products}
                />
            </div>
        )
    }
}

export default FriendPage;