import { Button } from 'antd';
import { useSelector } from 'react-redux';
import { increment, decrement, reset, addToNumber } from '../../redux/actions/home';
import useDisptachActions from '../../hooks/useDisptachActions';

function Counter() {
  const count = useSelector(state => state.home.counter.count);
  const dispatchActions = useDisptachActions({increment, decrement, reset, addToNumber});
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
      <Button onClick={() => dispatchActions.increment()}>
        +1
      </Button>
      <Button onClick={() => dispatchActions.decrement()}>
        -1
      </Button>
      <Button onClick={() => dispatchActions.addToNumber(10)}>数字增加到10</Button>
      <Button type='primary' onClick={() => dispatchActions.reset()}>Reset</Button>
    </div>
  );
}

export default Counter;