import PropTypes from 'prop-types';
import { Button } from 'antd';

const Counter = ({ increment, decrement, reset, count }) => (
  <div>
    <style jsx>{`
      div {
        padding: 0 0 20px 0;
      }
    `}</style>
    <h1>
      Count: <span>{count}</span>
    </h1>
    <Button onClick={() => increment()}>
      +1
    </Button>
    <Button onClick={() => decrement()}>
      -1
    </Button>
    <Button type='primary' onClick={() => reset()}>Reset</Button>
  </div>
);

export default Counter;

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
};
