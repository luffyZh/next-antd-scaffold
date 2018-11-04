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

/**
 * 高级写法
 */
// import fetch from 'isomorphic-unfetch';
// import UserList from '../../containers/user/UserList';
// import { fetchUserListDataSuccess } from '../../redux/actions/user';

// UserList.getInitialProps = async (props) => {
//   const { store, isServer } = props.ctx;
//   let userData;
//   if (store.getState().user.list.list.length === 0) {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     userData = await res.json();
//     store.dispatch(fetchUserListDataSuccess(userData));
//   }
//   return { isServer };
// };

// export default UserList;

