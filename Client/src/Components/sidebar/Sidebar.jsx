import './sidebar.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('http://localhost:4000/api/category');
      setCat(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sideBar">
      <div className="sideBarItem">
        <span className="siedBarTitle">About Me</span>
        <img
          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <div className="sideBarItem">
        <span className="siedBarTitle">Categories</span>
        <ul>
          {cat.map((cats) => (
            <Link to={'/?cat=' + cat.name} className="link">
              <li key={cat._id} className="sideBarListItem">
                {cats.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">Follow</span>
        <div className="sideBarSocial">
          <i className="sideBarIcon fa-brands fa-facebook"></i>
          <i className="sideBarIcon fa-brands fa-twitter"></i>
          <i className="sideBarIcon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
