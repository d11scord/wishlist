import styled from "styled-components";

const Button = styled.button`
    padding: 0.8rem;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 0 3px 9px 0 rgba(0, 0, 0, 0.15);
    word-break: keep-all;
    
    :focus {
        outline: none;
    }
`;



export default Button;