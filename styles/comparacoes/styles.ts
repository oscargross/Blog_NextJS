import styled from 'styled-components';

export const Container = styled.main`
  margin: 100px auto 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  animation: loadAnimation;
  animation-duration: 500ms;

  a:first-of-type article {
    border: solid 1px #9C0000;
  }

  @media (max-width: 800px) {
    margin: 30px auto 0 auto;
  }

`;

export const Post = styled.article`
 
  padding: 20px 120px;
  border-radius: 6px;
  background: linear-gradient(90deg, rgba(42,0,0,1) 19%, rgba(94,6,6,1) 67%, rgba(121,9,9,1) 87%);
    display: flex;
  margin-bottom: 20px;
  align-items: center;

  img {
    width: 320px;
    height: 180px;
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
      width: 100%;
      height: 100%;
      margin: 0 auto;
    }
  }
`;

export const Text = styled.section`
  h1 {
    color: #fff;
    font-weight: 700;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 30px;
  }

  p {
    color: #fff;
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
