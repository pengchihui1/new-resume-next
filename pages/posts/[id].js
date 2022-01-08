import Head from 'next/head';
import { getFileIds, getFileData } from '../../lib/posts-md';
// post directory
const postsDir = 'posts';

// dynamic route IDs
export async function getStaticPaths() {
  const paths = (await getFileIds(postsDir)).map((id) => ({ params: { id } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data= await getFileData(postsDir, params.id)
  return {
    props: {
      postData: await getFileData(postsDir, params.id),
    },
  };
}

// dynamic route content
export default function Article({ postData }) {
  // generate HTML from markdown content
  const html = `
    <h1>${ postData.title }</h1>
    <p class="time"><time datetime="${ postData.dateYMD }">${ postData.dateFriendly }</time></p>
    <p class="words">${ postData.wordcount }</p>
    ${ postData.html }
  `;
  
  return (
    <div>
      <Head>
        <title>{ postData.title }</title>
        <meta name="description" content={ postData.description } />
      </Head>
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}



