import React, { Fragment } from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import Layout from '../Layout';
const Home = () => (
  <Layout title='首页'>
    <Fragment>
      <h1>Hello Next.js</h1>
      <Link href='/user/userList'>
        <Button type='primary'>用户列表页</Button>
      </Link>
    </Fragment>
  </Layout>
);
export default Home;