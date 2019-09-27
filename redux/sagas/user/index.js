import login from './login';
import list from './list';

const userSagas = [
  ...list,
  ...login
];

export default userSagas;