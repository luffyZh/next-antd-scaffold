import { Fragment } from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import createStore from '../redux/store';
import Layout from '../components/Layout';
import { RouterTitle } from '../constants/ConstTypes';
import '../asserts/styles.less';
import ErrorPage from '../components/ErrorPage';
class InTerViewSystem extends App {
  
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  render () {
    const { Component, pageProps, store, router } = this.props;
    const isError = router.pathname === '/_error';
    return isError ? <ErrorPage />
      : (
        <Fragment>
          <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta charSet='utf-8' />
            <title>Next-Antd-Scafflod</title>
            <link rel='shortcut icon' href='/static/favicon.ico' type='image/ico'/>
          </Head>
          <Container>
            <Provider store={store}>
              <Layout title={RouterTitle[router.pathname]}>
                <Component {...pageProps} router={router} />
              </Layout>
            </Provider>
          </Container>
        </Fragment>
      );
  }
}

export default withRedux(createStore)(withReduxSaga({ async: true })(InTerViewSystem));