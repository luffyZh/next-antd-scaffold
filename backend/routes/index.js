const express = require('express');
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

router.use('/user', user);

// 处理 404 
router.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// 处理5错误
router.use((err, req, res) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({
      message: 'invalid token',
      error: err
    });
  } else {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  }
});

module.exports = router;