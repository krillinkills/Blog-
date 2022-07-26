import './login.css';
function Login() {
  return (
    <div className="login">
      <span className="logintitle">Login</span>
      <form className="loginform">
        <label>Email</label>
        <input
          className="logininput"
          type=" text"
          placeholder="Enter your email"
        />
        <label>Password</label>
        <input
          className="logininput"
          type="password"
          placeholder="Enter your password"
        />
        <button className="loginbutton">Login</button>
      </form>
      <button className="loginregisterbutton"> Register</button>
    </div>
  );
}

export default Login;
