import React from 'react';
import styled from 'styled-components';

const Loader = styled.div`
border: 3px solid #363636;
border-radius: 50%;
border-top: 3px solid #4A005C;
width: 40px;
height: 40px;
-webkit-animation: spin 2s linear infinite; /* Safari */
animation: spin 1s linear infinite;

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;


const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Loading = () => {
    return (
        <Content >
            <Loader  />
        </Content>
    )
}

export default Loading
