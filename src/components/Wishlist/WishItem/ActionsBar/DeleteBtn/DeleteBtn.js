import React from 'react';
import styled from "styled-components";
import Button from "../../../../../styles/styles";

const DeleteButton = styled(Button)`
    background-image: linear-gradient(79deg, #e0fffd, #e7e1ff);
    display: inline-block;
    width: 100%;
    height: 100%;

    :hover {
        background-color: #e0fffd;
        background-image: none;
    }

    :active {
        background-color: #e7e1ff;
        background-image: none;
    }
`;

class DeleteBtn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            delete: 'Удалить',
            ok: 'Понятно',
        };
    }

    render() {
        return(
            <DeleteButton>
                {this.state.delete}
            </DeleteButton>
        )
    }
}

export default DeleteBtn;
