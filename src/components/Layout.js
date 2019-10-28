import { Fragment } from 'react';
import PropTypes from 'prop-types';
import DynamicAntdTheme from 'dynamic-antd-theme';
import Header from './Header';

const Layout = ({ title, children }) => (
  <Fragment>
    <style jsx>{`
      .content-container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 70px 20px 20px 20px;
        padding: 10px 20px;
        background-color: #fff;
      }
    `}</style>
    <Header title={title} />
    <div className='content-container'>
      {children}
    </div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      Change Theme:
      <DynamicAntdTheme
        style={{ display: 'flex', marginLeft: '10px' }}
        primaryColor='#52c41a'
        themeChangeCallback={
          color => document.getElementById('header_bar').style.backgroundColor = color
        }
      />
    </div>
  </Fragment>
);
export default Layout;

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
};

Layout.defaultProps = {
  title: '',
  children: null
};