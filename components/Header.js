import { Component } from 'react';
import Link from 'next/link';
import { color_youdao, color_youdao_border } from '../constants/CustomTheme';

class Header extends Component {
  constructor(props) {
    super(props);
    const { title } = props;
    this.state = { title };
  }

  render() {
    const { title } = this.state;
    return (
      <div className='header-container'>
        <Link href='/'>
          <div className='logo-container'>
            <img className='logo' alt='logo' src='/static/logo.png' />
            <span className='sys-name'>XXX系统</span>
          </div>
        </Link>
        <h2>{title}</h2>
        <style jsx>{`
          .header-container {
            height: 60px;
            background-color: ${color_youdao};
            border: 1px solid ${color_youdao_border};
            margin-bottom: 10px;
          }
          h2 {
            text-align: center;
            line-height: 60px;
            font-size: 1.6rem;
            font-weight: 500;
            color: #fff;
          }
          .logo-container {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 15px;
            left: 20px;
            cursor: pointer;
          }
          .sys-name {
            display: inline-block;
            margin-left: 10px;
            font-size: 20px;
            color: #fff;
            font-weight: 600;
          }
          .logo {
            width: 30px;
            height: 30px;
          }
        `}</style>
      </div>
    );
  }
}

export default Header;
