import './topbar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';

function Topbar() {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: 'Logout' });
  };
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
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">
            <Link to="/write" className="link">
              Write
            </Link>
          </li>

          {user ? (
            <li className="topListItem">
              <Link to="#" className="link" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          ) : null}

          {user ? (
            <>
              <li className="topListItem">
                <Link to="/settings" className="link">
                  Settings
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="topListItem">
                <Link to="/register" className="link">
                  Register
                </Link>
              </li>
              <li className="topListItem">
                <Link to="/login" className="link">
                  Login
                </Link>
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
