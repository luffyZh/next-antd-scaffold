import { Fragment } from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import IfComp from 'if-comp';
import Counter from '../../containers/home/counter';
import StateHooks from './StateHooks';
import EffectHooks from './EffectHooks';
import ReducerHooks from './ReducerHooks';

const Home = () => (
  <Fragment>
    <h1>React-Hooks</h1>
    <Link href='/user/userList'>
      <Button type='primary'>用户列表页</Button>
    </Link>
    <IfComp
      expression={true}
      trueComp={
        <div style={{ marginTop: '20px' }}>
          Redux Counter Demo:
          <Counter />
        </div>
      }
    />
    <StateHooks />
    <EffectHooks />
    <ReducerHooks initialCount={26} />
  </Fragment>
);
export default Home;
