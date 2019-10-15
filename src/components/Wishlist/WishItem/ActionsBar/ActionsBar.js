import React from 'react';
import DefaultBtn from "./DefaultBtn";
import DeleteBtn from "./DeleteBtn";
import GiftBtn from "./GiftBtn";
import './ActionsBar.css'

class ActionsBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    };

    render() {
        return(
            <div className="actionsBar">
                <DeleteBtn/>
                <GiftBtn/>
            </div>
        )
    }
}

export default ActionsBar;

