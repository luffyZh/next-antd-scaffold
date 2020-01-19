import UserList from '../../containers/user/list';
// import { fetchUserList } from '../../redux/actions/user';

UserList.getInitialProps = async (props) => {
  console.log(props);
  const { isServer } = props;
  if (isServer) {
    throw new Error('Server Error');
  } else {
    throw new Error('Client Error');
  }
  // store.dispatch(fetchUserList());
  // return { isServer };
};

export default UserList;

