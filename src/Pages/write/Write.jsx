import './write.css';
function Write() {
  return (
    <div className="write">
      <img
        className="writeimg"
        src="https://images.pexels.com/photos/12826233/pexels-photo-12826233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <form className="writeform">
        <div className="writeformgroup">
          <label htmlFor="flieInput">
            <i className="writeicon far fa-plus"> </i>
          </label>
          <input id="fileInput" type="file" style={{ display: 'none' }} />
          <input
            className="writeinput"
            placeholder="Title"
            type="text"
            autoFocus="true"
          />
        </div>
        <div className="writeformgroup">
          <textarea
            className="writeinput writetext"
            placeholder="Tell your story.."
            type="text"
            autoFocus="true"
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
