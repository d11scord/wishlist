import React from 'react';
import styled from "styled-components";
import Avatar from "../User/Avatar";
import { ColoredLink } from './../../styles/styles.js';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";

const Nav = styled.div`
`;
const NavHeader = styled.div`
  padding: 26pt 20pt;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
const NavLeft = styled.div`
  width: 50%;
  text-align: left;
  svg {
    margin-right: 20pt;
  }
`;
const NavRight = styled.div`
  width: 50%;
  text-align: right;
`;
const HeaderLink = styled(ColoredLink)`
  padding-left: ${props => props.isMyPage ? "0pt" : "15pt"};
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
                            <ColoredLink>
                                {this.props.textRight || this.props.user.name}
                            </ColoredLink>
                        </Link>
                    </NavRight>
                </NavHeader>
            </Nav>
        );
    }
}

export default Header;
