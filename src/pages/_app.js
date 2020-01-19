import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import * as Sentry from '@sentry/node';
import createStore from '../redux/store';
import Layout from '../components/Layout';
import '../../assets/self-styles.less';

Sentry.init({
  dsn: process.env.SENTRY_DSN
});

class NextApp extends App {
  
  static async getInitialProps ({ Component, ctx }) {
    try {
      let pageProps = {};

      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }

      return { pageProps };
    } catch (err) {
      // Capture errors that happen during a page's getInitialProps.
      // This will work on both client and server sides.
      Sentry.captureException(err);
    }
  }

  componentDidCatch(error, errorInfo) {
    console.log('CATCH ERROR:', error, errorInfo);
    super.componentDidCatch(error, errorInfo);
  }

  render () {
    const { Component, pageProps, store, router } = this.props;
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
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} router={router} />
          </Layout>
        </Provider>
      </>
    );
  }
}

export default withRedux(createStore)(withReduxSaga({ async: true })(NextApp));