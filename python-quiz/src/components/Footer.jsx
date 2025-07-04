import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <i className="fa-solid fa-graduation-cap"></i>
            <h3>สื่อการเขียนโปรแกรมและอัลกอริทึม</h3>
          </div>
          <p className="footer-description">
            เรียนรู้การเขียนโปรแกรมด้วยภาษา Python ผ่านบทเรียนที่เข้าใจง่าย 
            และเกมตอบคำถามที่สนุกสนาน
          </p>
        </div>
        
        <div className="footer-section">
          <h4>ข้อมูลโครงการ</h4>
          <div className="footer-info">
            <div className="info-item">
              <i className="fa-solid fa-users"></i>
              <span>นักศึกษา สาขาวิทยาการคอมพิวเตอร์ รุ่นที่ 27</span>
            </div>
            <div className="info-item">
              <i className="fa-solid fa-calendar"></i>
              <span>ปีการศึกษา 2567</span>
            </div>
            <div className="info-item">
              <i className="fa-solid fa-code"></i>
              <span>พัฒนาโดย React + Vite</span>
            </div>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>ติดต่อเรา</h4>
          <div className="footer-social">
            <a href="#" className="social-link">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2025 สื่อการเขียนโปรแกรมและอัลกอริทึมด้วยภาษา Python. สงวนลิขสิทธิ์.</p>
          <div className="footer-links">
            <a href="#">นโยบายความเป็นส่วนตัว</a>
            <a href="#">เงื่อนไขการใช้งาน</a>
            <a href="#">ช่วยเหลือ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 