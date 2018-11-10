import { Fragment } from 'react';
import Header from './Header';

export default ({title, children }) => (
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


