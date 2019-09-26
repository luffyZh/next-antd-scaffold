import PropTypes from 'prop-types';
import { Table } from 'antd';
import Link from 'next/link';

const columns = [{
  title: 'Username',
  dataIndex: 'username',
  key: 'username',
  render: (text) => (
    <Link href={`/user/detail?username=${text}`} as={`/user/detail/${text}`}>
      <a>{text}</a>
    </Link>
  )
}, {
  title: 'Email',
  dataIndex: 'email',
  key: 'email',
}];

const UserList = ({ list }) => (
  <Table
    style={{ minWidth: '600px' }}
    dataSource={list}
    columns={columns}
    bordered
  />
);

export default UserList;

UserList.propTypes = {
  list: PropTypes.array.isRequired
};
