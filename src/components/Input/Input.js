import React from 'react';
import './Input.css'

class Input extends React.Component{
    render(){
        return(
            <input className={"input"} placeholder={"Введите название товара"}/>
        )
    }
}

export default Input
