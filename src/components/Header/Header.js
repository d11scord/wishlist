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
`;
const NavLeft = styled.div`
  width: 50%;
  text-align: left;
`;
const NavRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  width: 50%;
  text-align: right;
`;
const HeaderLink = styled(ColoredLink)`
  padding: ${props => props.isMyPage ? "0pt" : "12pt"};
`;
const AvatarContainer = styled.div`
  
`;

class Header extends React.Component {
    render(){
        return (
            <Nav>
                <NavHeader>
                    <NavLeft>
                        <Link to={this.props.linkToLeft}>
                            <Avatar isMyPage={this.props.isMyPage} avatarWidth="40px"/>
                            <HeaderLink isMyPage={this.props.isMyPage}>
                                {this.props.textLeft || this.props.user.name}
                            </HeaderLink>
                        </Link>
                    </NavLeft>
                    <NavRight>
                        <Link to={this.props.linkToRight}>
                            <HeaderLink>
                                {this.props.textRight || this.props.user.name}
                            </HeaderLink>
                        </Link>
                        <AvatarContainer>
                            <Avatar isMyPage={this.props.isMyPage} avatarWidth="40px"/>
                            <Avatar isMyPage={this.props.isMyPage} avatarWidth="40px"/>
                            <Avatar isMyPage={this.props.isMyPage} avatarWidth="40px"/>
                        </AvatarContainer>
                    </NavRight>
                </NavHeader>
            </Nav>
        );
    }
}

export default Header;
