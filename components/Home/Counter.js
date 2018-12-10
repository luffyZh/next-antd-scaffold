import { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
  }
  increment = () => {
    this.props.increment();
  }

  decrement = () => {
    this.props.decrement();
  }

  reset = () => {
    this.props.reset();
  }

  render () {
    const { count } = this.props;
    return (
      <div>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
        `}</style>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <Button onClick={this.increment}>+1</Button>
        <Button onClick={this.decrement}>-1</Button>
        <Button onClick={this.reset}>Reset</Button>
      </div>
    );
  }
}

export default Counter;
