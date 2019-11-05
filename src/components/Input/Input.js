import React from 'react';
import styled from "styled-components";
import api from './../../api.js';

import { Autocomplete } from 'react-md';

const Container = styled.div`
  padding-bottom: 3em;
`;

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

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
        }
    }

    render() {
        return (
        <Container>
          <Autocomplete
            placeholder="Javascript"
            data={this.props.suggestions}
            // filter={Autocomplete.caseInsensitiveFilter}
          />
        </Container>
        );
    }


}

export default Input;
