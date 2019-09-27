const express = require('express');
const login = require('./login');
const user = require('./user');

// 注册路由
const router = express.Router();

// 路由中间件
router.use((req, res, next) => {
  // 任何路由信息都会执行这里面的语句
  console.log('this is a api request!');
  // 把它交给下一个中间件，注意中间件的注册顺序是按序执行
  next();
});

// 登录路由
router.use('/login', login);
// 数据统计路由
router.use('/user', user);

// 处理 404 
router.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// 处理5错误
router.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({
      code: 401,
      message: 'invalid token',
      data: err
    });
  } else {
    res.status(err.status || 500);
    res.json({
      code: err.status || 500,
      message: err.message,
      data: err
    });
  }
  next(err);
});

module.exports = router;