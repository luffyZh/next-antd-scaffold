import React, { Component } from 'react';
import { Table } from 'antd';
import Layout from '../Layout';
import { RoleType } from '../../constants/ConstTypes';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dataSource = [{
      key: '1',
      username: '路飞',
      email: 'luffy@126.com',
      role: 1
    }, {
      key: '2',
      username: '鸣人',
      email: 'naruto@126.com',
      role: 10
    }];
    
    this.columns = [{
      title: '姓名',
      dataIndex: 'username',
      key: 'username',
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
      <Layout title='用户列表页'>
        <Table
          style={{ minWidth: '600px' }}
          dataSource={this.dataSource}
          columns={this.columns}
          bordered
        />
      </Layout>
    );
  }
}

export default UserList;