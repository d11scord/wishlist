import React, {Fragment} from 'react';
import styled from "styled-components";
import './input.css'
import api from "../../api";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${state => state.showSuggestions ? "2em" : "5em"};
`;

const InputField = styled.input`
  width: 500px;
  height: 50px;
  border-radius: 25px;
  border: solid 1px #dddddd;
  background-color: #ffffff;
  padding: 0 12pt;
  font-size: 1.1em;
  position: absolute;

  :focus{
    outline: none;
  }
`;

const SuggestionsContainer = styled.ul`
  padding: 3em 0em 0.5em;
  border-radius: 25px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  width: 500px;
`;

const SuggestionItem = styled.li`
  padding: 0.5em 1em;
  font-size: 14px;
  list-style-type: none;
`;

const Suggestion = styled.span`
  color: #000000;
`;

const Completion = styled.span`
  color: #b2b2b2;
`;

class Input extends React.Component{
    static defaultProps = {
        suggestions: []
    };

    constructor(props) {
        super(props);

        this.state = {
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: "",
            products: [],
        };
    }

    onChange = () => {
        const { suggestions } = this.props;

        this.props.onUserInput(
            this.inputText.value,
        );

        this.setState({
            activeSuggestion: 0,
            showSuggestions: true,
            userInput: this.inputText.value,
            filteredSuggestions: suggestions,
        });
    };

    onClick = e => {
        this.props.onUserInput(
            e.currentTarget.innerText,
            this.getProducts(this.inputText.value)
        );

        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText,
        });
    };

    onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions } = this.state;

        // User pressed the enter key
        if (e.keyCode === 13) {

            this.props.onUserInput(
                filteredSuggestions[activeSuggestion],
            );

            this.setState({
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: filteredSuggestions[activeSuggestion]
            });
        }
        // User pressed the up arrow
        else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }

            this.setState({ activeSuggestion: activeSuggestion - 1 });
        }
        // User pressed the down arrow
        else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }

            this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
    };

    render() {
        const {
            onClick,
            onKeyDown,
            state: {
                activeSuggestion,
                filteredSuggestions,
                showSuggestions,
                userInput
            }
        } = this;

        let suggestionsListComponent;

        if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <SuggestionsContainer>
                        {this.props.suggestions.map((sugg, index) => {
                            console.log(userInput);
                            let className, suggestion, completion;

                            if (index === activeSuggestion) {
                                className = "suggestion-active";
                            }

                            suggestion = <Suggestion>{sugg.substr(0, userInput.length)}</Suggestion>;
                            completion =  <Completion>{sugg.substr(userInput.length)}</Completion>;

                            return (
                                <SuggestionItem className={className} key={index} onClick={onClick}>
                                    {suggestion}{completion}
                                </SuggestionItem>
                            );
                        })}
                    </SuggestionsContainer>
                );
            }
        }

        return (
            <Fragment>
                <Container>
                    <InputField
                        onKeyDown={ onKeyDown }
                        value={ this.props.query }
                        ref={ (input) => this.inputText = input }
                        onChange={ this.onChange }
                    />
                    {suggestionsListComponent}
                </Container>
            </Fragment>
        )
    }
}

export default Input;
