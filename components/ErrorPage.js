import { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import Router from 'next/router';

class ErrorPage extends Component {
  static propTypes = {
    statusCode: PropTypes.number.isRequired
  }
  render() {
    let RenderComp;
    switch (this.props.statusCode) {
      case 200:
      case 404: {
        RenderComp = () => (
          <div className='content-container'>
            <style jsx>{`
              .content-container {
                position: absolute;
                top: 0;
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
            <img className='error-image' alt='error-img' src='/static/empty.png' />
            <h3>您访问的页面不存在，请确认地址准确～</h3>
            <Button onClick={() => Router.push('/')} type='primary' ghost>返回首页</Button>
          </div>
        );
        break;
      }
      case 500: {
        RenderComp = () => (
          <div className='content-container'>
            <style jsx>{`
              .content-container {
                position: absolute;
                top: 0;
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
            <h3>您访问的页面出现未知错误，程序员小哥正在加紧修复～</h3>
            <Button onClick={() => Router.push('/')} type='primary' ghost>返回首页</Button>
          </div>
        );
        break;
      }
      default: 
        break;
    }
    return (
      <RenderComp />
    );
  }
}

export default ErrorPage;