import React from 'react';
import styled from "styled-components";

const ProfileAvatar = styled.img`
  display: ${props => props.isMyPage ? "none" : "inline-block"};
  border-radius: 50%;
  box-shadow: 0 3px 9px 0 rgba(0, 0, 0, 0.15);

  width: ${props => props.avatarWidth || "100px"};
`;

class Avatar extends React.Component{
    render() {
        return (
            <ProfileAvatar
                isMyPage={this.props.isMyPage}
                avatarWidth={this.props.avatarWidth}
                src={process.env.PUBLIC_URL + '/img/avatar.png'}
                alt="Avatar"
            />
        )
    }
}

export default Avatar;
