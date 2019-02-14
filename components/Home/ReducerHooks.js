import { useReducer } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function ReducerHooks({ initialCount = 0 }) {
  const initialState = {
    count: initialCount
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <style jsx>{`
        span {
          display: inline-block;
          margin: 0 10px;
        }
        .reducer-container {
          display: flex;
        }
      `}</style>
      <h2>Reducer Hooks</h2>
      <div className='reducer-container'>
        <Button onClick={() => dispatch({type: 'decrement'})}>-</Button>
        <span>Count: {state.count}</span>
        <Button onClick={() => dispatch({type: 'increment'})}>+</Button>
      </div>
    </>
  );
}
export default ReducerHooks;

ReducerHooks.propTypes = {
  initialCount: PropTypes.number.isRequired
};