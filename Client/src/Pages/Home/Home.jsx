import Header from '../../Components/header/Header';
import Posts from '../../Components/posts/Posts';
import Sidebar from '../../Components/sidebar/Sidebar';
import './home.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const [post, setPost] = useState([]);
  const { search } = useLocation(); //to get query in url

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:4000/api/post' + search);
      setPost(res.data);
    };
    fetchPosts();
  }, [search]);
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
