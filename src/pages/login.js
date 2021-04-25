import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal';

const StyledRegister = styled.div`
  position: relative;
  text-align: center;
`;


const ButtonSignUp = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-top: 2em;
  display:block;
  color: #CBCBCB;
  > .link {
    color: #4A005C;
    transition: 0.25s;
    &:hover {
        color: #6f008a;
        transition: 0.25s;
        cursor: pointer;
    }
    }
`;

const Title = styled.span`
  font-size: 30px;
  color: #4A005C;
  font-weight: 900;
  margin-bottom: 1em;
  display: block;
`;

const Button = styled.input`
  padding: 20px 60px;
  background-color: #1D1D1D;
  color: #cbcbcb;
  font-size: 18px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: 0.25s;
  margin-top: 1em;
  &:hover {
      background-color: #4A005C;
      transition: 0.25s;
  }
`;

const StyledLogin = styled.div`
  text-align: center;
  position: relative;
`;

const Form = styled.form`
    min-height: 10rem;
`;

const Input = styled.input`
    background-color: #1D1D1D;
    border: none;
    width: 360px;
    height: 50px;
    color: #CBCBCB;
    padding-left: 1em;
    font-size: 16px;
    border-radius: 16px;
    display: block;
    margin-bottom: 1em;
    border: 2px solid #ffffff00;
    transition: 0.25s;ff00;
    &:focus {
        outline: none;
        background-color: #2b2b2b;
        border: 2px solid #4A005C;
        transition: 0.25s;
    }
`;

const Main = styled.main`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items:center;
`;

const Login = () => {

    const [isModalVisible, setIsModalVisible] = useState(false)

    return (
        <>
            <Main>
                <Form>
                    <StyledLogin>
                        <Title>Log In</Title>
                        <Input type="text" placeholder="Username" name="username" />

                        <Input type="password" placeholder="Password" />

                        <Button type="button" value="Log in"></Button>

                        <ButtonSignUp >Don't have an account? <a className="link" onClick={() => setIsModalVisible(true)}>Sign Up</a></ButtonSignUp>
                    </StyledLogin>
                </Form>
            </Main>
            {isModalVisible ? (
                <Modal onClose={() => setIsModalVisible(false)}>
                    <StyledRegister>
                        <Title>Register</Title>

                        <Input type="text" placeholder="Username" name="username" />

                        <Input type="email" placeholder="Email" name="username" />

                        <Input type="password" placeholder="Password" name="username" />

                        <Input type="password" placeholder="Repeat password" name="username" />

                        <Button type="button" value="Sign Up"></Button>
                    </StyledRegister>
                </Modal>
            ) : null}
        </>
    )
}

export default Login
