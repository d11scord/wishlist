import React from 'react';
import styled from "styled-components";
import DefaultBtn from "./DefaultBtn";
import DeleteBtn from "./DeleteBtn";
import GiftBtn from "./GiftBtn";

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.5em;
`;

class ActionsBar extends React.Component{
    render() {
        if (this.props.isMine) {
            return(
                <ActionBar>
                    <DeleteBtn text={this.props.text}/><GiftBtn/>
                </ActionBar>
            );
        } else {
            return(
                <ActionBar>
                    <DefaultBtn text={this.props.text}/>
                </ActionBar>
            )
        }
    }
}

export default ActionsBar;
