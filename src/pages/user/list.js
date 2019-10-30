import UserList from '../../containers/user/list';
import { fetchUserListData } from '../../redux/actions/user';

UserList.getInitialProps = async (props) => {
  const { store, isServer } = props.ctx;
  store.dispatch(fetchUserListData());
  console.log('获取数据了');
  return { isServer };
};

export default UserList;

