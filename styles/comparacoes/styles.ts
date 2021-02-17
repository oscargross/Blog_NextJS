import styled from 'styled-components';

export const Container = styled.main`
  margin: 100px auto 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  animation: loadAnimation;
  animation-duration: 500ms;

  a:first-of-type article {
    border: solid 1px #000000;
  }

  @media (max-width: 800px) {
    margin: 30px auto 0 auto;
  }

`;

export const Post = styled.article`
 
  padding: 20px 120px;
  border-radius: 6px;
  background: linear-gradient(67deg, rgb(226, 228, 230), rgb(255, 255, 255));
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  box-shadow: 8px 3px 3px black;

  img {
    max-width: 320px;
    max-height: 180px;
    border-radius: 6px;
    display: inline;
    margin-right: 15px;
  }
  @media (max-width: 1350px) {
    padding: 15px 65px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 10px 10px 0 10px;

    img {
         max-width: 320px;
    max-height: 180px;
      margin: 0 auto;
    }
  }
`;

export const Text = styled.section`
  h1 {
    color: black;
    font-weight: 700;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 30px;
  }

  p {
    color: black;
    font-size: 18px;
  }

  span {
    font-size: 16px;
    color: #d60000;
  }

  @media (max-width: 800px) {
    margin: 10px 0 10px 0;

    h1 {
      text-align: center;
      font-size: 28px;
    }

    p {
      font-size: 16px;
    }
  }
`;
