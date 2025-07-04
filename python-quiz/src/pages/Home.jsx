import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="content">
      <div className="content-inner" style={{background: 'rgba(255,255,255,0.98)', boxShadow: '0 8px 40px rgba(0,0,0,0.10)', borderRadius: 32, maxWidth: 1100, margin: '40px auto', padding: '32px 24px'}}>
        {/* HERO SECTION */}
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, marginBottom: 40}}>
          <i className="fa-brands fa-python" style={{fontSize: 72, color: '#2563eb', marginBottom: 8}}></i>
          <h1 style={{fontSize: '2.5rem', fontWeight: 900, color: '#2563eb', textAlign: 'center', margin: 0, letterSpacing: 1}}>เริ่มต้นเรียน Python อย่างสนุก!</h1>
          <p style={{fontSize: '1.25rem', color: '#374151', textAlign: 'center', margin: '8px 0 0 0', maxWidth: 600}}>
            เว็บไซต์นี้รวมเนื้อหา วิดีโอ และเกมตอบคำถาม<br/>เพื่อให้คุณเข้าใจ Python ได้ง่ายและสนุก
          </p>
          <div style={{display: 'flex', gap: 18, marginTop: 18, flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link to="/lesson/1"><button style={{fontSize: '1.25rem', padding: '18px 38px', borderRadius: 16, background: '#2563eb', color: 'white', fontWeight: 700, border: 'none', boxShadow: '0 2px 8px rgba(37,99,235,0.10)'}}><i className="fa-solid fa-play"></i> เริ่มเรียนบทแรก</button></Link>
            <Link to="/quiz"><button style={{fontSize: '1.25rem', padding: '18px 38px', borderRadius: 16, background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', color: '#18181b', fontWeight: 700, border: 'none', boxShadow: '0 2px 8px rgba(67,233,123,0.10)'}}><i className="fa-solid fa-gamepad"></i> ไปเล่นเกมตอบคำถาม</button></Link>
          </div>
        </div>
        {/* LESSON GRID */}
        <h2 style={{fontSize: '2rem', color: '#2563eb', textAlign: 'center', margin: '32px 0 18px 0', fontWeight: 800}}>
          <i className="fa-solid fa-book-open-reader" style={{marginRight: 12}}></i>เลือกบทเรียนที่คุณสนใจ
        </h2>
        <div style={{width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', margin: '0 0 32px 0'}}>
          <Link to="/lesson/1" style={{textDecoration: 'none'}}>
            <div className="lesson-card" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '28px 14px', borderRadius: '16px', color: 'white', textAlign: 'center', boxShadow: '0 4px 24px rgba(102,126,234,0.12)', transition: 'transform 0.2s', fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer'}}>
              <i className="fa-solid fa-cube fa-2x" style={{marginBottom: 10}}></i>
              <h3 style={{margin: '10px 0 4px 0', fontSize: '1.45rem', fontWeight: 900, letterSpacing: 0.5}}>บทที่ 1</h3>
              <p style={{fontWeight: 400, fontSize: '1rem'}}>ตัวแปรและชนิดข้อมูล</p>
            </div>
          </Link>
          <Link to="/lesson/2" style={{textDecoration: 'none'}}>
            <div className="lesson-card" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', padding: '28px 14px', borderRadius: '16px', color: 'white', textAlign: 'center', boxShadow: '0 4px 24px rgba(240,147,251,0.12)', transition: 'transform 0.2s', fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer'}}>
              <i className="fa-solid fa-print fa-2x" style={{marginBottom: 10}}></i>
              <h3 style={{margin: '10px 0 4px 0', fontSize: '1.45rem', fontWeight: 900, letterSpacing: 0.5}}>บทที่ 2</h3>
              <p style={{fontWeight: 400, fontSize: '1rem'}}>การแสดงผล print()</p>
            </div>
          </Link>
          <Link to="/lesson/3" style={{textDecoration: 'none'}}>
            <div className="lesson-card" style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', padding: '28px 14px', borderRadius: '16px', color: 'white', textAlign: 'center', boxShadow: '0 4px 24px rgba(79,172,254,0.12)', transition: 'transform 0.2s', fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer'}}>
              <i className="fa-solid fa-keyboard fa-2x" style={{marginBottom: 10}}></i>
              <h3 style={{margin: '10px 0 4px 0', fontSize: '1.45rem', fontWeight: 900, letterSpacing: 0.5}}>บทที่ 3</h3>
              <p style={{fontWeight: 400, fontSize: '1rem'}}>รับค่าจากผู้ใช้ input()</p>
            </div>
          </Link>
          <Link to="/lesson/4" style={{textDecoration: 'none'}}>
            <div className="lesson-card" style={{background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', padding: '28px 14px', borderRadius: '16px', color: 'white', textAlign: 'center', boxShadow: '0 4px 24px rgba(67,233,123,0.12)', transition: 'transform 0.2s', fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer'}}>
              <i className="fa-solid fa-calculator fa-2x" style={{marginBottom: 10}}></i>
              <h3 style={{margin: '10px 0 4px 0', fontSize: '1.45rem', fontWeight: 900, letterSpacing: 0.5}}>บทที่ 4</h3>
              <p style={{fontWeight: 400, fontSize: '1rem'}}>การคำนวณพื้นฐาน</p>
            </div>
          </Link>
          <Link to="/lesson/5" style={{textDecoration: 'none'}}>
            <div className="lesson-card" style={{background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', padding: '28px 14px', borderRadius: '16px', color: 'white', textAlign: 'center', boxShadow: '0 4px 24px rgba(250,112,154,0.12)', transition: 'transform 0.2s', fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer'}}>
              <i className="fa-solid fa-code-branch fa-2x" style={{marginBottom: 10}}></i>
              <h3 style={{margin: '10px 0 4px 0', fontSize: '1.45rem', fontWeight: 900, letterSpacing: 0.5}}>บทที่ 5</h3>
              <p style={{fontWeight: 400, fontSize: '1rem'}}>คำสั่ง if / else</p>
            </div>
          </Link>
          <Link to="/lesson/6" style={{textDecoration: 'none'}}>
            <div className="lesson-card" style={{background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', padding: '28px 14px', borderRadius: '16px', color: 'white', textAlign: 'center', boxShadow: '0 4px 24px rgba(168,237,234,0.12)', transition: 'transform 0.2s', fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer'}}>
              <i className="fa-solid fa-repeat fa-2x" style={{marginBottom: 10}}></i>
              <h3 style={{margin: '10px 0 4px 0', fontSize: '1.45rem', fontWeight: 900, letterSpacing: 0.5}}>บทที่ 6</h3>
              <p style={{fontWeight: 400, fontSize: '1rem'}}>ลูป for</p>
            </div>
          </Link>
          <Link to="/lesson/7" style={{textDecoration: 'none'}}>
            <div className="lesson-card" style={{background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', padding: '28px 14px', borderRadius: '16px', color: 'white', textAlign: 'center', boxShadow: '0 4px 24px rgba(255,154,158,0.12)', transition: 'transform 0.2s', fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer'}}>
              <i className="fa-solid fa-repeat fa-2x" style={{marginBottom: 10}}></i>
              <h3 style={{margin: '10px 0 4px 0', fontSize: '1.45rem', fontWeight: 900, letterSpacing: 0.5}}>บทที่ 7</h3>
              <p style={{fontWeight: 400, fontSize: '1rem'}}>ลูป while</p>
            </div>
          </Link>
          <Link to="/lesson/8" style={{textDecoration: 'none'}}>
            <div className="lesson-card" style={{background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', padding: '28px 14px', borderRadius: '16px', color: 'white', textAlign: 'center', boxShadow: '0 4px 24px rgba(161,140,209,0.12)', transition: 'transform 0.2s', fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer'}}>
              <i className="fa-solid fa-gears fa-2x" style={{marginBottom: 10}}></i>
              <h3 style={{margin: '10px 0 4px 0', fontSize: '1.45rem', fontWeight: 900, letterSpacing: 0.5}}>บทที่ 8</h3>
              <p style={{fontWeight: 400, fontSize: '1rem'}}>ฟังก์ชัน</p>
            </div>
          </Link>
          <Link to="/lesson/9" style={{textDecoration: 'none'}}>
            <div className="lesson-card" style={{background: 'linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)', padding: '28px 14px', borderRadius: '16px', color: 'white', textAlign: 'center', boxShadow: '0 4px 24px rgba(250,208,196,0.12)', transition: 'transform 0.2s', fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer'}}>
              <i className="fa-solid fa-graduation-cap fa-2x" style={{marginBottom: 10}}></i>
              <h3 style={{margin: '10px 0 4px 0', fontSize: '1.45rem', fontWeight: 900, letterSpacing: 0.5}}>บทที่ 9</h3>
              <p style={{fontWeight: 400, fontSize: '1rem'}}>สรุปและทบทวน</p>
            </div>
          </Link>
        </div>
        {/* FEATURE LIST */}
        <div style={{margin: '32px 0 0 0', display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 220}}>
            <i className="fa-solid fa-video fa-2x" style={{color: '#2563eb', marginBottom: 8}}></i>
            <span style={{fontWeight: 700, color: '#2563eb'}}>เรียนรู้จากวิดีโอ</span>
            <span style={{fontSize: '1rem', color: '#374151', textAlign: 'center'}}>เข้าใจง่ายด้วยคลิปสั้น ๆ</span>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 220}}>
            <i className="fa-solid fa-gamepad fa-2x" style={{color: '#10b981', marginBottom: 8}}></i>
            <span style={{fontWeight: 700, color: '#10b981'}}>เกมตอบคำถาม</span>
            <span style={{fontSize: '1rem', color: '#374151', textAlign: 'center'}}>ทดสอบความรู้ Python แบบสนุก</span>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 220}}>
            <i className="fa-solid fa-chart-simple fa-2x" style={{color: '#f59e42', marginBottom: 8}}></i>
            <span style={{fontWeight: 700, color: '#f59e42'}}>เก็บสถิติการเรียน</span>
            <span style={{fontSize: '1rem', color: '#374151', textAlign: 'center'}}>ดูพัฒนาการของคุณได้ตลอดเวลา</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 