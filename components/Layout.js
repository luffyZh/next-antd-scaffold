import { Fragment } from 'react';
import PropTypes from 'prop-types';
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
  </Fragment>
);
export default Layout;

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any
};

Layout.defaultProps = {
  children: null
};