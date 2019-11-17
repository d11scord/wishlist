import React, {Fragment} from 'react';
import styled from "styled-components";
import api from './../../api.js';
import Suggestions from "./Suggestions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${state => state.isEmpty ? "5em" : "2em"};
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

const UserInput = styled.span`
    color: red;
`;

const Completion = styled.span`
    color: b2b2b2;
`;

class Input extends React.Component{
    state = {
        query: '',
        inputText: '',
        completion: '',
        results: [],
        isEmpty: true,
    };

    getInfo = () => {
        api(`/api/products/suggest?query=${this.state.query}`)
            .then(data => {
                console.log(data.response.suggestions.input.value);
                this.setState({
                    inputText: data.response.suggestions.input.value,
                    completion: data.response.suggestions.completions[0].completion,
                    results: data.response.suggestions.completions.map((sugg) => sugg.value),
                    isEmpty: false,
                })
            })
    };

    handleInputChange = () => {
        this.setState({
            query: this.search.value,
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                this.getInfo()
            } else if (!this.state.query) {
            }
        })
    };

    render() {
        const userInput = <Fragment><UserInput>kok</UserInput><Completion>jk</Completion></Fragment>;
        let temp;
        if (!this.state.isEmpty){
            temp = <Suggestions results={this.state.results} />
        }
        return (
            <Container isEmpty={this.state.isEmpty}>
                {userInput}
                <InputField
                    placeholder={this.props.searchPlaceholder}
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
            </Container>
        )
    }
}

export default Input;
