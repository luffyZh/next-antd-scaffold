import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Input } from 'antd';

const { Password } = Input;

const Login = ({ login }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className='container'>
      <style jsx>{`
        .container {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 600px;
          height: 400px;
          margin-left: -200px;
          margin-top: -300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #fff;
        }
      `}</style>
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>登录</h2>
      <div style={{ marginLeft: '10%', width: '80%', textAlign: 'center' }}>
        <Input
          value={username}
          placeholder='默认admin'
          onChange={
            ({ target: { value } }) => setUsername(value)
          }
        />
        <Password
          style={{ margin: '20px 0' }}
          value={password}
          placeholder='默认123456'
          onChange={
            ({ target: { value } }) => setPassword(value)
          }
        />
        <Button 
          type='primary'
          onClick={() => {
            console.log(username, password);
            login({ username, password });
          }}
        >登录</Button>
      </div>
    </div>
  );
};

export default Login;

Login.propTypes = {
  login: PropTypes.func.isRequired
};