import '../styles/globals.css'
import styled from 'styled-components';

const Body = styled.body`
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif!important;
  background-color: #141414;
  color: #cbcbcb;
`;

function MyApp({ Component, pageProps }) {
  return (
    <Body>
      <Component {...pageProps} />
    </Body>
  )
}

export default MyApp
