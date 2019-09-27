import { connect } from 'react-redux';
import { login } from '../redux/actions/user';
import Login from '../components/Login';

const mapStateToProps = state => ({
  count: state.home.counter.count,
});

const mapDispatchToProps = dispatch => ({
  login(payload) {
    dispatch(login(payload));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
