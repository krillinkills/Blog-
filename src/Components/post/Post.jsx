import './post.css';
function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/11929616/pexels-photo-11929616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Fleet works by optimizing</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum Fleet works by optimizing your builds using existing tooling
        available in the Rust ecosystem, including seamlessly integrating
        sccache, lld, zld, ramdisks (for those using WSL or HDD's) et al.
        Versioning
      </p>
    </div>
  );
}

export default Post;
