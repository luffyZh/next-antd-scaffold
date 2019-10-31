import UserList from '../../containers/user/list';
import { fetchUserList } from '../../redux/actions/user';

UserList.getInitialProps = async (props) => {
  const { store, isServer } = props.ctx;
  store.dispatch(fetchUserList());
  return { isServer };
};

export default UserList;

