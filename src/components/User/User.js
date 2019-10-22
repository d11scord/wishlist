import React from 'react';
import styled from "styled-components";
import Avatar from "./Avatar";
import DefaultBtn from "../Wishlist/WishItem/ActionsBar/DefaultBtn";

const ProfileContainer = styled.div`
  width: 100%;
`;
const ProfileDetails = styled.div`
  display: ${props => props.inSearch ? "inline-flex" : "flex"};
`;
const ProfileDetailsLeft = styled.div`
  margin: 15pt 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProfileDetailsRight = styled.div`
  display: flex;
  align-items: end;
  justify-content: ${props => props.inSearch ? "space-evenly" : "center"};
  flex-direction: column;
`;
const ProfileDetailsUsername = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  flex-grow: ${props => props.inSearch ? "1" : "0"};
`;
const ProfileDetailsMeta = styled.div`
  display: ${props => props.inSearch ? "none" : "flex"};
  justify-content: center;
`;
const ProfileDetailsBtn = styled.div`
  text-align: left;
  flex-grow: ${props => props.inSearch ? "2" : "0"};
`;
const ParagraphText = styled.p`
  margin-right: 25pt;
  color: #329eff;

  :hover {
    text-decoration: none;
    color: #2a85d7;
  }

  :active {
    color: #2168a8;
  }
`;

class User extends React.Component {
    render() {
        return (
            <ProfileContainer>
                <ProfileDetails inSearch={this.props.inSearch}>
                    <ProfileDetailsLeft inSearch={this.props.inSearch}>
                        <Avatar avatarWidth={this.props.avatarWidth}/>
                    </ProfileDetailsLeft>
                    <ProfileDetailsRight inSearch={this.props.inSearch}>
                        <ProfileDetailsUsername inSearch>
                            <h3>{this.props.user.name}</h3>
                        </ProfileDetailsUsername>
                        <ProfileDetailsMeta inSearch={this.props.inSearch}>
                            {/*Здесь будут линки*/}
                            <ParagraphText>
                                Хочет получить &#128524;
                            </ParagraphText>
                            <ParagraphText>
                                Хочет подарить &#128526;
                            </ParagraphText>
                            {/*Здесь будут линки*/}
                        </ProfileDetailsMeta>
                        <ProfileDetailsBtn inSearch>
                            <DefaultBtn inSearch/>
                        </ProfileDetailsBtn>
                    </ProfileDetailsRight>
                </ProfileDetails>
            </ProfileContainer>
        )
    }
}

export default User;