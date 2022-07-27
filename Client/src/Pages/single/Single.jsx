import './single.css';
import Singlepost from '../../Components/singlepost/Singlepost';
import Sidebar from '../../Components/sidebar/Sidebar';
function Single() {
  return (
    <div className="single">
      <Singlepost />

      <Sidebar />
    </div>
  );
}

export default Single;
