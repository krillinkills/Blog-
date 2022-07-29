import './posts.css';
import Post from '../post/Post';
function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post key={post._id} posts={post} />
      ))}
    </div>
  );
}

export default Posts;
