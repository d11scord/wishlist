import React from 'react';
import styled from "styled-components";
import Avatar from "./Avatar";
import DefaultBtn from "../Wishlist/WishItem/ActionsBar/DefaultBtn";

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
const ProfileDetailsBtn = styled.div`
  text-align: left;
  flex-grow: ${props => props.inSearch ? "2" : "0"};
`;

class User extends React.Component {
    render() {
        return (
            <>
                <ProfileDetails inSearch={this.props.inSearch}>
                    <ProfileDetailsLeft inSearch={this.props.inSearch}>
                        <Avatar src={this.props.user.img} avatarWidth={this.props.avatarWidth}/>
                    </ProfileDetailsLeft>
                    <ProfileDetailsRight inSearch={this.props.inSearch}>
                        <ProfileDetailsUsername inSearch>
                            <h3>{this.props.user.name}</h3>
                        </ProfileDetailsUsername>
                        <ProfileDetailsBtn inSearch>
                            <DefaultBtn
                                user={this.props.user}
                                inSearch={this.props.inSearch}
                                inProfile={"1.5em"}
                                text={this.props.text}
                                />
                        </ProfileDetailsBtn>
                    </ProfileDetailsRight>
                </ProfileDetails>
            </>
        )
    }
}

export default User;
