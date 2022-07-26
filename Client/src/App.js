import Topbar from './Components/topbar/Topbar';
import Home from './Pages/Home/Home';
import Setting from './Pages/settings/Setting';
import Single from './Pages/single/Single';
import Write from './Pages/write/Write';
import Login from './Pages/login/Login';
import Register from './Pages/register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './context/Context';

function App() {
  const { user } = useContext(Context); //takes value from InitialState from context and puts true or false
  return (
    <div>
      <Router>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={user ? <Home /> : <Login />} />
          <Route
            exact
            path="/register"
            element={user ? <Home /> : <Register />}
          />
          <Route
            exact
            path="/settings"
            element={user ? <Setting /> : <Login />}
          />
          <Route exact path="/post" element={<Home />} />
          <Route exact path="/post/:id" element={<Single />} />
          <Route exact path="/write" element={user ? <Write /> : <Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
