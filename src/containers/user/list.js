import { connect } from 'react-redux';
import { fetchUserList } from '../../redux/actions/user';
import UserList from '../../components/User/UserList';

const mapStateToProps = state => ({
  list: state.user.list.list,
});

const mapDispatchToProps = dispatch => ({
  fetchUserList() {
    dispatch(fetchUserList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
