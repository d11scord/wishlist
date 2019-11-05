import React from 'react';
import styled from "styled-components";
import api from './../../api.js';

import { Autocomplete } from 'react-md';
import Suggestions from "./Suggestions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3em;
`;

const InputContainer = styled.form`
  width: 500px;
`;

const InputField = styled.input`
  width: 500px;
  height: 50px;
  border-radius: 25px;
  border: solid 1px #dddddd;
  background-color: #ffffff;
  padding: 0 12pt;
  color: #595959;
  font-size: 1.1em;
  position: absolute;

  :focus{
    outline: none;
`;

class Input extends React.Component{
    state = {
        query: '',
        results: [],
        isEmpty: true,
    };

    getInfo = () => {
        api(`/api/products/suggest?query=${this.state.query}`)
            .then(data => {
                console.log(data);
                this.setState({
                    results: data.response.suggestions.completions.map((sugg) => sugg.value),
                    isEmpty: false,
                })
            })
    };

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo()
                }
            } else if (!this.state.query) {
            }
        })
    };

    render() {
        let temp;
        if (this.state.isEmpty){
            temp = ''
        } else {
            temp = <Suggestions results={this.state.results} />
        }
        return (
            <Container>
                <InputContainer>
                    <InputField
                        placeholder={this.props.searchPlaceholder}
                        ref={input => this.search = input}
                        onChange={this.handleInputChange}
                    />
                    {temp}
                </InputContainer>
            </Container>
        )
    }
}

export default Input;
