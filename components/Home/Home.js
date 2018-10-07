import { Fragment } from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import Counter from './Counter';

const Home = () => (
  <Fragment>
    <h1>Hello Next.js</h1>
    <Link href='/user/userList'>
      <Button type='primary'>用户列表页</Button>
    </Link>
    <div>
      Redux Counter Demo:
      <Counter />
    </div>
  </Fragment>
);
export default Home;
