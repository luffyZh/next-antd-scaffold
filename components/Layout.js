import { Fragment } from 'react';
import Header from './Header';

export default ({title, children }) => (
  <Fragment>
    <style jsx global>{`
      * {
        margin: 0;
        padding: 0;
      }
      body {
        font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
      }
      .content-container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `}</style>
    <Header title={title} />
    <div className='content-container'>
      {children}
    </div>
  </Fragment>
);


