import './register.css';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    await axios
      .post('http://localhost:4000/api/auth/register', {
        username,
        email,
        password,
      })
      .then((res) => res.data && window.location.replace('/login'))
      .catch((err) => setError(true));
  };
  return (
    <div className="register">
      <span className="registertitle">Register</span>
      <form className="registerform" onSubmit={(e) => handleSubmit(e)}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="registerinput"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="registerinput"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="registerinput"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="registerbutton" type="seubmit">
          Register
        </button>
      </form>
      {error && <span>Somethign went wrong!!</span>}
      <Link to={'/login'} className="link">
        <button className="registerloginbutton">Login</button>
      </Link>
    </div>
  );
}

export default Register;
