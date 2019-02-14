import PropTypes from 'prop-types';

function UserDetail(props) {
  const { username } = props;
  return (
    <>
      <h1>用户信息：{username}</h1>
    </>
  );
}

export default UserDetail;

UserDetail.propTypes = {
  router: PropTypes.object.isRequired
};
