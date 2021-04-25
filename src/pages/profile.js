import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items:center;
`;

const user = {
  nickname: "nuggty",
  username: "nuggty",
}

const Profile = () => {
  return (
    <>
      <Head>
        <title>{user.nickname} - AllTag</title>
      </Head>
    </>
  )
}

export default Profile
