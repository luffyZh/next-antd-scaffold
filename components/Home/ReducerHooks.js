import { useReducer } from 'react';
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

export default function ({ initialCount = 0 }) {
  const initialState = {
    count: initialCount
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>ReducerHooks</h2>
      Count: {state.count}
      <Button onClick={() => dispatch({type: 'increment'})}>+</Button>
      <Button onClick={() => dispatch({type: 'decrement'})}>-</Button>
    </>
  );
}