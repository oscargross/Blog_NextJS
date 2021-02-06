import Head from 'next/head';
import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

import {
  Container,
  Hello,
  Left,
  SocialMedia,
  RightText,
} from '../styles/home/styles';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home | Compare Estetica</title>
        <meta name="og:title" property="og:title" content="Compare Estetica" />
        <meta
          name="description"
          content="Compare Estetica"
        />
      </Head>
      <Container>
        <Hello>
          <Left>
            <img
              src="/assets/foto_perfil.png"
              alt="Foto de perfil Compare Estetica"
            />
            <SocialMedia>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={36} />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={36} />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={36} />
              </a>
            </SocialMedia>
          </Left>
          <RightText>
            <h1>A Verdade sobre os equipamentos</h1>
            <h2>
              Nem sempre a melhor escolha é o equipamento mais caro ou mais famoso!!
            </h2>
            <p>
            Nos acompanhe para saber tudo sobre os equipamentos de estética que estão no mercado e 
              qual a melhor escolha para ter em sua clínica.
            </p>
          </RightText>
        </Hello>
      </Container>
    </>
  );
}
