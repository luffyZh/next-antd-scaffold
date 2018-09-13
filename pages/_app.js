import App, {Container} from 'next/app';
import Layout from '../components/Layout';
import { RouterTitle } from '../constants/ConstTypes';

export default class MyApp extends App {
  constructor(props) {
    super(props);
    const { Component, pageProps, router } = props;
    this.state = { Component, pageProps, router };
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
    const { Component, pageProps, router } = this.state;
    
    return (
      <Container>
        <Layout title={RouterTitle[router.pathname]}>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}