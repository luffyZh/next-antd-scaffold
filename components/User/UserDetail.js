import PropTypes from 'prop-types';

const UserDetail = ({ router }) => (
  <h1>用户信息：{router.query.username}</h1>
);

export default UserDetail;

UserDetail.propTypes = {
  router: PropTypes.object.isRequired
};
