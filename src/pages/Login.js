import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = (props) => {
  return (
    <div style={{margin: "0 30% 0 30%", minWidth: 240}}>
      <LoginForm
        {...props}
      />
    </div>
  );
};

export default Login;