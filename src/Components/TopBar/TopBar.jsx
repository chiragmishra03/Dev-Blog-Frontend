import React from "react";
import userImg from "../../images/user.jpg";
import { Link } from "react-router-dom";
import "./TopBar.scss";
import { useContext } from "react";
import { Context } from "../../Context/Context";

const TopBar = () => {
  const {user,dispatch} = useContext(Context);

  const handleLogout = ()=>{
    dispatch({
      type:"LOGOUT"
    })
  }

  return (
    <div className="top">
      <div className="topLeft">
        <img src= "https://raw.githubusercontent.com/chiragmishra03/Devv-Hub/main/src/image/logo.png" alt="" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem ">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem ">
            <Link to="/" className="link">
              CONTACT
            </Link>
          </li>
          <li className="topListItem ">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem " onClick={handleLogout}>{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img className="topImg" src={userImg} alt="" />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default TopBar;
