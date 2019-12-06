import React, {Fragment} from 'react';
import connect from "@vkontakte/vk-connect";
import api from './../../api.js';
import styled from "styled-components";
import Header from "../../components/Header";
import Input from './../../components/Input/Input';
import FriendsList from "../../components/FriendsList";
import { Label } from './../../styles/styles.js';

const FriendsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            isLoading: false,
        };
    }

    componentDidMount(){
        connect.sendPromise("VKWebAppCallAPIMethod", {
            "method": "friends.get",
            "request_id": "0",
            "params": {
                "fields": ["nickname", "photo_200"],
                "v":"5.103",
                "access_token": window.access_token,
            }
    }).then(data_friends => {
        //console.log(data_friends)

        let friends = [];
        for (let friend of data_friends.response.items) {
            friends.push(
                {
                    id: friend.id,
                    img: friend.photo_200,
                    name: `${friend.first_name} ${friend.last_name}`
                }
            )
        }

        this.setState({friends: friends})

        api(`/api/user/friends`, 'POST', {
            ids: friends,
            //uid: '5dc13efce7b2e26b9bd804c2',
        }).then(data => {
            console.log(data)
            console.log('data')
        });
        })
    }

    render(){
        return(
            <Fragment>
                <Header
                    isHideRight
                    user={this.props.user}
                    linkToLeft={"/mypage"}
                    textRight={"Вернуться к поиску"}
                    linkToRight={"/"}
                />
                <FriendsWrapper>
                    <Label>
                        <span>Мои друзья</span>
                        <span className="ec ec-stuck-out-tongue-winking-eye"/>
                    </Label>
                    <Input searchPlaceholder={"Начни вводить имя друга"}/>
                    <FriendsList friends={this.state.friends}/>
                </FriendsWrapper>
            </Fragment>
        )
    }
}

export default Friends;
