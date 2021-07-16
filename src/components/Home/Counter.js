import { Button } from 'antd';
import { useSelector } from 'react-redux';
import { increment, decrement, reset, addToNumber } from '@/redux/actions/home';
import useDispatchAction from '@/hooks/useDisptachAction';

function Counter() {
  const count = useSelector(state => state.home.counter.count);
  const dispatchAction = useDispatchAction({increment, decrement, reset, addToNumber});
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
      <Button onClick={() => dispatchAction.increment()}>
        +1
      </Button>
      <Button onClick={() => dispatchAction.decrement()}>
        -1
      </Button>
      <Button onClick={() => dispatchAction.addToNumber(10)}>数字增加到10</Button>
      <Button type='primary' onClick={() => dispatchAction.reset()}>Reset</Button>
    </div>
  );
}

export default Counter;