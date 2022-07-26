import './register.css';

function Register() {
  return (
    <div className="register">
      <span className="registertitle">Register</span>
      <form className="registerform">
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="registerinput"
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="registerinput"
        />
        <label>password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="registerinput"
        />
        <button className="registerbutton">Register</button>
      </form>
      <button className="registerloginbutton">Login</button>
    </div>
  );
}

export default Register;
