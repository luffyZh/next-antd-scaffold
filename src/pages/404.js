import { Button } from 'antd';
import Router from 'next/router';

export default function Custom404() {
  return (
    <div className='container'>
      <style jsx>{`
        .container {
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
      <h3>The page is not found | 404～</h3>
      <Button onClick={() => Router.push('/')} type='primary' ghost>Back Home</Button>
    </div>
  );
}