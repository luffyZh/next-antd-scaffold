import { connect } from 'react-redux';
import { increment, decrement, reset } from '../../redux/actions/home';
import Counter from '../../components/Home/Counter';

const mapStateToProps = state => ({
  count: state.home.counter.count,
});

const mapDispatchToProps = dispatch => ({
  increment() {
    dispatch(increment());
  },
  decrement() {
    dispatch(decrement());
  },
  reset() {
    dispatch(reset());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
