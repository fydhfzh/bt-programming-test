import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>Login</h1>
      <br />
      <input
        value={email}
        type="email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        placeholder="Insert your email here"
      />
      <input
        value={password}
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        placeholder="Insert your password here"
      />
    </div>
  );
};

export default Login;
