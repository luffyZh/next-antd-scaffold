import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import Link from 'next/link';
import { RoleType } from '../../constants/ConstTypes';

const columns = [{
  title: '姓名',
  dataIndex: 'username',
  key: 'username',
  render: (text) => (
    <Link href={`/user/userDetail?username=${text}`} as={`/user/userDetail/${text}`}>
      <a>{text}</a>
    </Link>
  )
}, {
  title: '邮箱',
  dataIndex: 'email',
  key: 'email',
}, {
  title: '角色',
  dataIndex: 'role',
  key: 'role',
  render: (text) => <span>{RoleType[text]}</span>
}];

function UserList(props) {
  const { list } = props;
  // declare dataSource useState
  const [dataSource, setDataSource] = useState(list);
  // declare dataSource useEffect
  useEffect(() => {
    setDataSource(list);
  }, [dataSource]);
  return (
    <Table
      style={{ minWidth: '600px' }}
      rowKey={record => record.id}
      dataSource={dataSource}
      columns={columns}
      bordered
    />
  );
}

export default UserList;

UserList.propTypes = {
  list: PropTypes.array.isRequired
};