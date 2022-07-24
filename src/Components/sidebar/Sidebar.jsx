import './sidebar.css';
function Sidebar() {
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
          <li className="sideBarListItem">Life</li>
          <li className="sideBarListItem">Music</li>
          <li className="sideBarListItem">Sports</li>
          <li className="sideBarListItem">Tech</li>
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
