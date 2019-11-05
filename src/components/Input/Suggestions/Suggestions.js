import React from 'react'
import styled from "styled-components";

const SuggestionsContainer = styled.ul`
  padding: 3em 1em;
  height: 10em;
  border-radius: 25px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;

`;

const Li = styled.li`
  margin: 0.3em 0;
  font-size: 14px;
  list-style-type: none;
`;

const Suggestions = (props) => {
    const options = props.results.map((r, index) => (
        <Li key={index}>
            {r}
        </Li>
    ));
    return (
            <SuggestionsContainer>
                {options}
            </SuggestionsContainer>
    )
};

export default Suggestions;