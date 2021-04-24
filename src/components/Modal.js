import React from 'react'
import styled from 'styled-components';

const Content = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 0px 60px;
  margin-bottom: 2em;
`;


const ButtonClose = styled.button`
  background-color: transparent;
  outline: none;
  width: 32px;
  height: 32px;
  border: none;
  right: calc(-100% + 50px);
  cursor: pointer;
  top: 16px;
  display: flex;
  position: relative;
  align-items: center;
  &:before,
  &:after {
    content: ' ';
    position: absolute;
    width: 2.5px;
    height: 24px;
    background-color: #fff;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;


const Container = styled.div`
  background-color: #141414;
  max-width: 700px;
  color: #cbcbcb;
  border-radius: 16px;
`;


const StyledModal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Modal = ({ id="modal", onClose= () => {}, children }) => {

  const handleOutsideClick = (e) => {
    if(e.target.id === id) onClose();
  }

  return (
    <>
      <StyledModal id={id} onClick={handleOutsideClick}>
        <Container>
          <ButtonClose onClick={onClose} />
          <Content>{children}</Content>
        </Container>
      </StyledModal>
    </>
  )
}

export default Modal
