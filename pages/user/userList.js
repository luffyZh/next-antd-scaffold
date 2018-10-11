import UserList from '../../containers/user/UserList';
import { fetchUserListData } from '../../redux/actions/user';

UserList.getInitialProps = async (props) => {
  const { store, isServer } = props.ctx;
  if (store.getState().user.list.list.length === 0) {
    store.dispatch(fetchUserListData());
  }
  return { isServer };
};

export default UserList;

