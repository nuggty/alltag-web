import React from 'react'
import styled from 'styled-components';

const Content = styled.div``;


const ButtonClose = styled.button``;


const Container = styled.div`

`;


const StyledModal = styled.div`

`

const Modal = ({ children }) => {
  return (
    <>
      <StyledModal>
        <Container>
          <ButtonClose>Close</ButtonClose>
          <Content>{children}</Content>
        </Container>
      </StyledModal>
    </>
  )
}

export default Modal
