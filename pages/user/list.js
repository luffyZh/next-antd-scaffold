import UserList from '../../containers/user/list';
import { fetchUserListData } from '../../redux/actions/user';

UserList.getInitialProps = async (props) => {
  const { store, isServer } = props.ctx;
  store.dispatch(fetchUserListData());
  return { isServer };
};

export default UserList;

