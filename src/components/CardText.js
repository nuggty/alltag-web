import React, { useState } from 'react';
import styled from 'styled-components';
import ImageProfile from './ImageProfile';
import Loading from './Loading';


const ButtonFeeling = styled.span`
font-weight: 600;
    cursor: pointer;
    transition: 0.25s;
    &:hover {
        color: #4A005C;
        transition: 0.25s;
    }
    
    .link {
        font-size: 20px;
    }
    `;


const TextArea = styled.textarea`
    width: 100%;
  margin-top: 10px;
  background-color: transparent;
  font-family: 'Lato', sans-serif;
  color: #CBCBCB;
  border: transparent;
  font-size: 16px;
  resize: none;
  outline: none;
`;

const Button = styled.button`
padding: 5px 15px;
  background-color: #363636;
  color: #cbcbcb;
  margin-top: -6px;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.25s;
  display: flex;
  &:hover {
      background-color: #4A005C;
      transition: 0.25s;
    }
`;

const Column = styled.div`
  flex: 0 0 ${props => props.flex};
  max-width: ${props => props.maxWidth};
`;


const Row = styled.div.attrs((props) => ({
    margin: props.margin || "5px",
}))`
  display: flex;
  flex-wrap: wrap;
  margin: ${(props) => props.margin}
`;

const StyledButton = styled.div`
display:block;
float: right;
text-align: -moz-right;
`;


const Card = styled.div`
width: 580px;
  height: 110px;
  background-color: #1D1D1D;
  border-radius: 16px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 2em;
  @media(max-width: 900px) {
      max-width:100%;
    }

    @media(max-width: 400px) {
        margin-left: 0;
        margin-right: 0;
    }
    `;


const CardText = () => {

    return (
        <Card>
            <Row>
                <Column maxWidth="70px" flex="15%">
                    <ImageProfile width="67px" height="67px" />
                </Column>
                <Column maxWidth="80%" flex="80%">
                    <TextArea placeholder="What's happening today?" />
                </Column>
            </Row>
            <Row margin="0 13px">
                <Column maxWidth="15%" flex="15%" />
                <Column maxWidth="50%" flex="50%">
                    <ButtonFeeling>
                        <i style={{
                            marginRight: "1em"
                        }} className="link fad fa-image" />
                    </ButtonFeeling>
                    <ButtonFeeling><i class="fad fa-smile-plus" /> Feeling</ButtonFeeling>
                </Column>
                <Column maxWidth="35%" flex="35%">
                    <StyledButton>
                        <Button type="button">Send</Button>
                    </StyledButton>
                </Column>
            </Row>
        </Card>
    )
}

export default CardText
