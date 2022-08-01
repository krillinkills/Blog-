import { useLocation } from 'react-router-dom';
import './singlepost.css';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

const PF = 'http://localhost:4000/images/';

function Singlepost() {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  const { user } = useContext(Context);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('http://localhost:4000/api/post/' + path);
      setPost(res);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);
  const handleDel = () => {
    axios
      .delete(`http://localhost:4000/api/post/ ${post._id}`, {
        data: { username: user.username },
      })
      .then((res) => window.location.replace('/'));
  };
  const handleUpdate = () => {
    axios
      .put(`http://localhost:4000/api/post/ ${post._id}`, {
        username: user.username,
        title,
        desc,
      })
      .then((res) => setUpdateMode(false));
  };

  return (
    <div className="singlepost">
      <div className="singlepostwrapper">
        {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
        {updateMode ? (
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="singleposttitleinput"
            autoFocus
            type="text"
          />
        ) : (
          <>
            <h1 className="singleposttitle">
              {title}
              {
                (post.useranme = user?.username && (
                  <div className="singlepostedit">
                    <i
                      className="singleposticon far fa-edit"
                      onClick={() => setUpdateMode(true)}
                    ></i>
                    <i
                      className="singleposticon far fa-trash-alt"
                      onClick={() => handleDel}
                    ></i>
                  </div>
                ))
              }
            </h1>
          </>
        )}

        <div className="singlepostinfo">
          <span>
            Author:
            <Link to={'/?usename=' + post.useranme} className="link">
              <b className="singlepostauthor"> {post.useranme}</b>
            </Link>
          </span>
          <span> {new Date(post.updatedAt).toDateString()}</span>
        </div>
        {updateMode ? (
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="singlepostdescinput"
            autoFocus
            type="text"
          />
        ) : (
          <p className="singlepostdesc">{desc}</p>
        )}
        {updateMode && <button onClick={() => handleUpdate}>Update</button>}
      </div>
    </div>
  );
}

export default Singlepost;
