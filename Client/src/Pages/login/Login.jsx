import './login.css';
import { useState, useContext } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch, isFetching } = useContext(Context);
  const handleSubmit = async (e) => {
    dispatch({ type: 'Login_Start' });
    e.preventDefault();

    await axios
      .post('http://localhost:4000/api/auth/login', {
        username,
        password,
      })
      .then((res) => dispatch({ type: 'Login_Success', payload: res.data }))
      .catch((err) => dispatch({ type: 'Login_Failure' }));
  };

  return (
    <div className="login">
      <span className="logintitle">Login</span>
      <form className="loginform" onSubmit={(e) => handleSubmit(e)}>
        <label>Username</label>
        <input
          className="logininput"
          type=" text"
          placeholder="Enter your email"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label>Password</label>
        <input
          className="logininput"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="loginbutton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="loginregisterbutton"> Register</button>
    </div>
  );
}

export default Login;
