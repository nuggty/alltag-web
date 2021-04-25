import '../styles/globals.css'
import styled from 'styled-components';
import '../fw/fontawesome-pro-5.12.0-web/css/all.min.css';
import '../fw/animate.css/animate.css';

const Body = styled.body`
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif!important;
  background-color: #141414;
  color: #cbcbcb;
`;

const StyledLogo = styled.div`
  justify-content: center;
  display: flex;
`

const Logo = styled.span`
  font-size: 30px;
  color: #4A005C;
  font-weight: 900;
  position: relative;
  justify-content: center;
`;

function MyApp({ Component, pageProps }) {
  return (
    <Body>
      <StyledLogo>
        <Logo>AllTag</Logo>
      </StyledLogo>
      <Component {...pageProps} />
    </Body>
  )
}

export default MyApp
