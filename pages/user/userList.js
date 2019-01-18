import UserList from '../../containers/user/UserList';
import { fetchUserListDataSuccess } from '../../redux/actions/user';
import api from '../../constants/ApiUrlForBE';
import nextFetch from '../../core/nextFetch';

UserList.getInitialProps = async (props) => {
  const { store, isServer } = props.ctx;
  const data = await nextFetch.get(api.getUserList);
  store.dispatch(fetchUserListDataSuccess(data));
  // if (store.getState().user.list.list.length === 0) {
  //   store.dispatch(fetchUserListData());
  // }
  return { isServer };
};

export default UserList;

