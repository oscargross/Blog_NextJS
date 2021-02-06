import { GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { client } from '../../utils/prismic-configuration';
import { Container, Post, Text } from '../../styles/comparacoes/styles';
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse';

interface PropTypes {
  posts: ApiSearchResponse;
  // home: Document;
}

export default function Blog({ posts }: PropTypes): JSX.Element {
  return (
    <>
      <Head>
        <title>Blog | Compare Estética{JSON.stringify(process.env.PRISMIC_URL)}</title>
        <meta name="og:title" property="og:title" content="Blog" />
        <meta
          name="description"
          content="Blog sobre conteúdos de equipamentos de Estética"
        />
      </Head>
      <Container>

        {posts.results.map((post) => (
          <Link href="/modelos/[uid]" as={`/modelos/${post.uid}`} key={post.uid}>
            <a>
              <Post>
                <img
                  src={RichText.asText(post.data.img)}
                  alt={RichText.asText(post.data.title)}
                />
                <Text>
                  {RichText.render(post.data.title)}
                  <br />
                  {RichText.render(post.data.description)}
                  <br />
                  <span>{post.data.formattedDate}</span>
                </Text>
              </Post>
            </a>
          </Link>
        ))}
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const mapNumberToMonth = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'blog_modelos'),
    { orderings: '[my.post.date desc]' }
  );

  posts.results.map((post) => {
    const dateArray = post.data.date.split('-');
    post.data.formattedDate = `${dateArray[2]} de ${
      mapNumberToMonth[dateArray[1] - 1]
    } de ${dateArray[0]}`;
  });

  return {
    props: {
      posts,
      // home,
    },
  };
};
