import React from 'react';
import Input from './../../components/Input/Input';
import './Main.css'
import Header from "../../components/Header";
import Pending from "../../components/Pending";


class Main extends React.Component{
    render(){
        return(
            <div className={"Main"}>
                <Header />
                <div className="content-container">
                    <div className="label">
                        <span>Wishlist</span>
                        <span style={{fontSize: 1 + 'em'}} role="img" aria-label="smiling face with heart-eyes">&#128525;</span>
                    </div>
                    <div>
                        <Input />
                    </div>
                    {/*<Pending/>*/}
                </div>
            </div>
        )
    }
}

export default Main;
