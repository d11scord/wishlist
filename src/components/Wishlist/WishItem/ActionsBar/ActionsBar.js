import React from 'react';
import DefaultBtn from "./DefaultBtn";
// import DeleteBtn from "./DeleteBtn";
// import GiftBtn from "./GiftBtn";
import './ActionsBar.css'

class ActionsBar extends React.Component{
    render() {
        return(
            <div className="actionBar">
                <DefaultBtn/>
            </div>
        )
    }
}

export default ActionsBar;
