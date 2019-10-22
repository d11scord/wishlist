import React from 'react';
import styled from "styled-components";

const InputContainer = styled.input`
  width: 500px;
  height: 50px;
  border-radius: 25px;
  border: solid 1px #dddddd;
  background-color: #ffffff;
  padding: 0 12pt;
  color: #595959;
  font-size: 1.1em;

  :focus{
    outline: none;
`;
//
class Input extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value:''};
        this.handleChange = this.handleChange.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }

    keyPress(e){
        if(e.keyCode === 13){
            console.log('value', e.target.value);
        }
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render(){
        return(
            <div>
                <InputContainer
                    placeholder={this.props.searchPlaceholder}
                    onChange={this.handleChange}
                    onKeyDown={this.keyPress}
                    value={this.state.value}
                />
                <p>{this.state.value}</p>
            </div>
        )
    }
}

export default Input;