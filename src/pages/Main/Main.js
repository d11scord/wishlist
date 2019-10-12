import React from 'react';
import Input from './../../components/Input/Input';
import './Main.css'

class Main extends React.Component{
    render(){
        return(
            <div className={"Main"}>
                <Input />
                <p>Вишлист
                    <span style={{fontSize: 1 + 'em'}} role={"img"}>&#128525;</span>
                </p>
            </div>
        )
    }
}

export default Main;
