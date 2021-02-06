import styled from 'styled-components';

export const Container = styled.main`
  width: 62vw;
  margin: 100px auto 1000px auto;
  animation: loadAnimation;
  animation-duration: 500ms;
  
  h1,
  h2 {
    text-align: center;

    font-weight: 700;
    font-family: 'Source Sans Pro', sans-serif;
    margin-top: 20px;
    margin-bottom: 5px;
  }
  h1 {
    text-align: center;
    font-size: 32px;
  }

  h2 {
    font-size: 30px;
  }

  p {
    text-align: justify;

    font-size: 20px;
    margin-bottom: 5px;
  }

  span {
    text-align: center;
    display: block;
    font-size: 16px;
    color: #9C0000;
    margin-bottom: 40px;
  }

  img {
    border-radius: 4px;
    margin: 40px auto 40px auto;
    display: block;
    max-width: 80%;
  }

  button {
    margin: 40px auto 40px auto;
    text-align: center;
  }

  @media (max-width: 950px) {
    margin: 30px auto 30px auto;
    width: 60vw;

    h1 {
      font-size: 28px;
    }

    h2 {
      text-align: center;
      font-size: 26px;
    }

    p {
      font-size: 16px;
    }
  }
`;

