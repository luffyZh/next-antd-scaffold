import React, { Fragment } from 'react';
import Link from 'next/link';
const Home = () => (
  <Fragment>
    <h1>我是Next的首页</h1>
    <Link href='/userList'>
      <a>用户列表页</a>
    </Link>
  </Fragment>
);
export default Home;