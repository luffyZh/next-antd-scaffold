import { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
class UserDetail extends Component {
  static propTypes = {
    router: PropTypes.object.isRequired
  }
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
