import React from 'react';
import PropTypes from 'prop-types';
import ErrorPage from '../components/ErrorPage';
export default class Error extends React.Component {
  static propTypes = {
    statusCode: PropTypes.number
  }
  static defaultProps = {
    statusCode: 200
  }
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <ErrorPage statusCode={this.props.statusCode || 200} />
    );
  }
}