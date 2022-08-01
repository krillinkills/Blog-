import './setting.css';
import Sidebar from '../../Components/sidebar/Sidebar';
import { Context } from '../../context/Context';
import { useState, useContext } from 'react';
import axios from 'axios';
const PF = 'http://localhost:4000/images/';

function Setting() {
  const { user } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
  };
  return (
    <div className="settings">
      <div className="settingswrapper">
        <div className="settingstitle">
          <span className="settingstitleupdate">Update Your Account</span>
          <span className="settingstitledelete"> Delete Account</span>
        </div>
        <from className="settingsform">
          <label>Profile picture</label>
          <div className="settingspp">
            <img
              src="https://images.pexels.com/photos/11690015/pexels-photo-11690015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsppicon far fa-user-circle"></i>
            </label>
            <input
              id="fileinput"
              type="file"
              style={{ display: 'none' }}
              className="settingsppinput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Anyone" name="name" />
          <label>Email</label>
          <input type="email" placeholder="anyone@gmail" name="email" />
          <label>Password</label>
          <input type="password" placeholder="password" name="password" />
          <button className="settingssubmitbutton" type="submit">
            Update
          </button>
        </from>
      </div>
      <Sidebar />
    </div>
  );
}

export default Setting;
