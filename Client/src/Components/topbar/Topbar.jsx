import './topbar.css';
import { Link } from 'react-router-dom';

function Topbar() {
  const currentUser = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/">Home</Link>
          </li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">
            <Link to="/write">Write</Link>
          </li>

          {currentUser ? (
            <li className="topListItem">
              <Link to="#">Logout</Link>
            </li>
          ) : null}

          {currentUser ? (
            <>
              <li className="topListItem">
                <Link to="/settings">Settings</Link>
              </li>
            </>
          ) : (
            <>
              <li className="topListItem">
                <Link to="/register">Register</Link>
              </li>
              <li className="topListItem">
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt=""
        />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default Topbar;
