import { Component, Fragment } from 'react';

class UserDetail extends Component {
  constructor(props) {
    super(props);
    const { router: { query } } = props;
    this.state = { username: query.username };
  }

  render() {
    return (
      <Fragment>
        <h1>用户信息：{this.state.username}</h1>
      </Fragment>
    );
  }
}

export default UserDetail;
