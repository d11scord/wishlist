import React from 'react';
import styled from "styled-components";
import Header from "../../components/Header";
import Input from './../../components/Input/Input';
import FriendsList from './../../components/FriendsList/FriendsList.js';
import DefaultBtn from './../../components/Wishlist/WishItem/ActionsBar/DefaultBtn/DefaultBtn.js';

const FriendsContainer = styled.div`
  text-align: center;
`;

const FriendsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  font-family: "Candara Light", monospace;
  margin-top: 48pt;
  margin-bottom: 24pt;
  font-size: 32pt;
`;

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
                    <Label>
                        <Span>Мои друзья</Span>
                        <EmojiSpan>&#128540;</EmojiSpan>
                    </Label>
                    <Input/>
                    <FriendsList inSearch user={this.props.user}/>
                </FriendsWrapper>
                <DefaultBtn text={"Показать ещё"}/>
            </FriendsContainer>
        )
    }
}

export default Friends;
