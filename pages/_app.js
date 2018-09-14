import App, {Container} from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import createStore from '../redux/store';

import Layout from '../components/Layout';
import { RouterTitle } from '../constants/ConstTypes';

class InTerViewSystem extends App {
  constructor(props) {
    super(props);
    const { Component, pageProps, store, router } = props;
    this.state = { Component, pageProps, store, router };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.Component !== prevState.Component
      || nextProps.pageProps !== prevState.pageProps
      || nextProps.router !== prevState.router) {
      return {
        Component: nextProps.Component,
        pageProps: nextProps.pageProps,
        router: nextProps.router
      };
    }
    return null;
  }

  render () {
    const { Component, pageProps, store, router } = this.state;

    return (
      <Container>
        <Provider store={store}>
          <Layout title={RouterTitle[router.pathname]}>
            <Component {...pageProps} router={router} />
          </Layout>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(createStore)(withReduxSaga({ async: true })(InTerViewSystem));