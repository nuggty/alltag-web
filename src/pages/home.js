import React from 'react'
import CardText from '../components/CardText'
import styled from 'styled-components';
import Menu from '../components/Menu';

const Content = styled.div`
  max-width: 100%;
  @media(max-width: 600px) {
      padding-right: 25px;
  }
`;


const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1em;
    z-index: 0;
    @media(max-width: 900px) {
        margin-top: 1em;
    }
    
`;

const Home = () => {
    return (
        <>
            <Container>
                <Content >
                    <CardText />
                </Content>
            </Container>
            <Menu />
        </>
    )
}

export default Home
