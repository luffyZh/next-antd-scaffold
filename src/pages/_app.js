import Head from 'next/head';
import { wrapper } from '../redux/store';
import Layout from '../components/Layout';
import '../../assets/self-styles.less';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <title>Next-Antd-Scaffold</title>
        <link rel='shortcut icon' href='/favicon.ico' type='image/ico'/>
        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
          }
          body {
            font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
          }
        `}
        </style>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}


export default wrapper.withRedux(App);