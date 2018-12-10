import { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { color_primary } from '../constants/CustomTheme';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string
  }
  static defaultProps = {
    title: ''
  }
  constructor(props) {
    super(props);
    const { title } = props;
    this.state = { title };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.title !== prevState.title) {
      return {
        title: nextProps.title
      };
    }
    return null;
  }

  render() {
    const { title } = this.state;
    return (
      <div className='header-container'>
        <style jsx>{`
          .header-container {
            position: fixed;
            top: 0;
            width: 100%;
            height: 60px;
            background-color: ${color_primary};
            z-index: 999;
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
        <Link href='/'>
          <div className='logo-container'>
            <img className='logo' alt='logo' src='/static/logo.png' />
            <span className='sys-name'>XXX系统</span>
          </div>
        </Link>
        <h2>{title}</h2>
      </div>
    );
  }
}

export default Header;
