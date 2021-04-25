import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const LineSubtitle = styled.hr`
  color: #2e2e2e;
  border: 1px solid rgb(46, 46, 46);
  margin-bottom: 1.5em;
`;


const Title = styled.h2`
    display: block;
    margin-left: 20px;
`;


const Back = styled.a`
    font-size: 30px;
    color: #4A005C;
    cursor: pointer;
    padding: 0px 10px;
    transition: 0.25s;
    
    &:hover {
        background: rgba(74, 0, 92, .5);
        border-radius: 50%;
        transition: 0.25s;
    }
`;


const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  margin-left: 10px;
  font-size: 18px;
  font-weight: 600;
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

const Card = styled.div`
  width: 580px;
  background-color: #1D1D1D;
  border-radius: 16px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 15px;

  @media(max-width: 900px) {
  max-width:100%;
  }

  @media(max-width: 400px) {
    margin-left: 0;
    margin-right: 0;
}
`;

const CardBody = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${props => props.bg};
  border-radius: 16px;
  padding-right: 15px;
  padding-left: 15px;
  font-size: 18px;
  background-color: #1D1D1D;
  transition: 0.25s;
`;

const Content = styled.div`
  max-width: 100%;
  @media(max-width: 610px) {
      padding-right: 25px;
  }
  @media(max-width: 400px) {
    padding-right: 0;
}
`;

const Input = styled.input`
    background-color: #141414;
    border: none;
    width: 360px;
    height: 50px;
    color: #CBCBCB;
    padding-left: 1em;
    font-size: 16px;
    border-radius: 16px;
    display: block;
    margin-bottom: 1em;
    border: 2px solid #4A005C;
    transition: 0.25s;

    @media(max-height: 400px) {
        margin-bottom: 5px;
    }

    &:focus {
        outline: none;
        background-color: #2b2b2b;
        border: 2px solid #4A005C;
        transition: 0.25s;
    }
`;

const Row = styled.div.attrs((props) => ({
    margin: props.margin || "5px",
}))`
  display: flex;
  flex-wrap: wrap;
  margin: ${(props) => props.margin}

`;

const Column = styled.div`
  flex: 0 0 ${props => props.flex};
  max-width: ${props => props.maxWidth};
  display: flex;
  align-items: center;
}
`;

const Settings = (props) => {
    return (
        <>
        <Head>
            <title>Settings - AllTag</title>
        </Head>
            <Container>
                <Content>
                    <Card>
                        <CardBody bg="#4A005C">
                            <Row>
                                <Column maxWidth="20px" flex="20%">
                                    <Link href="/home"><Back><i class="far fa-chevron-left" /></Back></Link>
                                </Column>
                                <Column>
                                    <Title>Settings</Title>
                                </Column>
                            </Row>

                            <hr />

                            <h3>Account Information</h3>

                            <LineSubtitle  />

                            <Label for="username">Username</Label>
                            <Input name="username" />

                            <Label for="username">Email</Label>
                            <Input name="username" />

                            <Label for="username">Password</Label>
                            <Input name="username" />

                            <Label for="username">Country</Label>
                            <Input name="username" />

                        </CardBody>
                    </Card>
                </Content>
            </Container>
        </>
    )
}

export default Settings
