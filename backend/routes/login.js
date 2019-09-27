const defaultUser = {
  username: 'admin',
  password: '123456'
};

module.exports = async (req, res) => {
  const { username, password } = req.query;
  if (username === defaultUser.username
    && password === defaultUser.password) {
    res.json({
      errcode: 200,
      errmessage: 'login success',
      data: {
        user: {
          name: '13051891212'
        },
        token: 'fjdslfjlds.fsljflksjfl.flsdjflsdjlfsd'
      }
    });
  } else {
    res.json({
      errcode: 500,
      errmessage: '用户名或密码错误',
      data: {}
    });
  }
};
