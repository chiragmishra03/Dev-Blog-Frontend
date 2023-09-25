import React from "react";
import TopBar from "../src/Components/TopBar/TopBar";
import Home from './Pages/Home/Home.jsx'
import Single from './Pages/Single/Single'
import Write from "./Pages/Write/Write";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Context } from "./Context/Context";
import { useContext } from "react";
import Error from "./Pages/Error/Error";

const App = () => {
  const { user } = useContext(Context);

  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
