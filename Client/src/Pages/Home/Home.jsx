import Header from '../../Components/header/Header';
import Posts from '../../Components/posts/Posts';
import Sidebar from '../../Components/sidebar/Sidebar';
import './home.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
function Home() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:4000/api/post');
      setPost(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={post} />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
