import { Component } from 'react';
import { Table } from 'antd';
import Link from 'next/link';
import { RoleType } from '../../constants/ConstTypes';

const a = 0;

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dataSource = [{
      key: '1',
      username: 'luffy',
      email: 'luffy@126.com',
      role: 1
    }, {
      key: '2',
      username: 'naruto',
      email: 'naruto@126.com',
      role: 10
    }];

    this.columns = [{
      title: '姓名',
      dataIndex: 'username',
      key: 'username',
      render: (text) => (
        <Link href={`/user/userDetail/${text}`}>
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
  }

  render() {
    return (
      <Table
        style={{ minWidth: '600px' }}
        dataSource={this.dataSource}
        columns={this.columns}
        bordered
      />
    );
  }
}

export default UserList;
