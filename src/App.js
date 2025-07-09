import "./essam.css";
import { Route, Routes, HashRouter } from "react-router-dom";
import SignUp from "./Components/signup/SignUp";
import Login from "./Components/Login/index";
import Profile from "./Components/profile/Profile";
import Layout from "./Components/layout/Layout";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
