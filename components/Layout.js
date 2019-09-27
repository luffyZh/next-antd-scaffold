import PropTypes from 'prop-types';
import IfComp from 'if-comp';
import DynamicAntdTheme from 'dynamic-antd-theme';
import Header from './Header';
import { RouterTitle } from '../constants/ConstTypes';

const Layout = ({ router, children }) => (
  <>
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
    <IfComp 
      expression={router.pathname === '/'}
      trueComp={children}
      falseComp={
        <>
          <Header title={RouterTitle[router.pathname]} />
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
        </>
      }
    />
  </>
);
export default Layout;

Layout.propTypes = {
  router: PropTypes.object.isRequired,
  children: PropTypes.any
};

Layout.defaultProps = {
  children: null
};