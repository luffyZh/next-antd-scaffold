import { Fragment } from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import StateHooks from './StateHooks';
import EffectHooks from './EffectHooks';
import ReducerHooks from './ReducerHooks';
import RefHooks from './RefHooks';
import ReduxHooks from '../../containers/home/counter';

const Home = () => (
  <Fragment>
    <h1>React-Hooks</h1>
    <Link href='/user/userList'>
      <Button type='primary'>用户列表页</Button>
    </Link>
    <StateHooks />
    <EffectHooks />
    <ReducerHooks initialCount={26} />
    <RefHooks />
    <ReduxHooks />
  </Fragment>
);
export default Home;
