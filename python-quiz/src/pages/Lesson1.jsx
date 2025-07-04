import React from "react";
import { Link } from "react-router-dom";

export default function Lesson1() {
  return (
    <div style={{minHeight: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
      <div className="content-inner" style={{maxWidth: 1100, margin: '40px auto', padding: '32px 24px', borderRadius: 32, width: '100%'}}>
        <div style={{display: 'flex', gap: '32px', maxWidth: '1400px', margin: '0 auto', padding: '24px'}}>
          {/* เนื้อหาด้านซ้าย */}
          <div style={{flex: 1, minWidth: 260}}>
            <h1>บทเรียนที่ 1: โปรแกรมแรก - Hello, World!</h1>
            <p>นี่คือโปรแกรมแรกที่นักเขียนโปรแกรมทุกคนเขียน มันเป็นจุดเริ่มต้นของการเรียนรู้ภาษาโปรแกรมมิ่ง</p>
            <b>ตัวอย่างโค้ด:</b>
            <input
              value={"print(\"Hello, World!\")"}
              readOnly
              style={{
                width: '100%',
                background: '#fff',
                color: '#18181b',
                border: '1.5px solid #e0e7ef',
                borderRadius: 12,
                fontSize: '1.15rem',
                fontFamily: 'Fira Mono, monospace',
                padding: '12px 16px',
                margin: '12px 0 18px 0',
                boxShadow: '0 2px 8px rgba(37,99,235,0.06)',
                outline: 'none',
                fontWeight: 600,
                letterSpacing: 0.5,
              }}
            />
            <b>คำอธิบาย:</b>
            <ul>
              <li><code>print()</code> คือฟังก์ชันใช้แสดงผลข้อความ</li>
              <li>ข้อความที่อยู่ในเครื่องหมาย <code>" "</code> เรียกว่า String (สตริง)</li>
              <li>เมื่อรันโปรแกรมนี้ จะแสดงผล: <code>Hello, World!</code></li>
            </ul>
            <div className="button-group">
              <Link to="/lesson/2"><button>บทถัดไป</button></Link>
              <Link to="/quiz"><button>ไปเล่นเกมตอบคำถาม</button></Link>
              <Link to="/"><button>กลับหน้าหลัก</button></Link>
            </div>
          </div>
          {/* คลิปวิดีโอ */}
          <div style={{flex: 1, minWidth: 260, display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
            <div style={{width: '100%', maxWidth: 480}}>
              <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 18, boxShadow: '0 2px 16px rgba(37,99,235,0.10)'}}>
                <iframe
                  src="https://www.youtube.com/embed/WV-L1drsXs4"
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0, borderRadius: 18}}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 