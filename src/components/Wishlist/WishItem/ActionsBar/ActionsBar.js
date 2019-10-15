import React from 'react';
import DefaultBtn from "./DefaultBtn";
import DeleteBtn from "./DeleteBtn";
import GiftBtn from "./GiftBtn";

class ActionsBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    };

    render() {
        return(
            <div>
                <DeleteBtn/>
                <GiftBtn/>
            </div>
        )
    }
}

export default ActionsBar;

