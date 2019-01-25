import fetch from 'isomorphic-unfetch';
import UserList from '../../containers/user/UserList';
import { fetchUserListDataSuccess } from '../../redux/actions/user';
import api from '../../constants/ApiUrlForBE';

UserList.getInitialProps = async (props) => {
  const { store, isServer } = props.ctx;
  const res = await fetch(api.getUserList);
  const data = await res.json();
  store.dispatch(fetchUserListDataSuccess(data));
  return { isServer };
};

export default UserList;

