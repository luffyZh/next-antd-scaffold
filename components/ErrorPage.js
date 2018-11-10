import { Component } from 'react';
import { Button } from 'antd';
import Router from 'next/router';

class ErrorPage extends Component {
  render() {
    return (
      <div className='content-container'>
        <style jsx>{`
          .content-container {
            position: absolute;
            display: flex;
            width: 100%;
            height: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .error-image {
            width: 200px;
            height: 200px;
            margin: 10px 0;
          }
        `}</style>
        <img className='error-image' alt='error-img' src='/static/unknown_error.png' />
        <h3>您访问的页面不存在，请确认地址准确～</h3>
        <Button onClick={() => Router.push('/')} type='primary' ghost>返回首页</Button>
      </div>
    );
  }
}

export default ErrorPage;