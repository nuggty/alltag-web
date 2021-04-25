import React from 'react'
import styled from "styled-components";
import ImageProfile from './ImageProfile';
import Link from 'next/link'

const ButtonHome = styled.a`
transition: 0.25s;
    &:hover {
        color: #4A005C;
        transition: 0.25s;
    }
`;


const ProfileButton = styled.div`
  position: absolute;
  right: 75px;
`;


const IconCog = styled.div`
  display: block;
  text-align: right;
  position: absolute;
  right: 15px;
  transition: 0.25s;
    &:hover {
        color: #4A005C;
        transition: 0.25s;
    }
`;


const Content = styled.div`
  width: 580px;
  position: relative;
  height: 60px;
  border: 1px solid #4A005C;
  border-bottom-color: transparent;
  background-color: #1D1D1D;
  border-radius: 16px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  font-size: 30px;
  padding-right: 15px;
  padding-left: 15px;
`;

const StyledBottom = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

const FixedBottom = styled.div`
position:fixed;
bottom:-1px;
width:100%;
justify-content: center;
display: flex;
margin-top: 70px;
`;

const Menu = () => {
    return (
        <>
            <FixedBottom>
                <Content>
                    <StyledBottom>
                        <ButtonHome href="/"><i className="fas fa-house" /></ButtonHome>
                        <ProfileButton>
                            <ImageProfile height="50px" width="50px" />
                        </ProfileButton>
                        <IconCog>
                            <Link href="#"><a><i className="fas fa-cog" /></a></Link>
                        </IconCog>
                    </StyledBottom>
                </Content>
            </FixedBottom>
        </>
    )
}

export default Menu
