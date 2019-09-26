import { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import Link from 'next/link';
import { RoleType } from '../../constants/ConstTypes';

class UserList extends Component {
  static propTypes = {
    isServer: PropTypes.bool.isRequired,
    fetchUserListData: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired
  }
  constructor(props) {
    super(props);
    this.columns = [{
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
    }, {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (text) => <span>{RoleType[text]}</span>
    }];
  }

  render() {
    const { list } = this.props;
    return (
      <Table
        style={{ minWidth: '600px' }}
        rowKey={record => record.id}
        dataSource={list}
        columns={this.columns}
        bordered
      />
    );
  }
}

export default UserList;
