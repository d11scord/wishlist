import React from 'react';
import styled from "styled-components";
import Avatar from "../User/Avatar";
import { Link } from './../../styles/styles.js';

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
const HeaderLink = styled(Link)`
  padding-left: 15pt;
`;

class Header extends React.Component {
    render(){
        return (
            <Nav>
                <NavHeader>
                    <NavLeft>
                        <Avatar avatarWidth="40px"/>
                        <HeaderLink>Юля Бородкина</HeaderLink>
                    </NavLeft>
                    <NavRight>
                        <Link href="#">
                            Мои друзья
                        </Link>
                    </NavRight>
                </NavHeader>
            </Nav>
        );
    }
}

export default Header;
