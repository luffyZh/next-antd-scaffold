import { Fragment } from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { message } from 'antd';
import createStore from '../redux/store';
import Layout from '../components/Layout';
import { RouterTitle } from '../constants/ConstTypes';
import { clearServerError } from '../redux/actions/common';
import '../assets/self-styles.less';


class NextApp extends App {
  
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  componentDidMount() {
    const { store: { getState, dispatch } } = this.props;
    // 处理服务器端的错误提示
    const { errorType } = getState().serverError;
    if (errorType.length > 0) {
      Promise.all(
        errorType.map(type => message.error(`服务器错误, 代码：${type}`))
      );
      dispatch(clearServerError());
    }
  }

  render () {
    const { Component, pageProps, store, router } = this.props;
    return (
      <Fragment>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <title>Next-Antd-Scaffold</title>
          <link rel='shortcut icon' href='/static/favicon.ico' type='image/ico'/>
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

export default withRedux(createStore)(withReduxSaga({ async: true })(NextApp));