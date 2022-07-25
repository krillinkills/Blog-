import './singlepost.css';

function Singlepost() {
  return (
    <div className="singlepost">
      <div className="singlepostwrapper">
        <img
          className="singlepostimg"
          src="https://images.pexels.com/photos/12576758/pexels-photo-12576758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <h1 className="singleposttitle">
          Lorem ipsum
          <div className="singlepostedit">
            <i className="singleposticon far fa-edit"></i>
            <i className="singleposticon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlepostinfo">
          <span>
            Author:
            <b className="singlepostauthor"> Any</b>
          </span>
          <span> 1 day ago</span>
        </div>
        <p className="singlepostdesc">
          Loreum ipsium Kaggle offers a no-setup, customizable, Jupyter
          Notebooks environment. Access GPUs at no cost to you and a huge
          repository of community published data & code.
          <br />
          <br />
          lorem ipsum Kaggle offers a no-setup, customizable, Jupyter Notebooks
          environment. Access GPUs at no cost to you and a huge repository of
          community published data & code.
        </p>
      </div>
    </div>
  );
}

export default Singlepost;
