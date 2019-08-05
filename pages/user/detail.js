import UserDetail from '../../components/User/UserDetail';

UserDetail.getInitialProps = async (props) => {
  const { isServer } = props.ctx;
  return { isServer };
};

export default UserDetail;

