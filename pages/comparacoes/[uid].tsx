import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { Document } from 'prismic-javascript/types/documents';
import { MdArrowBack } from 'react-icons/md';
import Button from '../../components/Button';
import { Container } from '../../styles/comparacoes/uid/styles';
import { client } from '../../utils/prismic-configuration';

interface PathProps {
  params: {
    uid: string;
  };
}

interface PropTypes {
  post: Document;
}

export default function BlogPost({ post }: PropTypes): JSX.Element {
  return (
    <>
      <Head>
        <title>{RichText.asText(post.data.title)} | Blog | Compare Estética</title>
        <meta
          name="og:title"
          property="og:title"
          content={RichText.asText(post.data.title)}
        />
        <meta
          name="description"
          content={RichText.asText(post.data.description)}
        />
      </Head>
      <Container>
        {RichText.render(post.data.title)}
        <span>{post.data.formattedDate}</span>
        {post?.data?.img && (
          <img
            src={RichText.asText(post.data.img)}
            alt={RichText.asText(post.data.title)}
          />

        )}
        {post.data.body.map((section) => {

          return <>

            <h2 key={section.primary}>
              {RichText.asText(section.primary.titlesection)}
            </h2>

            <p>
              {RichText.asText(section.primary.textsection)}
            </p>
            <p>
              {RichText.asText(section.primary.text2section)}
            </p>

            {section?.primary?.imgprismic?.url && (
              <img
                src={section.primary.imgprismic.url}
                alt={RichText.asText(section.primary.titlesection)}
              />
            )}

            <img
              src={RichText.asText(section.primary.imgsection)}
              alt={RichText.asText(section.primary.titlesection)}
            />
          </>
        }
        )}

        <Link href="/comparacoes">
          <a>
            <Button>
              <MdArrowBack size={25} color="#fff" />
              Voltar
            </Button>
          </a>
        </Link>
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'blog_comparacoes'),
    { orderings: '[my.post.date desc]' }
  );

  const allBlogPosts = [];

  posts.results.map((post) => {
    allBlogPosts.push({ params: { uid: post.uid } });
  });

  return {
    paths: allBlogPosts,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: PathProps) => {
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

  const post = await client.getByUID('blog_comparacoes', params.uid, {
    lang: 'pt-br',
  });

  const dateArray = post.data.date.split('-');
  post.data.formattedDate = `${dateArray[2]} de ${mapNumberToMonth[dateArray[1] - 1]
    } de ${dateArray[0]}`;

  return {
    props: {
      post,
    },
  };
};
