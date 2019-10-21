import React from 'react';
import styled from "styled-components";

const ProfileAvatar = styled.img`
  border-radius: 50%;
  box-shadow: 0 3px 9px 0 rgba(0, 0, 0, 0.15);

  width: ${props => props.inHeader ? "40px" : "150px"};  // for Header
  width: ${props => props.inSearch ? "100px" : "40px"};  // for Search
`;

class Avatar extends React.Component{
    render() {
        return (
            <ProfileAvatar
                inSearch={this.props.inSearch}
                inHeader={this.props.inHeader}
                src={process.env.PUBLIC_URL + '/img/avatar.png'}
                alt="Avatar"/>
        )
    }
}

export default Avatar;
