import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css"; // 確保 Bootstrap CSS 被引入

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <Link to="/">GYM BRO</Link>
      </h1>

      <ul>
        <li>
          <Link to="/">首頁</Link>
        </li>
        <li>
          <Link to="/myPlan">我的計畫</Link>
        </li>
        <li>
          <Link to="/support">輔助專區</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
