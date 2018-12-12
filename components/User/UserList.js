import { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import Link from 'next/link';
import { RoleType } from '../../constants/ConstTypes';

class UserList extends Component {
  static propTypes = {
    isServer: PropTypes.bool.isRequired,
    fetchUserListData: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };

    this.columns = [{
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
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.list && nextProps.list !== prevState.dataSource) {
      return {
        dataSource: nextProps.list
      };
    }
    return null; 
  }

  componentDidMount() {
    // refresh page need reload data
    if (this.props.isServer) {
      this.props.fetchUserListData();
    }
  }

  render() {
    const { dataSource } = this.state;
    dataSource.map(item => {
      item.key = item.id;
      item.role = 10;
    });
    return (
      <Table
        style={{ minWidth: '600px' }}
        dataSource={dataSource}
        columns={this.columns}
        bordered
      />
    );
  }
}

export default UserList;
