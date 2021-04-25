import React, { useEffect, useState } from 'react'
import CardText from '../components/CardText'
import styled from 'styled-components';
import Menu from '../components/Menu';
import CardPost from '../components/CardPost';
import Loading from '../components/Loading';

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

const Space = styled.div`
margin-top:70px;
`

const Home = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        setTimeout(() => {
            setLoading(false)
        }, 5000);
    })

    return (
        <>
            <Container>
                <Content>
                    <CardText />
                    <CardPost bg={user.purple} loading={loading}/>
                </Content>
            </Container>
            <Space />
            <Menu />
        </>
    )
}

export default Home
