import Link from 'next/link';
import getConfig from 'next/config';
import { Button } from 'antd';
import { LoginOutlined, EditOutlined } from '@ant-design/icons';
import { color_white } from '../constants/CustomTheme';

// Only holds serverRuntimeConfig and publicRuntimeConfig from next.config.js nothing else.
const { publicRuntimeConfig: { staticFolder } } = getConfig();

const Header = () => (
  <div id='header_bar' className='container'>
    <style jsx>{`
      .container {
        position: fixed;
        display: flex;
        align-items: center;
        top: 0;
        width: 100%;
        height: 60px;
        background-color: ${color_white};
        z-index: 999;
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
        font-weight: 600;
      }
      .logo {
        width: 30px;
        height: 30px;
      }
      .right-container {
        position: absolute;
        right: 20px;
      }
    `}</style>
    <Link href='/'>
      <div className='logo-container'>
        <img className='logo' alt='logo' src={`${staticFolder}/logo.png`} />
        <a className='sys-name'>Next-Antd-Scaffold</a>
      </div>
    </Link>
    <div className='right-container'>
      <Button style={{ margin: '0 10px' }} type='primary' ghost>
        <LoginOutlined />
        Login
      </Button>
      <Button type='primary'>
        <EditOutlined />
        Register
      </Button>
    </div>
  </div>
);

export default Header;
