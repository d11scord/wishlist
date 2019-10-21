import React from 'react';
import styled from "styled-components";
import Button from "../../../../../styles/styles";

const DefaultButton = styled(Button)`
    background-image: linear-gradient(73deg, #7dc4ff, #6700ff);
    color: white;
    font-size: 14px;

    :hover {
        background-image: linear-gradient(259deg, #7dc4ff, #7dc4ff);
    }

    :active {
        background-color: #6700ff;
        background-image: none;
    }
`;

class DefaultBtn extends React.Component{
    static defaultProps = {
        text: "Узнать что подарить",
    }

    render() {
        return(
            <DefaultButton>
                {this.props.text}
            </DefaultButton>
        )
    }
}

export default DefaultBtn;
