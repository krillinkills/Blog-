import './write.css';
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';
function Write() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState('');
  const { user } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const fileName = file.name;
      data.append('name', fileName);
      data.append('file', file);
      newPost.photo = fileName;
      axios.post('http://localhost/api/upload', data);
      axios
        .post('http://localhost/api/post', newPost)
        .then((res) => window.location.replace('/post/' + res.data._id));
    }
  };
  return (
    <div className="write">
      {file && (
        <img className="writeimg" src={URL.createObjectURL(file)} alt="" />
      )}

      <form className="writeform" onSubmit={handleSubmit}>
        <div className="writeformgroup">
          <label htmlFor="flieInput">
            <i className="writeicon far fa-plus"> </i>
          </label>
          <input
            id="fileInput"
            type="file"
            onChange={(e) => setFile(e.target.files[0])} //getting img
            style={{ display: 'none' }}
          />
          <input
            className="writeinput"
            placeholder="Title"
            type="text"
            autoFocus="true"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeformgroup">
          <textarea
            className="writeinput writetext"
            placeholder="Tell your story.."
            type="text"
            autoFocus="true"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writesubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}

export default Write;
