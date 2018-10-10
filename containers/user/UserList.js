import { connect } from 'react-redux';
import { fetchUserListData } from '../../redux/actions/user';
import UserList from '../../components/User/UserList';

const mapStateToProps = state => ({
  list: state.user.list.list,
});

const mapDispatchToProps = dispatch => ({
  fetchUserListData() {
    dispatch(fetchUserListData());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
