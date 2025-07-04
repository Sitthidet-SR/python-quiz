import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="nav-title">
          <i className="fa-solid fa-code" style={{marginRight: '12px', fontSize: '1.8rem'}}></i>
          สื่อการเขียนโปรแกรมและอัลกอริทึมด้วยภาษา Python
        </Link>
        <div className="nav-links">
          <Link to="/lesson/1">
            <i className="fa-solid fa-book-open"></i>
            บทเรียน
          </Link>
          <Link to="/quiz">
            <i className="fa-solid fa-gamepad"></i>
            เกมตอบคำถาม
          </Link>
          <Link to="/about">
            <i className="fa-solid fa-circle-info"></i>
            เกี่ยวกับ
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 