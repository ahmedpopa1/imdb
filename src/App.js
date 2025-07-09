import "./essam.css";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Components/signup/SignUp";
import Login from "./Components/Login/index";
import Profile from "./Components/profile/Profile";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
