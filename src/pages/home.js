import React, { useEffect, useState } from 'react'
import CardText from '../components/CardText'
import styled from 'styled-components';
import Menu from '../components/Menu';
import CardPosts from '../components/CardPosts';
import Loading from '../components/Loading';
import Head from 'next/head'

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
  @media(max-width: 610px) {
      padding-right: 25px;
  }
  @media(max-width: 400px) {
    padding-right: 0;
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

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    })

    return (
        <>
            <Head>
                <title>Home - AllTag</title>
            </Head>
            <Container>
                <Content>
                    <CardText />
                    <CardPosts bg={user.purple} loading={loading} />
                </Content>
            </Container>
            <Space />
            <Menu />
        </>
    )
}

export default Home
