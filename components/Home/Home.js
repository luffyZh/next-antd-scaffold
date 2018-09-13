import { Fragment } from 'react';
import { Button } from 'antd';
import Link from 'next/link';

const Home = () => (
  <Fragment>
    <h1>Hello Next.js</h1>
    <Link href='/user/userList'>
      <Button type='primary'>用户列表页</Button>
    </Link>
  </Fragment>
);
export default Home;
