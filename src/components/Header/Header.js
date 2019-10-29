import React from 'react';
import styled from "styled-components";
import Avatar from "../User/Avatar";
import { ColoredLink } from './../../styles/styles.js';
import { Link } from "react-router-dom";

const Nav = styled.div`
`;
const NavHeader = styled.div`
  padding: 23.5pt 20pt 10pt;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
`;
const NavLeft = styled.div`
  width: 33%;
  text-align: left;
`;
const NavRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 33%;
  text-align: right;
`;
const NavCenter = styled.div`
  display: ${props => props.isFriendPage ? "flex" : "none"}
  width: 33%;
  justify-content: center;
`;
const HeaderLink = styled(ColoredLink)`
  padding: ${props => props.isMyPage ? "0pt" : "12pt"};
`;
const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

class Header extends React.Component {
    render(){
        return (
            <Nav>
                <NavHeader>
                    <NavLeft>
                        <Link to={this.props.linkToLeft}>
                            <Avatar isHide={this.props.isHide} avatarWidth="40px"/>
                            <HeaderLink isHide={this.props.isHide}>
                                {this.props.textLeft || this.props.user.name}
                            </HeaderLink>
                        </Link>
                    </NavLeft>
                    <NavCenter isFriendPage={this.props.isFriendPage}>
                        <Link to={"/"}>
                            <HeaderLink>
                                {"Вернуться к поиску"}
                            </HeaderLink>
                        </Link>
                    </NavCenter>
                    <NavRight>
                        <Link to={this.props.linkToRight}>
                            <HeaderLink>
                                {this.props.textRight || this.props.user.name}
                            </HeaderLink>
                        </Link>
                            <AvatarContainer>
                                <Avatar inHeader isHide={this.props.isHide} avatarWidth="40px"/>
                                <Avatar inHeader isHide={this.props.isHide} avatarWidth="40px"/>
                                <Avatar isHide={this.props.isHide} avatarWidth="40px"/>
                            </AvatarContainer>
                    </NavRight>
                </NavHeader>
            </Nav>
        );
    }
}

export default Header;
