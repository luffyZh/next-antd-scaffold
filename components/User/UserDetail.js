import { Component, Fragment } from 'react';
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(import('braft-editor'), {
  loading: () => <p>正在加载组件...</p>
});
class UserDetail extends Component {
  constructor(props) {
    super(props);
    const { router: { query } } = props;
    this.state = {
      username: query.username,
    };
  }

  render() {
    return (
      <Fragment>
        <h1>用户信息：{this.state.username}</h1>
        <div style={{ width: '50%', height: '400px', }}>
          <DynamicComponent />
        </div>
      </Fragment>
    );
  }
}

export default UserDetail;
