import React from "react";

export default function About() {
  return (
    <div className="content">
      <div className="content-inner" style={{maxWidth: 1100, margin: '40px auto', padding: '32px 24px', borderRadius: 32, display: 'flex', gap: 40, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start', background: 'rgba(255,255,255,0.98)', boxShadow: '0 8px 40px rgba(0,0,0,0.10)'}}>
        {/* LEFT: เกี่ยวกับเว็บไซต์ */}
        <div style={{flex: '1 1 340px', minWidth: 280, maxWidth: 480, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
          <i className="fa-solid fa-circle-info" style={{fontSize: 60, color: '#2563eb', marginBottom: 16}}></i>
          <h1 style={{fontSize: '2.2rem', fontWeight: 900, color: '#2563eb', marginBottom: 12, letterSpacing: 1}}>เกี่ยวกับเว็บไซต์</h1>
          <p style={{fontSize: '1.15rem', color: '#374151', marginBottom: 24, textAlign: 'center'}}>
            เว็บไซต์ <b>Python Quiz Game</b> นี้จัดทำขึ้นเพื่อช่วยให้นักศึกษาหรือผู้เริ่มต้นเรียนรู้การเขียนโปรแกรมภาษา Python ได้อย่างสนุก เข้าใจง่าย และทบทวนความรู้ผ่านเกมตอบคำถาม
          </p>
          <div style={{textAlign: 'left', margin: '0 auto', maxWidth: 340}}>
            <div style={{marginBottom: 10, display: 'flex', alignItems: 'center'}}>
              <i className="fa-solid fa-bullseye" style={{color:'#10b981', marginRight:8}}></i>
              <b>วัตถุประสงค์:</b> <span>เพื่อสร้างสื่อการเรียนรู้ที่ทันสมัยและใช้งานง่าย</span>
            </div>
            <div style={{marginBottom: 10, display: 'flex', alignItems: 'center'}}>
              <i className="fa-solid fa-users" style={{color:'#f59e42', marginRight:8}}></i>
              <b>กลุ่มเป้าหมาย:</b> <span>นักศึกษาและผู้เริ่มต้นเขียนโปรแกรม</span>
            </div>
            <div style={{marginBottom: 10, display: 'flex', alignItems: 'center'}}>
              <i className="fa-solid fa-gamepad" style={{color:'#f43f5e', marginRight:8}}></i>
              <b>ฟีเจอร์:</b> <span>บทเรียน วิดีโอ เกมตอบคำถาม สถิติผู้เล่น</span>
            </div>
            <div style={{marginBottom: 10, display: 'flex', alignItems: 'center'}}>
              <i className="fa-solid fa-envelope" style={{color:'#10b981', marginRight:8}}></i>
              <b>ติดต่อ:</b> <span>Sitthidet.SR@gmail.com</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <i className="fa-brands fa-github" style={{color:'#18181b', marginRight:8}}></i>
              <b>GitHub:</b> <a href="https://github.com/Sitthidet-SR" target="_blank" rel="noopener noreferrer">github.com/your-repo</a>
            </div>
          </div>
        </div>
        {/* RIGHT: รายชื่อผู้จัดทำ */}
        <div style={{flex: '1 1 340px', minWidth: 280, maxWidth: 480, background: 'rgba(246,248,255,0.95)', borderRadius: 24, boxShadow: '0 2px 12px rgba(37,99,235,0.06)', padding: '24px 18px', textAlign: 'center'}}>
          <h2 style={{fontSize: '1.5rem', fontWeight: 800, color: '#2563eb', marginBottom: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10}}>
            <i className="fa-solid fa-users"></i> รายชื่อผู้จัดทำ
          </h2>
          <div style={{overflowX: 'auto'}}>
            <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '1.08rem', background: 'white', borderRadius: 12, boxShadow: '0 1px 6px rgba(0,0,0,0.04)'}}>
              <thead>
                <tr style={{background: '#e0e7ff', color: '#2563eb'}}>
                  <th style={{padding: '8px 12px', borderRadius: '12px 0 0 0'}}>ลำดับ</th>
                  <th style={{padding: '8px 12px'}}>รหัสนักศึกษา</th>
                  <th style={{padding: '8px 12px', borderRadius: '0 12px 0 0'}}>ชื่อ-นามสกุล</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>673245002</td><td>นายพีรณัฐ ชีกิ</td></tr>
                <tr><td>2</td><td>673245003</td><td>นายวัทน์สิริ คำทองแก้ว</td></tr>
                <tr><td>3</td><td>673245004</td><td>นายสิทธิเดช สีเรือง</td></tr>
                <tr><td>4</td><td>673245005</td><td>สิบโทสิรภพ พุฒนิ่ม</td></tr>
                <tr><td>5</td><td>673245006</td><td>นายอนุวัฒน์ ขอบโคกกรวด</td></tr>
                <tr><td>6</td><td>673245007</td><td>นางสาวพีรียา พุ่มนิล</td></tr>
                <tr><td>7</td><td>673245008</td><td>นางสาวสุมาลี เกตุแก้ว</td></tr>
                <tr><td>8</td><td>673245501</td><td>นางสาวปาณิศา จิตรงามขำ</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 