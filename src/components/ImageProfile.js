import React from 'react';
import styled from 'styled-components';

const user = { 
    username:"nuggty",
    photo:"https://arquivos.icartao.me/8b149b4e6a7b833b5920a4f89543fe88.jpg"
}

const ImageCircle = styled.div`
  border-radius: 50%;
  width: ${props => props.width};
  height: ${props => props.height};
  overflow: hidden;
  position: relative;
  display: flex;
  transition: linear 0.25s;
  border: #ffffff00 solid 7px;
  cursor: pointer;
  &:hover {
    border: #4A005C solid 7px;
    transform: scale(1.04167);
  }
    img {
        object-fit: cover;
        bottom: 0;
        width: 100%;
    }
`;


const ImageProfile = (props) => {
    return (
        <>
            <ImageCircle width={props.width} height={props.height}>
                <a href="#"><img alt={user.username} src={user.photo} /></a>
            </ImageCircle>
        </>
    )
}

export default ImageProfile
