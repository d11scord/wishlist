import React from 'react';
import styled from "styled-components";
import Button from "../../../../../styles/styles";

const DefaultButton = styled(Button)`
    background-image: linear-gradient(73deg, #7dc4ff, #6700ff);
    color: white;
    font-size: 14px;
    width: 100%;

    :hover {
        background-image: linear-gradient(259deg, #7dc4ff, #7dc4ff);
    }

    :active {
        background-color: #6700ff;
        background-image: none;
    }
`;

class DefaultBtn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            add: 'Добавить в избранное'
        };
    }

    render() {
        return(
            <DefaultButton>
                {this.state.add}
            </DefaultButton>
        )
    }
}

export default DefaultBtn;
