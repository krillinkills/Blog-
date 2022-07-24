import './header.css';
function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Blogging</span>
        <span className="headerTitleLg">Blog Website</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
  );
}

export default Header;
