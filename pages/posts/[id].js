import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

// ### 複数階層のディレクトリーでは、[...id].js (idは任意)を使う。
//   指定は配列で。aaa/bbb.md = ["aaa","bbb"]   .join('/')

export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      </Layout>
    );
  }

// ### Dynamic Routes
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,    //指定パス以外なら、404を返す
  };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
      props: {
        postData,
      },
    };
}
