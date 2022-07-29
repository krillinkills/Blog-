import { useLocation } from 'react-router-dom';
import './singlepost.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
const PF = 'http://localhost:4000/images';

function Singlepost() {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('http://localhost:4000/api/post/' + path);
      setPost(res);
    };
    getPost();
  }, [path]);
  return (
    <div className="singlepost">
      <div className="singlepostwrapper">
        {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
        <h1 className="singleposttitle">
          {post.title}
          <div className="singlepostedit">
            <i className="singleposticon far fa-edit"></i>
            <i className="singleposticon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlepostinfo">
          <span>
            Author:
            <b className="singlepostauthor"> {post.useranme}</b>
          </span>
          <span> {new Date(post.updatedAt).toDateString()}</span>
        </div>
        <p className="singlepostdesc">{post.desc}</p>
      </div>
    </div>
  );
}

export default Singlepost;
