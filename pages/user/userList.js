import UserList from '../../containers/user/UserList';
import { fetchUserListDataSuccess } from '../../redux/actions/user';
import nextFetch from '../../core/nextFetch';
import api from '../../constants/ApiUrlForBE';

UserList.getInitialProps = async (props) => {
  const { store, isServer } = props.ctx;
  const data = await nextFetch.get(api.getUserList);
  store.dispatch(fetchUserListDataSuccess(data));
  return { isServer };
};

export default UserList;

