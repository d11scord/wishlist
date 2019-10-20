import React from 'react';
import styled from "styled-components";
import DefaultBtn from "./DefaultBtn";
import DeleteBtn from "./DeleteBtn";
import GiftBtn from "./GiftBtn";
import './ActionsBar.css'

const ActionBar = styled.div`
    display: inline-flex;
    width: 100%;
`;

class ActionsBar extends React.Component{
    render() {
        return(
            <ActionBar>
                <DefaultBtn/>
                {/*<DeleteBtn/><GiftBtn/>*/}
            </ActionBar>
        )
    }
}

export default ActionsBar;
