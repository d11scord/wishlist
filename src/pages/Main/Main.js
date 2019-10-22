import React from 'react';
import styled from "styled-components";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Wishlist from "../../components/Wishlist";

const ContentContainer = styled.div`
  text-align: center;
`;

const Label = styled.div`
  font-family: "Candara Light", monospace;
  margin-top: 48pt;
  margin-bottom: 24pt;
  font-size: 32pt;
`;

const Span = styled.span`
  font-size: 1em;
`;

// const EmojiSpan = styled(Span)`
//   role="img";
//   aria-label="smiling face with heart-eyes";
// `;

class Main extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <ContentContainer>
                    <Label>
                        <Span>Вишлист</Span>
                        <span className="ec ec-heart-eyes"></span>
                    </Label>
                    <div>
                        <Input searchPlaceholder={"Введите название товара"}/>
                    </div>
                    <Wishlist products={this.props.products}/>
                </ContentContainer>
            </div>
        )
    }
}

export default Main;