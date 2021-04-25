import React from 'react'
import CardText from '../components/CardText'
import styled from 'styled-components';
import Menu from '../components/Menu';
import CardPost from '../components/CardPost';

const user = {
    purple: "#4A005C",
    blue: "#3700b3",
    yellow: "#ffad1f",
    pink: "#e14594",
    gray: "#525252",
    green: "#616f39",
}

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
                <Content>
                    <CardText />
                    <CardPost bg={user.purple} />
                    <CardPost bg={user.blue} />
                    <CardPost bg={user.yellow} />
                    <CardPost bg={user.pink} />
                    <CardPost bg={user.gray} />
                    <CardPost bg={user.green} />
                    
                </Content>
            </Container>
            <Menu />
        </>
    )
}

export default Home
