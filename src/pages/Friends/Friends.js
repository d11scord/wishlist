import React from 'react';
import styled from "styled-components";
import Header from "../../components/Header";
import Input from './../../components/Input/Input';
import FriendsList from './../../components/FriendsList/FriendsList.js';
import DefaultBtn from './../../components/Wishlist/WishItem/ActionsBar/DefaultBtn/DefaultBtn.js';

const FriendsContainer = styled.div`
  align-items: center;
`;
const FriendsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const FriendsLabel = styled.div``;
const Span = styled.span`
  font-size: 1em;
`;

const EmojiSpan = styled(Span)`
  role="img";
  aria-label="smiling face with heart-eyes";
`;

class Friends extends React.Component {
    render(){
        return(
            <FriendsContainer>
                <Header />
                <FriendsWrapper>
                    <FriendsLabel>
                        <Span>Мои друзья</Span>
                        <EmojiSpan>&#128540;</EmojiSpan>
                    </FriendsLabel>
                    <Input/>
                    <FriendsList user={this.props.user}/>
                    <DefaultBtn/>
                </FriendsWrapper>
            </FriendsContainer>
        )
    }
}

export default Friends;
