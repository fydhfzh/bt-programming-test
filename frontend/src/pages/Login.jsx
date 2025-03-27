import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const buttonClick = async () => {
    const data = {
      email: email,
      password: password,
    };

    const url = 'http://localhost:3000/auth';

    try {
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        return;
      }

      const json = await res.json();
      const token = json.data.token;
      window.sessionStorage.setItem('token', token);
    } catch (error) {}
  };

  return (
    <div>
      <h1 className="text-2xl">Login</h1>
      <br />
      <div className="flex flex-col items-center">
        <input
          className="w-1/4 border-2 p-1 rounded-md"
          value={email}
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder="Insert your email here"
        />
        <input
          className="w-1/4 border-2 p-1 rounded-md mt-3"
          value={password}
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder="Insert your password here"
        />
        <button onClick={buttonClick} className="rounded-full bg-white w-1/4 text-black mt-2">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
